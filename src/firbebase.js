import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAF1P4ZV-WV5LZ3CgtCzGxej9F7MSV5nXg",
    authDomain: "clone-cbcb7.firebaseapp.com",
    databaseURL: "https://clone-cbcb7.firebaseio.com",
    projectId: "clone-cbcb7",
    storageBucket: "clone-cbcb7.appspot.com",
    messagingSenderId: "1011902039615",
    appId: "1:1011902039615:web:b94aa0b588921198445a8a",
    measurementId: "G-J8FJGBSW4M"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};