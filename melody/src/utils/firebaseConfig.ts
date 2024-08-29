// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxQswP-r8yIeMZ_ybAIcZ03GY-HP_0vxQ",
  authDomain: "melodyusers.firebaseapp.com",
  databaseURL: "https://melodyusers-default-rtdb.firebaseio.com",
  projectId: "melodyusers",
  storageBucket: "melodyusers.appspot.com",
  messagingSenderId: "581426094931",
  appId: "1:581426094931:web:48c13528cad2a228cc37a6",
  measurementId: "G-CR1ZTFTPQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { auth, firestore };

