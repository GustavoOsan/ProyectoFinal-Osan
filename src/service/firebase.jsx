// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtNiYVgaZCu5mYF6UYTGVTKskj_7y7GE8",
    authDomain: "gustavo-osan.firebaseapp.com",
    projectId: "gustavo-osan",
    storageBucket: "gustavo-osan.firebasestorage.app",
    messagingSenderId: "374643644518",
    appId: "1:374643644518:web:e788dae43e9b929dff35a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)