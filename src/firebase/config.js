// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8jF_bRWG-wrtqBd5L1ZmvTCaqCMze9YI",
  authDomain: "chat-firebase-dd75c.firebaseapp.com",
  databaseURL: "https://chat-firebase-dd75c-default-rtdb.firebaseio.com",
  projectId: "chat-firebase-dd75c",
  storageBucket: "chat-firebase-dd75c.appspot.com",
  messagingSenderId: "107970099504",
  appId: "1:107970099504:web:a6dc63168fb23bb8f7f0f5",
  measurementId: "G-DDSE09R6B2"
};

// Initialize Firebase
const configFirebase = initializeApp(firebaseConfig);

let db = getDatabase(configFirebase)

export default db;
