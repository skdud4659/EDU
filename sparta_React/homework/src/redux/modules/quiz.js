import {firestore} from '../../firebase';

const quiz_db = firestore.collection('quiz');

// Actions

// 퀴즈 데이터 가져온다
const GET_QUIZ = "quiz/GET_QUIZ";
// 유저의 응답(퀴즈 답)을 추가한다
const ADD_ANSWER = "quiz/ADD_ANSWER";
// 응답을 초기화 해준다
const RESET_ANSWER = "quiz/RESET_ANSWER";

const initialState = {
  name : '가을',
  score_texts: {
    60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
    80: "우와! 우리는 엄청 가까운 사이!",
    100: "둘도 없는 단짝이에요! :)",
  },
  answers: [],
  quiz: [
        {question:'가을이는 여자아이다.', answer:'o'},
        {question:'가을이는 2살이다.', answer:'o'},
        {question:'가을이는 투명 해먹을 좋아한다.', answer:'o'},
        {question:'가을이는 건식 간식을 싫어한다.', answer:'o'},
        // {question:'가을이는 츄르를 좋아한다.', answer:'o'},
        // {question:'가을이는 스노우슈이다.', answer:'o'},
        // {question:'가을이는 파란 눈을 가졌다.', answer:'o'},
        // {question:'가을이는 잠을 잔다.', answer:'o'},
        // {question:'가을이는 엄마를 좋아한다.', answer:'o'},
        // {question:'가을이는 귀엽다.', answer:'o'},
      ],
}

// Action Creators
export const getQuiz = (quiz_list) => {
  return { type: GET_QUIZ, quiz_list };
};

export const addAnswer = (answer) => {
  return { type: ADD_ANSWER, answer };
};

export const resetAnswer = () => {
  return { type: RESET_ANSWER };
}

//통신 함수
export const loadQuizFB = () => {
  //미들웨어
  return function (dispatch) {

    quiz_db.get().then((docs) => {
      let quiz_data = [];

      docs.forEach((doc) => {
        if(doc.exists){
          quiz_data = [...quiz_data,{id:doc.id, ...doc.data()}];
        }
      });

      dispatch(getQuiz(quiz_data));
    });
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "quiz/GET_QUIZ": {

      return { ...state, quiz: action.quiz_list };
    }

    case "quiz/ADD_ANSWER": {
      return { ...state, answers: [...state.answers, action.answer] };
    }

    case "quiz/RESET_ANSWER": {
      return {...state, answers: []};
    }

    default:
      return state;
  }
}