import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvF2gbXxzjHQgPZZZSS59wjzdX7ing6RE",
  authDomain: "react-maria-lopez.firebaseapp.com",
  projectId: "react-maria-lopez",
  storageBucket: "react-maria-lopez.appspot.com",
  messagingSenderId: "1097904029326",
  appId: "1:1097904029326:web:04ecb1117617779f93d3df",
  measurementId: "G-492FZPFEVN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
