import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");


const firebaseConfig = {
  apiKey: "AIzaSyDP0jjo5MrPQgcjjIRiS0oN_LYzcJ0JWEI",
  authDomain: "nuxt-crud-cf924.firebaseapp.com",
  databaseURL: "https://nuxt-crud-cf924.firebaseio.com",
  projectId: "nuxt-crud-cf924",
  storageBucket: "nuxt-crud-cf924.appspot.com",
  messagingSenderId: "73442913060",
  appId: "1:73442913060:web:37c8a497906d95b603a1b1"
};

// Pregunta si ya existe la inicialización de Firebase (para evitar hacerlo 2 veces. A veces marca error)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}