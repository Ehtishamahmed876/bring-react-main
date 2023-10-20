// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCulrqkplE-pVnSnt6h3cByMpedLB1_HLE",
    authDomain: "bring-test.firebaseapp.com",
    projectId: "bring-test",
    storageBucket: "bring-test.appspot.com",
    messagingSenderId: "321266003011",
    appId: "1:321266003011:web:2d5ea892df81ac17a1b8f6",
    measurementId: "G-406SQ1SV90"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;// Import the functions you need from the SDKs you need