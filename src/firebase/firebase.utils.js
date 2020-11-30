import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import SignIn from '../components/sign-in/sign-in.component';

const config = {
    apiKey: "AIzaSyBvWo2T8hjQCLfSQKZio7OioJzEu8xKfps",
    authDomain: "crwn-db-67f60.firebaseapp.com",
    databaseURL: "https://crwn-db-67f60.firebaseio.com",
    projectId: "crwn-db-67f60",
    storageBucket: "crwn-db-67f60.appspot.com",
    messagingSenderId: "601225599375",
    appId: "1:601225599375:web:278c037f2c1bd58e55d3fa",
    measurementId: "G-KKQX3K75R3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;