import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import firebase from '../node_modules/firebase/index/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBpXoL8NGZInZniUC1Xl6qofJnsJkYBJd8",
  authDomain: "randomencounter-54d6d.firebaseapp.com",
  projectId: "randomencounter-54d6d",
  storageBucket: "randomencounter-54d6d.appspot.com",
  messagingSenderId: "797619872921",
  appId: "1:797619872921:web:609ddfed8e56de5bacc408",
  measurementId: "G-BB5LNHNCPJ",
};

const app = initializeApp(firebaseConfig);
export const authenticate = getAuth(app);

export const dataBase = getDatabase();

export const functions = getFunctions(app);
// export const anonSignIn = async () => signInAnonymously(auth);
