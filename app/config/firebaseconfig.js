// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxxqk7NRVqtXb334WDGh8KjnxM6oehmgU",
  authDomain: "informationsystem-5cde9.firebaseapp.com",
  projectId: "informationsystem-5cde9",
  storageBucket: "informationsystem-5cde9.appspot.com",
  messagingSenderId: "896446265876",
  appId: "1:896446265876:web:3b74da9a715eb9a7374501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*  

, {
  host: 'localhost:5554',
  ssl: false,
  experimentalForceLongPolling: true
}

*/
export const db = getFirestore(app);