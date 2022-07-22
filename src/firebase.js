import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDA85OlGOC-7WNnN6A659UMRWpr4-xAWVo",
  authDomain: "clone-9fbea.firebaseapp.com",
  projectId: "clone-9fbea",
  storageBucket: "clone-9fbea.appspot.com",
  messagingSenderId: "481942116270",
  appId: "1:481942116270:web:b8ab3d37ec4dfa28cf5a3f",
  measurementId: "G-04MQ8MFE0T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export default { db, auth };
