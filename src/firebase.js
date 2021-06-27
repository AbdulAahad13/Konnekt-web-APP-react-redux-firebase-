// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDjSWxjPbWcWzoVfkZcR5HC82odV9UdYW4",
    authDomain: "fir-linkedin-clone-4e23b.firebaseapp.com",
    projectId: "fir-linkedin-clone-4e23b",
    storageBucket: "fir-linkedin-clone-4e23b.appspot.com",
    messagingSenderId: "584986117633",
    appId: "1:584986117633:web:37af452ea96fc7e5afe200",
    measurementId: "G-XDKYCSZZQZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };