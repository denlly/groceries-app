// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTSNmDc0b9OhNbQ3aA2g6XJB2neEhhINQ",
  authDomain: "groceries-app-58faf.firebaseapp.com",
  projectId: "groceries-app-58faf",
  storageBucket: "groceries-app-58faf.appspot.com",
  messagingSenderId: "145390865975",
  appId: "1:145390865975:web:e1b34a235c8f85afe439b2",
  measurementId: "G-WN38DKDKRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const authentication = getAuth(app)