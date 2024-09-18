// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
// Importa los servicios de Firebase que necesitas
import { getFirestore } from "firebase/firestore"; // Si usas Firestore
import { getAnalytics } from "firebase/analytics"; // Opcional, si usas Analytics

const firebaseConfig = {
  apiKey: "AIzaSyCvF2gbXxzjHQgPZZZSS59wjzdX7ing6RE",
  authDomain: "react-maria-lopez.firebaseapp.com",
  projectId: "react-maria-lopez",
  storageBucket: "react-maria-lopez.appspot.com",
  messagingSenderId: "1097904029326",
  appId: "1:1097904029326:web:04ecb1117617779f93d3df",
  measurementId: "G-492FZPFEVN",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore (si lo usas)
const db = getFirestore(app);

// Inicializa Analytics si lo deseas usar
const analytics = getAnalytics(app);

export { app, db }; // Exporta app y db para su uso en otros archivos


