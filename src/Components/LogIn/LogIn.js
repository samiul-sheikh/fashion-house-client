import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../config/firebase.config';

const LogIn = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {

        var googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                console.log(user, token);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    return (
        <div>
            <h3>This is Login page</h3>
            <button onClick={handleGoogleSignIn}>sing in using Google</button>
        </div>
    );
};

export default LogIn;