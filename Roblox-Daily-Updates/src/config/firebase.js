// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAE1vylnLeDhDFlLCZcAMdN66jBG3CWMDg",
    authDomain: "robloxdailyupdates.firebaseapp.com",
    projectId: "robloxdailyupdates",
    storageBucket: "robloxdailyupdates.firebasestorage.app",
    messagingSenderId: "1015574109151",
    appId: "1:1015574109151:web:318493152d1cbec6adc26a",
    measurementId: "G-CZQ3LT4S6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);  