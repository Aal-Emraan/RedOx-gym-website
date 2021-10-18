import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState([]);

    const auth = getAuth();

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const githubSignIn = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const emailSignIn = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const getUser = result.user;
            getUser.displayName = name;
            setUser(getUser);
            console.log(name, getUser)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
        })
    }, [])

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            setUser([])
        })
    }


    return {
        user,
        googleSignIn,
        githubSignIn,
        emailSignIn,
        logOut
    }

}

export default useFirebase;