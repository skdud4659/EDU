import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYoXp9Itsm4qorr4BpXKO69jPPoQCH83Y",
  authDomain: "image-community-7aa42.firebaseapp.com",
  projectId: "image-community-7aa42",
  storageBucket: "image-community-7aa42.appspot.com",
  messagingSenderId: "438892598502",
  appId: "1:438892598502:web:9c2710a88417e4d6701727",
  measurementId: "G-YKC4S9B394"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export{auth, apiKey, firestore, storage};