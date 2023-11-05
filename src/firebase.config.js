import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEtyRMrcih_r4wXq3zV7FuPCV_QTMc8Lo",
  authDomain: "orderbrews1.firebaseapp.com",
  projectId: "orderbrews1",
  storageBucket: "orderbrews1.appspot.com",
  messagingSenderId: "323622374415",
  appId: "1:323622374415:web:49bc6bc80f6060041ae77a",
  measurementId: "G-HGSVTQG7KQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
