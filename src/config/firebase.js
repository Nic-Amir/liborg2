// Import the functions you need from the SDKs you need
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxuUUM7aJXi3bAoLuVwwnBrFQfzz0kbNo",
  authDomain: "liborg-38b1f.firebaseapp.com",
  projectId: "liborg-38b1f",
  storageBucket: "liborg-38b1f.appspot.com",
  messagingSenderId: "298821232035",
  appId: "1:298821232035:web:72c954ac28cbf4c65ea616",
  measurementId: "G-4JK1PDY4WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;