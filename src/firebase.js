import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsBbKEL6Efj1sXam2JgFu-EvvbN0mB-5g",
  authDomain: "muskinvestment-4bf7c.firebaseapp.com",
  projectId: "muskinvestment-4bf7c",
  storageBucket: "muskinvestment-4bf7c.appspot.com",
  messagingSenderId: "959806805169",
  appId: "1:959806805169:web:6d0458ec7bdecacd397e90",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
