import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBTs8fvhAh4w0Mh-KbIrrDqNXJjhxKE3xk",
  authDomain: "valovault.firebaseapp.com",
  projectId: "valovault",
  storageBucket: "valovault.appspot.com",
  messagingSenderId: "245026495894",
  appId: "1:245026495894:web:eebf0bea5d8369e835d1b7"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with Async Storage
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const database = getFirestore();
