import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhuMmosZUHA9_EpZI7byodN6bEG5wm3dA",
  authDomain: "cyp-su.firebaseapp.com",
  projectId: "cyp-su",
  storageBucket: "cyp-su.appspot.com",
  messagingSenderId: "498100333883",
  appId: "1:498100333883:web:24e0da7d636a61dd1edb1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app, db}