import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "loginonecart-b7205.firebaseapp.com",
  projectId: "loginonecart-b7205",
  storageBucket: "loginonecart-b7205.firebasestorage.app",
  messagingSenderId: "1035261284865",
  appId: "1:1035261284865:web:dfd85a847b553468886600"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider =  new GoogleAuthProvider();

export { auth, provider };