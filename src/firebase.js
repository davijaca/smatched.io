import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCqzAk6XncSIQvY1xUQ2CUALBensMBXiFQ",
    authDomain: "newsletter-signup-f060b.firebaseapp.com",
    projectId: "newsletter-signup-f060b",
    storageBucket: "newsletter-signup-f060b.appspot.com",
    messagingSenderId: "622271714344",
    appId: "1:622271714344:web:257b8ebc8eaaa5c817d11d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
