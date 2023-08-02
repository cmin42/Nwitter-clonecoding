import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCbr5ORYpj8E4zKdxxr7rTwqIUzwhBk5sA",
    authDomain: "ntwitter-33a28.firebaseapp.com",
    projectId: "ntwitter-33a28",
    storageBucket: "ntwitter-33a28.appspot.com",
    messagingSenderId: "792300580010",
    appId: "1:792300580010:web:84d4a13130a16f8b92b4d3"
  };

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();