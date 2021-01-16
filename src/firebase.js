import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCzK72KCX2sb2gOE8cyIBrjKqD_W50D1_I",
  authDomain: "react-slack-clone-18bc2.firebaseapp.com",
  databaseURL: "https://react-slack-clone-18bc2-default-rtdb.firebaseio.com",
  projectId: "react-slack-clone-18bc2",
  storageBucket: "react-slack-clone-18bc2.appspot.com",
  messagingSenderId: "945430678257",
  appId: "1:945430678257:web:3ca4d08deffd7686bf7750",
  measurementId: "G-CGGH8Q6S3Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;