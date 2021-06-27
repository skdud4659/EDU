// bucket.js
import {firestore} from '../../firebase';

const bucket_db = firestore.collection("bucket");

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const REMOVE = "bucket/REMOVE";
const UPDATE = 'bucket/UPDATE';

const initialState = {
  is_loaded: false,
  list: [
    {text:'영화관 가기', completed: false},
    {text:'매일 책읽기', completed: false},
    {text:'수영 배우기', completed: false},
  ]
  // list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
}

// Action Creators
export const loadBucket = (bucket) => {
  return {type: LOAD, bucket};
}

export const createBucket = (bucket) => {
  return {type: CREATE, bucket};
}

export const removeBucket = (bucket) => {
  return {type: REMOVE, bucket};
}

export const updateBucket = (bucket) => {
  return {type: UPDATE, bucket};
}

// 파이어베이스랑 통신하는 부분
export const loadBucketFB = () => {
  return function (dispatch) {
    
    bucket_db.get().then((docs) => {
      let bucket_data = [];
      docs.forEach((doc) => {
        // 도큐먼트 객체를 확인해보자!
        console.log(doc);
        // 도큐먼트 데이터 가져오기
        console.log(doc.data());
        // 도큐먼트 id 가져오기
        console.log(doc.id);

        if(doc.exists){
          bucket_data = [...bucket_data, {id: doc.id, ...doc.data()}];
        }
      });

      console.log(bucket_data);
      // 이제 액션 생성 함수한테 우리가 가져온 데이터를 넘겨줘요! 그러면 끝!
      dispatch(loadBucket(bucket_data));
    });
  };
};

export const addBucketFB = (bucket) => {
  return function (dispatch) {
    console.log(bucket);
    // 생성할 데이터를 미리 만들게요!
    let bucket_data = { text: bucket, completed: false };

    // add()에 데이터를 넘겨줍시다!
    bucket_db
      .add(bucket_data)
      .then((docRef) => {
        // id를 추가한다!
        bucket_data = { ...bucket_data, id: docRef.id };

        console.log(bucket_data);

        // 성공했을 때는? 액션 디스패치!
        dispatch(createBucket(bucket_data));
      })
      .catch((err) => {
        // 여긴 에러가 났을 때 들어오는 구간입니다!
        console.log(err);
        window.alert('오류가 났네요! 나중에 다시 시도해주세요!');
      });
  };
};

export const updateBucketFB = (bucket) => {
  return function (dispatch, getState) {
    // state에 있는 값을 가져옵니다!
    const _bucket_data = getState().bucket.list[bucket];

    // id가 없으면? 바로 끝내버립시다.
    if (!_bucket_data.id) {
      return;
    }

    // 새로운 값을 만들어요!
    let bucket_data = { ..._bucket_data, completed: true };

    bucket_db
      .doc(bucket_data.id)
      .update(bucket_data)
      .then((res) => {
        dispatch(updateBucket(bucket));
      })
      .catch((err) => {
        console.log("err");
      });
  };
};

export const deleteBucketFB = (bucket) => {
  return function (dispatch, getState) {
    const _bucket_data = getState().bucket.list[bucket];
    // id가 없으면? 바로 끝내버립시다.
    if (!_bucket_data.id) {
      return;
    }
    // 삭제하기
    bucket_db
      .doc(_bucket_data.id)
      .delete()
      .then((res) => {
        dispatch(removeBucket(bucket));
      })
      .catch((err) => {
        console.log("err");
      });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD": {
      if (action.bucket.length > 0) {
        return { list: action.bucket, is_loaded: true };
      }
      
      return state;
    }

    case "bucket/CREATE": {
      const new_bucket_list = [
        ...state.list,
        action.bucket,
      ];
      return { list: new_bucket_list };
    }

    case "bucket/REMOVE": {
      const bucket_list = state.list.filter((l, idx) => {
        if(idx !== action.bucket) {
          return l;
        }
      });
      return {list:bucket_list};
    }

    case "bucket/UPDATE": {
      const bucket_list = state.list.map((l,idx) => {
        if(idx === action.bucket){
          return {...l, completed:true};
        } else {
          return l;
        }
      })
      return {list: bucket_list};
    };

    

    default: return state;
  }
}

