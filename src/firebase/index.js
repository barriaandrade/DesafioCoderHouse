import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBm8iq1oCa9gsu4ETa-zi8BGiX5plgM-pA",
    authDomain: "coder-house-ecommerce.firebaseapp.com",
    databaseURL: "https://coder-house-ecommerce.firebaseio.com",
    projectId: "coder-house-ecommerce",
    storageBucket: "coder-house-ecommerce.appspot.com",
    messagingSenderId: "829049005030",
    appId: "1:829049005030:web:ef18a5bbe5f844cb976c27",
});
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}
// Export other firebase integrations