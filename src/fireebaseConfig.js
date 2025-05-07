// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0L1qTP5EtINfDfwINe-Lpswg2uguvEF8",
  authDomain: "shop-games-63f51.firebaseapp.com",
  projectId: "shop-games-63f51",
  storageBucket: "shop-games-63f51.firebasestorage.app",
  messagingSenderId: "821986448926",
  appId: "1:821986448926:web:92c9a079d26ab1b1c6800f",
  measurementId: "G-7HWCBWDP1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);