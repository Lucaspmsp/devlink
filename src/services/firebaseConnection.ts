
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBpMvdvSmoWZtOpOGgoWFtISV_hLyP7Duc",
  authDomain: "reactlinks-1460c.firebaseapp.com",
  projectId: "reactlinks-1460c",
  storageBucket: "reactlinks-1460c.firebasestorage.app",
  messagingSenderId: "625384034518",
  appId: "1:625384034518:web:2bae95b2f0ad786b71b977"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };