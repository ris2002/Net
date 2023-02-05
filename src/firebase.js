import firebase from 'firebase/compat/app';
import { doc, updateDoc, deleteField } from "firebase/firestore";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyByOBt9kIysvSB0lObscfXexiR78kkrhqI",
    authDomain: "netflix-clone1-6a267.firebaseapp.com",
    projectId: "netflix-clone1-6a267",
    storageBucket: "netflix-clone1-6a267.appspot.com",
    messagingSenderId: "923323533821",
    appId: "1:923323533821:web:f225bf9e96c5be0c197194",
    measurementId: "G-QE3R89XWVL"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };