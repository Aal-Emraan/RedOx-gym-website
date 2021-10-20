import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const SignUp = () => {
    const {emailSignIn, googleSignIn, githubSignIn, error} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [ggError, setError] = useState('');

    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';

    // const handleEmailSignIn = (email, password, name) => {
    //     emailSignIn(email, password, name)
    //     .then(result => {
    //         result.user && history.push('/home');
    //     })
    //     .catch((error) => {
    //         setError(error.message);
    //     });
    // }

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

    const handleName = e => {
        setName(e.target.value);
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleReload = e => {
        e.preventDefault();
        emailSignIn(email,password,name, history, redirect_url)
    }

    return (
        <div className="w-50 mx-auto shadow p-4 rounded mt-5">
            <form onSubmit={handleReload}>
                <h4 className="fw-normal mb-4">Sign Up</h4>
                <input type="text" placeholder="Name" className="form-control bg-light shadow-sm p-3 mb-4 border-0" onBlur={handleName} />
                <input type="email" placeholder="Email..." className="form-control bg-light shadow-sm p-3 mb-4 border-0" onBlur={handleEmail} />
                <input type="password" placeholder="Password..." className="form-control bg-light shadow-sm p-3 mb-4 border-0" />
                <input type="password" placeholder="Re-enter your password..." className="form-control bg-light shadow-sm p-3 mb-5 border-0" onBlur={handlePassword} />
                <input type="submit" className="btn btn-danger d-block w-100 py-3 rounded-pill" value="Sign Up"/>
                <p className="mt-4 fst-italic">Already have an account? <Link to="/login"> Login</Link></p>
                <p className="text-muted">-------------- or --------------</p>
                <button className="btn btn-success" onClick={handleGoogleSignIn}>Google Sign In</button>
                <button className="btn btn-dark ms-3" onClick={handleGithubSignIn}>Github Sign In</button>
            </form>
        </div>
    );
};

export default SignUp;