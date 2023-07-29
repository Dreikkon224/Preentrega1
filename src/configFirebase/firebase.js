import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjpCNJkv9M1KVmOdlWKd00sUzp1Kg-wj4",
  authDomain: "byfanb-c45da.firebaseapp.com",
  projectId: "byfanb-c45da",
  storageBucket: "byfanb-c45da.appspot.com",
  messagingSenderId: "261149027856",
  appId: "1:261149027856:web:a764ee0e4c6f0d5cf3e495",
  measurementId: "G-30JND976BS"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)