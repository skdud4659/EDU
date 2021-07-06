import { createAction, handleActions } from "redux-actions";
import produce from "immer";

import { storage } from "../../shared/firebase";

//action
const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW= "SET_PREVIEW"

//action creators
const uploading = createAction(UPLOADING, (image) => ({image}))
const uploadImage = createAction(UPLOAD_IMAGE, (image) => ({image}))
const setPreview = createAction(SET_PREVIEW, (preview) => ({preview}))

//initial state
const initialState = {
  image_url: "http://via.placeholder.com/400x300",
  uploading: false,
  preview: null,
}

//firebase
const uploadImageFB = (image) => {
  return function (dispatch, getState, {history}) {
    dispatch(uploading(true));

    console.log(`images/${new Date().getTime()}_${image.name}`);
    const _upload = storage.ref(`images/${image.name}`).put(image)

    //업로드
    _upload.then((snapshot) => {
      console.log(snapshot);

      //다운로드 경로

      snapshot.ref.getDownloadURL.then((url) => {
        console.log(url);
        dispatch(uploadImage(url));
      });
    }).catch(err => {
      dispatch(uploading(false))
    })
  }
}

//reducer
export default handleActions({
  [UPLOAD_IMAGE]: (state,action) => produce(state, (draft) => {
    draft.image_url= action.payload.image_url;
    draft.uploading = false;
  }),

  [UPLOADING]: (state, action) => produce(state, (draft) => {
    draft.uploading = action.payload.uploading;
  }),

  [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
    draft.preview = action.payload.preview;
  })
}, initialState);

const actionCreators = {
  uploadImage,
  uploadImageFB,
  setPreview,
};

export { actionCreators };
