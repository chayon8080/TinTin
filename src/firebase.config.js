// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId
    apiKey: "AIzaSyA1NZFO-lyP2i7H5ce1UhwDHfrPyOH97tY",
    authDomain: "tintin-59725.firebaseapp.com",
    projectId: "tintin-59725",
    storageBucket: "tintin-59725.appspot.com",
    messagingSenderId: "821168157614",
    appId: "1:821168157614:web:2e7337ea5c97795629ce3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;