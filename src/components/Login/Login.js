import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const handleReload = e => {
        e.preventDefault();
    }

    const {googleSignIn, githubSignIn} = useFirebase();
    return (
        <div className="w-50 mx-auto shadow p-4 rounded mt-5">
            <form onSubmit={handleReload}>
                <h4 className="fw-normal mb-4">Login</h4>
                <input type="email" placeholder="Email..." className="form-control bg-light shadow-sm p-3 mb-4 border-0" />
                <input type="password" placeholder="Password..." className="form-control bg-light shadow-sm p-3 mb-5 border-0" />
                <input type="submit" className="btn btn-danger d-block w-100 py-3 rounded-pill" value="Login" />
                <p className="mt-4 fst-italic">New user? <Link to="/signup"> Sign Up</Link></p>
                <p className="text-muted">-------------- or --------------</p>
                <button className="btn btn-success" onClick={googleSignIn}>Google Sign In</button>
                <button className="btn btn-dark ms-3" onClick={githubSignIn}>Github Sign In</button>
            </form>
        </div>
    );
};

export default Login;