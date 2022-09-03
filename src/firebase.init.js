// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYDOsjZVOVhMIz-CVOaUdAsaZc2lsDhvs",
  authDomain: "sphere-fa3cc.firebaseapp.com",
  projectId: "sphere-fa3cc",
  storageBucket: "sphere-fa3cc.appspot.com",
  messagingSenderId: "644278995306",
  appId: "1:644278995306:web:251c6ebe53312f9b2e3d13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;