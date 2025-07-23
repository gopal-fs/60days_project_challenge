import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "fir-auth-7cd4b.firebaseapp.com",
    projectId: "fir-auth-7cd4b",
    storageBucket: "fir-auth-7cd4b.appspot.com", // ✅ Corrected here
    messagingSenderId: "105413375275",
    appId: "1:105413375275:web:8b40efdb0375389bf2c16e",
    measurementId: "G-PCCLS3KPNR"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const googleProvider=new GoogleAuthProvider()

export {auth,googleProvider}