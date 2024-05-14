// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC__bDnHJ5M9sI0AKMdgjS10O-e4iorMoQ",
  authDomain: "fluidchess.firebaseapp.com",
  projectId: "fluidchess",
  storageBucket: "fluidchess.appspot.com",
  messagingSenderId: "326696225747",
  appId: "1:326696225747:web:b2f4e0500d1bf21f777d26",
  measurementId: "G-FMD2CZ810K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);