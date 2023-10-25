// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyvNFf4tvKjoN2tsDe5kT6v1FWVN5I274",
  authDomain: "cargoa-hackathon.firebaseapp.com",
  projectId: "cargoa-hackathon",
  storageBucket: "cargoa-hackathon.appspot.com",
  messagingSenderId: "207563508631",
  appId: "1:207563508631:web:ff84a6d5f08bffeb7152d2",
  measurementId: "G-T7Q0T301JY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);