import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import firebase from "firebase/app";
import {firestore, storage} from '../../shared/firebase';

import moment from "moment";

import {actionCreators as imageActions} from "./image";

//action
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";
// const DELETE_POST = "DELETE_POST";
// const UPDATE_POST = "UPDATE_POST";

//action creators
const addPost = createAction(ADD_POST, (post) => ({post}))
const getPost = createAction(GET_POST, (post_list) => ({post_list}))
// const deletePost = createAction(DELETE_POST, (post) => ({post}))
// const updatePost = createAction(UPDATE_POST, (post) => ({post}))

//initialState
const initialState = {
  list: [],
}

const initialPost = {
  // user_info: {
  //   id: 0,
  //   user_name: 'fall',
  //   user_profile: '../../img/16FA865C-8278-4FEE-8791-D7E3A2C7C6A6.jpeg'
  // },
  image_url: '../../img/16FA865C-8278-4FEE-8791-D7E3A2C7C6A6.jpeg',
  contents: '',
  comment_cnt: 10,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
}

//파이어베이스 통신 함수
const getPostFB = () => {
  return function (dispatch, getState, {history}) {
    const postDB = firestore.collection('post');

    postDB.get().then((docs) => {
      let post_list = [];

      docs.forEach((doc) => {
        //console.log(doc.id, doc.data())

        //데이터 모양을 맞춰주자!
        let _post = doc.data();
        let post = {
          id: doc.id,
          user_info: {
            user_name: _post.user_name,
            user_profile: _post.user_profile,
            user_id: _post.user_id,
          },
          contents: _post.contents,
          image_url: _post.image_url,
          comment_cnt: _post.comment_cnt,
          insert_dt: _post.insert_dt
        }

        post_list.push(post);

      });
      //console.log(post_list)
      dispatch(getPost(post_list))
    })
  }
}

const addPostFB = (contents = "") => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    const _user = getState().user.user;
    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };

    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    // 잘 만들어졌나 확인해보세요!!
    console.log(_post);

    // getState()로 store의 상태값에 접근할 수 있어요!
    const _image = getState().image.preview;

    // 데이터가 어떤 타입인지 확인해봐요!
    console.log(typeof _image);

    // 파일 이름은 유저의 id와 현재 시간을 밀리초로 넣어줍시다! (혹시라도 중복이 생기지 않도록요!)
    const _upload = storage
      .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, "data_url");

    _upload
      .then((snapshot) => {
        snapshot.ref
          .getDownloadURL()
          .then((url) => {
            // url을 확인해봐요!
            console.log(url);
            dispatch(imageActions.uploadImage(url));
            return url;
          })
          .then((url) => {
            // return으로 넘겨준 값이 잘 넘어왔나요? :)
            // 다시 콘솔로 확인해주기!
            console.log(url);

            postDB
              .add({ ...user_info, ..._post, image_url: url })
              .then((doc) => {
                // 아이디를 추가해요!
                let post = { user_info, ..._post, id: doc.id, image_url: url };
                // 이제 리덕스에 넣어봅시다.
                dispatch(addPost(post));
                history.replace("/");
              })
              .catch((err) => {
								window.alert("앗! 포스트 작성에 문제가 있어요!");
                console.log("post 작성 실패!", err);
              });
          });
      })
      .catch((err) => {
				window.alert("앗! 이미지 업로드에 문제가 있어요!");
        console.log(err);
      });
  };
};

//reducer
export default handleActions(
  {
    [ADD_POST]: (state, action) => produce(state, (draft) => {
      draft.list.unshift(action.payload.post)
    }),

    [GET_POST]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.post_list
    })
  },
  initialState
);

//action creator export
const actionCreators = {
  addPost,
  getPost,
  getPostFB,
  addPostFB
}

export {actionCreators};
