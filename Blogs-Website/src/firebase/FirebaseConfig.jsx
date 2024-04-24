import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCH-L8Zg0BEqZ9bSRAHCJOHAAWgL4-0zwc",
  authDomain: "bloggang-1e869.firebaseapp.com",
  projectId: "bloggang-1e869",
  storageBucket: "bloggang-1e869.appspot.com",
  messagingSenderId: "625417828740",
  appId: "1:625417828740:web:a9e326fc72ea5a066605d1",
  measurementId: "G-6FQC09J8TD"
};


const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb,auth,storage}