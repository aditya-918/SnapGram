// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebase = require("firebase");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD8OFn6_vodkRLJVHEXLgA8iTHhuFzQXaM",
  authDomain: "firegram-5e1ce.firebaseapp.com",
  projectId: "firegram-5e1ce",
  storageBucket: "firegram-5e1ce.appspot.com",
  messagingSenderId: "90825979680",
  appId: "1:90825979680:web:958d11955c3c46b2e7c945",
  measurementId: "G-ZNRCWF33Y4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };