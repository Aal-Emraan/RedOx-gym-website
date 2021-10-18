import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState([]);
    const [error, setError] = useState('');

    
    const auth = getAuth();

    const emailSignIn = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user);
                console.log('logged in')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user)
        }).catch((error) => {
            setError(error.message)
        });
    }

    return {
        user,
        error,
        emailSignIn,
        googleSignIn
    }

}

export default useFirebase;