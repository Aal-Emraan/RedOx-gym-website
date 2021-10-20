import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState([]);
    const auth = getAuth();

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const githubSignIn = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const emailSignIn = (email, password, name, history, redirect_url) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const getUser = result.user;
            getUser.displayName = name;
            setUser(getUser);
            console.log(getUser);
            history.push(redirect_url);
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    const signInWithEmailPassword = (email, password, history, redirect_url) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user)
            // console.log("signed in");
            // console.log(user);
            history.push(redirect_url);
            // ...
          })
          .catch((error) => {
            alert(error.message);
        });
        
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }else{
                setUser([]);
            }
        })
    }, [])

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            setUser([]);
        })
    }


    return {
        user,
        setUser,
        googleSignIn,
        githubSignIn,
        emailSignIn,
        logOut,
        signInWithEmailPassword
    }

}

export default useFirebase;