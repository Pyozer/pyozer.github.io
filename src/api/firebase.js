// Import the Firebase modules that you need in your app.
import firebase from '@firebase/app';
import '../../node_modules/firebase/database';

// Initalize and export Firebase.
const config = {
    apiKey: "AIzaSyB4OinyE-e9baqVQEuqhnorU-Yzbdl3W1Y",
    authDomain: "pyozer-github-io.firebaseapp.com",
    databaseURL: "https://pyozer-github-io.firebaseio.com",
    projectId: "pyozer-github-io",
    storageBucket: "",
    messagingSenderId: "720004809027"
};

export default firebase.initializeApp(config);