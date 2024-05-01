// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq4z9cR3hfF0EAFO5n1SFKAn06KgRwiyA",
  authDomain: "car-doctor-4101e.firebaseapp.com",
  projectId: "car-doctor-4101e",
  storageBucket: "car-doctor-4101e.appspot.com",
  messagingSenderId: "636881040292",
  appId: "1:636881040292:web:7e012bc5622eb9a9da8731",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
