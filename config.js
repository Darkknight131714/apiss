const firebase = require('firebase/app');
const {getFirestore} =require('firebase/firestore/lite');
const firebaseConfig = {
  apiKey: "AIzaSyD2oI9BgVLZ07pgxw8eFyn6M2U012CWnhM",
  authDomain: "image-tutorial-478aa.firebaseapp.com",
  projectId: "image-tutorial-478aa",
  storageBucket: "image-tutorial-478aa.appspot.com",
  messagingSenderId: "62801400747",
  appId: "1:62801400747:web:a1658aec205b5b958fb8ee"
};


firebase.initializeApp(firebaseConfig);
const db=getFirestore();

module.exports=db;