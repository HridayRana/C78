import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVLzSWG6zQysnkDfU4IKLWWSKhT8e-s_g",
  authDomain: "e-ride-d43a4.firebaseapp.com",
  projectId: "e-ride-d43a4",
  storageBucket: "e-ride-d43a4.appspot.com",
  messagingSenderId: "404776911839",
  appId: "1:404776911839:web:2932edb78c50a60a12ba6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


