import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuk4C-f41wHfNtu1mQpznmWj3ubD42m7k",
    authDomain: "cat-quiz-c4140.firebaseapp.com",
    projectId: "cat-quiz-c4140",
    storageBucket: "cat-quiz-c4140.appspot.com",
    messagingSenderId: "661524179801",
    appId: "1:661524179801:web:1a12dfa019072ad5523a48",
    measurementId: "G-ZVYNGFXWJW"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export{firestore};