// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLeAIilk-NQnAPt9VopKxfO_OKa_u7530",
  authDomain: "gonza-wedding.firebaseapp.com",
  projectId: "gonza-wedding",
  storageBucket: "gonza-wedding.appspot.com",
  messagingSenderId: "957969713607",
  appId: "1:957969713607:web:9ce464456b8a3d0ac871e2",
  measurementId: "G-CERMZ3R4DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
