// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCma7f9l1Zn8O-1WyaAtgrUgca9LAmoNpQ",
  authDomain: "fir-auth-7cd4b.firebaseapp.com",
  projectId: "fir-auth-7cd4b",
  storageBucket: "fir-auth-7cd4b.firebasestorage.app",
  messagingSenderId: "105413375275",
  appId: "1:105413375275:web:8b40efdb0375389bf2c16e",
  measurementId: "G-PCCLS3KPNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider()

export {auth,googleProvider}