import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';


// config here
const config = {
    apiKey: "AIzaSyA8-Y_6mIiAhcKeo9o8fCgr0gx99lvWnFc",
    authDomain: "netflix-5d8e8.firebaseapp.com",
    projectId: "netflix-5d8e8",
    storageBucket: "netflix-5d8e8.appspot.com",
    messagingSenderId: "933168223395",
    appId: "1:933168223395:web:5c7576f7a2dabdc902db16",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export {firebase};