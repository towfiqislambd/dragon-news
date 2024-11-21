import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4PaLxCYd9GKzfs0SBd5LNP_Nk_YF9qnQ",
  authDomain: "simple-firebase-aa838.firebaseapp.com",
  projectId: "simple-firebase-aa838",
  storageBucket: "simple-firebase-aa838.firebasestorage.app",
  messagingSenderId: "778069379994",
  appId: "1:778069379994:web:ac9b9e5a8f15113e5f8823"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;