// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT9hI1k33L7ow8g4Q3egCpXqw76A-rd0E",
  authDomain: "netflix-clone-eb92a.firebaseapp.com",
  projectId: "netflix-clone-eb92a",
  storageBucket: "netflix-clone-eb92a.appspot.com",
  messagingSenderId: "853314153075",
  appId: "1:853314153075:web:eca3599a61db98624e5806"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }