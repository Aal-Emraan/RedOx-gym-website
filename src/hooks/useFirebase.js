import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const auth = getAuth();

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const githubSignIn = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const emailSignIn = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const getUser = result.user;
            getUser.displayName = name;
            setUser(getUser);
            console.log(getUser)
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }else{
                setUser([])
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
        error,
        setError,
        setUser,
        googleSignIn,
        githubSignIn,
        emailSignIn,
        logOut
    }

}

export default useFirebase;