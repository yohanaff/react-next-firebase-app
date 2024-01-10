import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAjihPAVP9tphmLuXjAW-GB4kttKdNWZQI",
    authDomain: "nextfire-355de.firebaseapp.com",
    projectId: "nextfire-355de",
    storageBucket: "nextfire-355de.appspot.com",
    messagingSenderId: "360931504767",
    appId: "1:360931504767:web:22b716d9924c5301f6054a",
    measurementId: "G-CC5GK6PE8M"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();