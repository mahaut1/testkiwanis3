// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDld9SFw0A8bX9-eEwo96sVdqolxoI0vIo",
  authDomain: "kiwanis-47eda.firebaseapp.com",
  projectId: "kiwanis-47eda",
  storageBucket: "kiwanis-47eda.appspot.com",
  messagingSenderId: "772960421640",
  appId: "1:772960421640:web:e10378c6feed83d0f24ebd",
  measurementId: "G-GY3RYHB3FN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);