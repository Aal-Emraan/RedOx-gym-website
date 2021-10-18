import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import { useState } from 'react';

const SignUp = () => {
    const {emailSignIn, googleSignIn, githubSignIn} = useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleName = e => {
        setName(e.target.value);
        console.log(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleReload = e => {
        e.preventDefault();
    }

    return (
        <div className="w-50 mx-auto shadow p-4 rounded mt-5">
            <form onSubmit={handleReload}>
                <h4 className="fw-normal mb-4">Sign Up</h4>
                <input type="text" placeholder="Name" className="form-control bg-light shadow-sm p-3 mb-4 border-0" onBlur={handleName} />
                <input type="email" placeholder="Email..." className="form-control bg-light shadow-sm p-3 mb-4 border-0" onBlur={handleEmail} />
                <input type="password" placeholder="Password..." className="form-control bg-light shadow-sm p-3 mb-4 border-0" />
                <input type="password" placeholder="Re-enter your password..." className="form-control bg-light shadow-sm p-3 mb-5 border-0" onBlur={handlePassword} />
                <input type="submit" className="btn btn-danger d-block w-100 py-3 rounded-pill" value="Sign Up" onClick={emailSignIn(email, password, name)}/>
                <p className="mt-4 fst-italic">Already have an account? <Link to="/login"> Login</Link></p>
                <p className="text-muted">-------------- or --------------</p>
                <button className="btn btn-success" onClick={googleSignIn}>Google Sign In</button>
                <button className="btn btn-dark ms-3" onClick={githubSignIn}>Github Sign In</button>
            </form>
        </div>
    );
};

export default SignUp;