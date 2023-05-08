import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getAuth, GoogleAuthProvider, signInWithPopup,signInWithPhoneNumber} from "firebase/auth";

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

const provider=new GoogleAuthProvider()
export const signInwithGoogle =()=>{
  console.log("sign in")
  signInWithPopup(auth,provider)
  .then((result)=>{
      console.log(result);
      const displayName=result.user.displayName;
      localStorage.setItem("name",displayName);
      window.location.reload(false);

  }).catch((error)=>{
      console.log(error);
  });
  
  
};
//phonenumber
// const phoneNumber = getPhoneNumberFromUserInput();
// const appVerifier = window.recaptchaVerifier;

// export const signwithphone=()=>{signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       let code = window.prompt('Please enter the 6 digit code');
//       return confirmationResult.confirm(code);
//       window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//     });
//   }