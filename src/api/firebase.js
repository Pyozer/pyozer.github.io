// Import the Firebase modules that you need in your app.
import firebase from '@firebase/app';
import '../../node_modules/firebase/database';
import { firebaseKey } from './apiKeys';

// Initalize and export Firebase.
const config = {
    apiKey: firebaseKey.apiKey,
    authDomain: firebaseKey.authDomain,
    databaseURL: firebaseKey.databaseURL,
    projectId: firebaseKey.projectId,
    storageBucket: firebaseKey.storageBucket,
    messagingSenderId: firebaseKey.messagingSenderId
};

export default firebase.initializeApp(config);