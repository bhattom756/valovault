import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// import Constants from 'expo-constants'

const firebaseConfig = {
  apiKey: "AIzaSyBTs8fvhAh4w0Mh-KbIrrDqNXJjhxKE3xk",
  authDomain: "valovault.firebaseapp.com",
  projectId: "valovault",
  storageBucket: "valovault.appspot.com",
  messagingSenderId: "245026495894",
  appId: "1:245026495894:web:eebf0bea5d8369e835d1b7"
  };
  


initializeApp(firebaseConfig)
export const auth = getAuth()
export const database = getFirestore()