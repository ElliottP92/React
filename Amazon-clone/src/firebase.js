import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC-aWTrWDvyHhN3vBsIDFPQX_H4-qyVoDs",
        authDomain: "fir-9c039.firebaseapp.com",
        databaseURL: "https://fir-9c039.firebaseio.com",
        projectId: "fir-9c039",
        storageBucket: "fir-9c039.appspot.com",
        messagingSenderId: "239599954119",
        appId: "1:239599954119:web:ce44ec635febd7a70c76e2",
        measurementId: "G-G876XJ8FC9",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};
