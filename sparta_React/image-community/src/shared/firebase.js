import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0olm-KRlbI4Efq4zi9R1syqDL2xReJsE",
  authDomain: "image-community-244f6.firebaseapp.com",
  projectId: "image-community-244f6",
  storageBucket: "image-community-244f6.appspot.com",
  messagingSenderId: "1041657171295",
  appId: "1:1041657171295:web:9b31cf94fb2692d15abaea",
  measurementId: "G-8F4DH9YMH6",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export{auth, apiKey};