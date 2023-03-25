import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8VdWeIL6vv67BEgX6CfHE_WC2rn5Nfe4",
  authDomain: "makemytrip-clone-62a66.firebaseapp.com",
  projectId: "makemytrip-clone-62a66",
  storageBucket: "makemytrip-clone-62a66.appspot.com",
  messagingSenderId: "866119557269",
  appId: "1:866119557269:web:5d66f2909f05c1a4a67b9c",
  measurementId: "G-Z61GB2NQ4R"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth}