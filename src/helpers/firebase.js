// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_apiKey);

const firebaseConfig = {
  apiKey: "AIzaSyD3lzS3q3XY1hC42vtS9DNpq9aafDiO_Zo",
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function SignUp(email, password) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
  }
}

export async function LoginUser(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}
