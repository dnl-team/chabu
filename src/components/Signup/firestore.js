import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCWHqIJknbGwsmeKAPHiEoQjmDIh2F3F1Q",
    authDomain: "svelte-firebase-be6be.firebaseapp.com",
    databaseURL: "https://svelte-firebase-be6be.firebaseio.com",
    projectId: "svelte-firebase-be6be",
    storageBucket: "svelte-firebase-be6be.appspot.com",
    messagingSenderId: "393927940990",
    appId: "1:393927940990:web:6ee5cf31e9adf1f859312f",
    measurementId: "G-9KBY3T2H8F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();