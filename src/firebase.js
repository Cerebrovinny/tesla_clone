import firebase from 'firebase'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkeb1blAuUGg8gD2pnIMT2jp9E_aDerLI",
    authDomain: "tesla-clone-ce644.firebaseapp.com",
    projectId: "tesla-clone-ce644",
    storageBucket: "tesla-clone-ce644.appspot.com",
    messagingSenderId: "865394488753",
    appId: "1:865394488753:web:26b723f21d83b5a45cb990"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }