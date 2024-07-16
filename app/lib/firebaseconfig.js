// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQZNflJFY35gujbU1aNi3VjQNYQ4c5qPg",
  authDomain: "zoowaj-7af39.firebaseapp.com",
  projectId: "zoowaj-7af39",
  storageBucket: "zoowaj-7af39.appspot.com",
  messagingSenderId: "889528673849",
  appId: "1:889528673849:web:4d119ce53a25ab40e74fe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');

export const roomRef = collection(db, 'rooms');
