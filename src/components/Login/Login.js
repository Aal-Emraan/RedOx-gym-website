import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {

    const {googleSignIn, githubSignIn} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            history.push(redirect_url)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
        
    }

    const handleGithubSignIn = () => {
        githubSignIn()
        .then(result => {
            history.push(redirect_url)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const handleReload = e => {
        e.preventDefault();
    }
    return (
        <div className="w-50 mx-auto shadow p-4 rounded mt-5">
            <form onSubmit={handleReload}>
                <h4 className="fw-normal mb-4">Login</h4>
                <input type="email" placeholder="Email..." className="form-control bg-light shadow-sm p-3 mb-4 border-0" />
                <input type="password" placeholder="Password..." className="form-control bg-light shadow-sm p-3 mb-5 border-0" />
                <input type="submit" className="btn btn-danger d-block w-100 py-3 rounded-pill" value="Login" />
                <p className="mt-4 fst-italic">New user? <Link to="/signup"> Sign Up</Link></p>
                <p className="text-muted">-------------- or --------------</p>
                <button className="btn btn-success" onClick={handleGoogleSignIn}>Google Sign In</button>
                <button className="btn btn-dark ms-3" onClick={handleGithubSignIn}>Github Sign In</button>
            </form>
        </div>
    );
};

export default Login;