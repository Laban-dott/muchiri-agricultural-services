// Firebase configuration
const firebaseConfig = {
    // You'll need to replace these with your actual Firebase config
    apiKey: "your-api-key-here",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com/",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};

// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, onValue } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export for use in other files
window.firebaseDB = {
    database,
    ref,
    push,
    set,
    onValue
};
