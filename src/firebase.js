import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCanxsIzq3tXJf2OsxzEGWIeGKVH5FtqpM",
    authDomain: "chat-c95bf.firebaseapp.com",
    projectId: "chat-c95bf",
    storageBucket: "chat-c95bf.appspot.com",
    messagingSenderId: "156971689160",
    appId: "1:156971689160:web:8c7e0de34203f51848f1fd"
  }).auth();