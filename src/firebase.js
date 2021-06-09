// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCAsw2zC6_s7g_XA7OLGegAW-GfN-Ta67Y",
    authDomain: "clone1-67b33.firebaseapp.com",
    projectId: "clone1-67b33",
    storageBucket: "clone1-67b33.appspot.com",
    messagingSenderId: "10172949712",
    appId: "1:10172949712:web:d6a6b64aabb72cdf3d2ad5",
    measurementId: "G-H7JD01ZEFK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };