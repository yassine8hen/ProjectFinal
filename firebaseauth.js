import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import {getAuth, creatUserWithEmailAndPassword,LoginWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.13.0/firebaseauth.js";
import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeeK615zshYWda5uPmxzTyaUP1R7Xhj48",
  authDomain: "login-ed4c8.firebaseapp.com",
  projectId: "login-ed4c8",
  storageBucket: "login-ed4c8.appspot.com",
  messagingSenderId: "853416067845",
  appId: "1:853416067845:web:0e1d436df9844672512d6c",
  measurementId: "G-J32GGSZ4VZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const login=document.getElementsByClassName('btn');
login.addEventListener('click',(e)=>{
    e.preventDefault();
})