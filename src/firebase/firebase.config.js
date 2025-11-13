// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkEOHN_FOCX1ofc7DkVxmXBIQvzz8sYvA",
  authDomain: "pawmart-client-9b327.firebaseapp.com",
  projectId: "pawmart-client-9b327",
  storageBucket: "pawmart-client-9b327.firebasestorage.app",
  messagingSenderId: "127777180062",
  appId: "1:127777180062:web:557dd42bde266425c16e8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);