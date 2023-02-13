// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDozHhSqM20VfPL_s3Z9NR3MjbXjeuR2O0",
  authDomain: "clone-422e4.firebaseapp.com",
  projectId: "clone-422e4",
  storageBucket: "clone-422e4.appspot.com",
  messagingSenderId: "382563486554",
  appId: "1:382563486554:web:b689a666f736602e86c163",
  measurementId: "G-V5508YV3WY"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};
