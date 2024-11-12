// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQaj3LjDAn-nnWErz257CRt0UNn15xETY",
  authDomain: "main-simple.firebaseapp.com",
  projectId: "main-simple",
  storageBucket: "main-simple.firebasestorage.app",
  messagingSenderId: "844724427506",
  appId: "1:844724427506:web:a4f942771d035997eb4e6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);