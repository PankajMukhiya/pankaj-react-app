// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import database
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBSGwhuzfoeY4NOqyUovDKFduHMTw0AIws",
//   authDomain: "contact-form-c6c94.firebaseapp.com",
//   databaseURL: "https://contact-form-c6c94-default-rtdb.firebaseio.com",
//   projectId: "contact-form-c6c94",
//   storageBucket: "contact-form-c6c94.appspot.com",
//   messagingSenderId: "840474384050",
//   appId: "1:840474384050:web:dfb3342d2f2a116cf19bab",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
