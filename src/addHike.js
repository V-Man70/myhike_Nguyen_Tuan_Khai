import { db } from "./firebaseConfig.js";
import { onAuthReady } from "./authentication.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Remember the logged-in user so we can save their ID with the hike
let currentUser = null;

onAuthReady(function (user) {
    if (!user) {
        location.href = "index.html";   // Not logged in → go away
        return;
    }
    currentUser = user;                 // Logged in → remember them
});

