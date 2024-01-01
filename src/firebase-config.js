// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOJzJ2bKRlNJKGDr2ZmfP3jGYkaXYEk8c",
  authDomain: "chat-app-6c43b.firebaseapp.com",
  projectId: "chat-app-6c43b",
  storageBucket: "chat-app-6c43b.appspot.com",
  messagingSenderId: "900596390989",
  appId: "1:900596390989:web:9d0bccbbeb599d72ad5004",
  measurementId: "G-75MHYP3JWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);