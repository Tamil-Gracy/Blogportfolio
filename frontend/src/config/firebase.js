import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWDtVI3d5_Hc0XJip8ap0ep2PpGrJQUJg",
  authDomain: "blogportfolio-b7deb.firebaseapp.com",
  projectId: "blogportfolio-b7deb",
  storageBucket: "blogportfolio-b7deb.firebasestorage.app",
  messagingSenderId: "1059783934414",
  appId: "1:1059783934414:web:f7aaffcceaf4ebe68f6b9f",
  measurementId: "G-L0TH55CD15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;