// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdhya9wCnkDFs06bdw0_grWtxaH-noBO0",
    authDomain: "ev-charging-app-ff74a.firebaseapp.com",
    projectId: "ev-charging-app-ff74a",
    storageBucket: "ev-charging-app-ff74a.appspot.com",
    messagingSenderId: "1095929953159",
    appId: "1:1095929953159:web:2f1bf62c837cf4cca7f122",
    measurementId: "G-TYNZR5SKGP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
