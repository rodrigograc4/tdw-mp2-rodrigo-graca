// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA32PEy0vgTTrZKNEj4DnJJOaEAmLH0e9c",
    authDomain: "charmandex-tdw.firebaseapp.com",
    projectId: "charmandex-tdw",
    storageBucket: "charmandex-tdw.firebasestorage.app",
    messagingSenderId: "726471621427",
    appId: "1:726471621427:web:b5c92b1c719a0fe6d2dc46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o Firestore
export const db = getFirestore(app);