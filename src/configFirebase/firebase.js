import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA62ZEFWZjkWFDIFRDgM2TZxNOipcVV-ss",
  authDomain: "byfana-fd330.firebaseapp.com",
  projectId: "byfana-fd330",
  storageBucket: "byfana-fd330.appspot.com",
  messagingSenderId: "191931388540",
  appId: "1:191931388540:web:bcca99f3d973b997d1aff9",
  measurementId: "G-9CE2C52KGD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);