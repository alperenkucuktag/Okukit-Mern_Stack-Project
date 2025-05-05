// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//FİREBASE DEN ALDIĞIMIZ LİNKİ BURAYA YAPIŞTIRDIM
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAESAgqwcypvQ-7728Iz_1RgG5XxMln4ZA",
  authDomain: "okukit-ccb98.firebaseapp.com",
  projectId: "okukit-ccb98",
  storageBucket: "okukit-ccb98.firebasestorage.app",
  messagingSenderId: "405062732649",
  appId: "1:405062732649:web:8e2e7871c2253b31504bf8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
