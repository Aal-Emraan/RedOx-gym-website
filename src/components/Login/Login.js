import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {

    const {error , setError, googleSignIn, githubSignIn, signInWithEmailPassword} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const redirect_url = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            history.push(redirect_url)
        })
        .catch((error) => {
            setError(error.message);
        });
        
    }

    const handleGithubSignIn = () => {
        githubSignIn()
        .then(result => {
            history.push(redirect_url)
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    const handleReload = e => {
        e.preventDefault();
        signInWithEmailPassword(email, password, history, redirect_url);
    }
    return (
        <div className="w-50 mx-auto shadow p-4 rounded mt-5">
            <form onSubmit={handleReload}>
                <h4 className="fw-normal mb-4">Login</h4>
                <input type="email" placeholder="Email..." className="form-control bg-light shadow-sm p-3 mb-4 border-0" onBlur={handleEmail} />
                <input type="password" placeholder="Password..." className="form-control bg-light shadow-sm p-3 mb-5 border-0" onBlur={handlePassword} />
                <input type="submit" className="btn btn-danger d-block w-100 py-3 rounded-pill" value="Login"/>
            </form>
                <p className="mt-4 fst-italic">New user? <Link to="/signup"> Sign Up</Link></p>
                <p className="text-muted">-------------- or --------------</p>
                <button className="btn btn-success" onClick={handleGoogleSignIn}>Google Sign In</button>
                <button className="btn btn-dark ms-3" onClick={handleGithubSignIn}>Github Sign In</button>
        </div>
    );
};

export default Login;