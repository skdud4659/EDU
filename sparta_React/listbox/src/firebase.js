//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
      apiKey: "AIzaSyCMR12TRwFPz4hq6q7GAmmPCrCEbrblo6I",
      authDomain: "sparta-react-f0302.firebaseapp.com",
      projectId: "sparta-react-f0302",
      storageBucket: "sparta-react-f0302.appspot.com",
      messagingSenderId: "497462563376",
      appId: "1:497462563376:web:181806c880e6831ba553f5",
      measurementId: "G-WRYHBG8999"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };