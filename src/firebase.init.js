import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
// console.log(firebaseConfig);

const firebaseConfig = {
  apiKey: "AIzaSyBxz4EpJwjvLD0TXa5qRqbpwigwy-QhK4k",
  authDomain: "doctor-portal-2b7ef.firebaseapp.com",
  projectId: "doctor-portal-2b7ef",
  storageBucket: "doctor-portal-2b7ef.appspot.com",
  messagingSenderId: "282506156722",
  appId: "1:282506156722:web:05c0dbd0164047fe1b87ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
