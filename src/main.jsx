import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZOGYRE3lM5q_1Y6l_y-lyvFxKYs8GToQ",
  authDomain: "fir-ch-912e7.firebaseapp.com",
  projectId: "fir-ch-912e7",
  storageBucket: "fir-ch-912e7.appspot.com",
  messagingSenderId: "1025890652268",
  appId: "1:1025890652268:web:7bfbcd5286d2b70e8e8849"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
)
