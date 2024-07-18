
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyABtN0VkBoourbwARliOurMzonmLUMvpjM",
  authDomain: "react-netflix-clone-f4ae5.firebaseapp.com",
  projectId: "react-netflix-clone-f4ae5",
  storageBucket: "react-netflix-clone-f4ae5.appspot.com",
  messagingSenderId: "971527563674",
  appId: "1:971527563674:web:1be9cbca5c7695879d3223",
  measurementId: "G-DR1VRVZJZT"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
