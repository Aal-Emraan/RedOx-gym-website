import React from 'react';
import {NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const NavBar = () => {

    const {user, logOut} = useFirebase();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <NavLink to="/home">
                    <div>
                        <h2 className="text-4xl font-bold"><span className="text-red-700">Red</span><span>Ox</span></h2>
                    </div>
                    </NavLink>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                    <li className="nav-item"><NavLink to="/home" activeStyle={{fontWeight: "bold",color: "red"}} className="ml-5">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/plans" activeStyle={{fontWeight: "bold",color: "red"}} className="ml-5">Planes</NavLink></li>
                    <li className="nav-item"><NavLink to="/shop" activeStyle={{fontWeight: "bold",color: "red"}} className="ml-5">Shop</NavLink></li>
                    <li className="nav-item"><NavLink to="/about" activeStyle={{fontWeight: "bold",color: "red"}} className="ml-5 mr-6">About</NavLink></li>
                    <li className="nav-item">{user?.email ?
                    <>
                    <img className="rounded-circle inline" style={{width:'36px'}} src={user.photoURL} alt="" />
                    <small className="font-normal ms-2">{user.displayName}</small>
                    <button className="bg-red-700 text-white rounded px-3 py-1 ml-6" onClick={logOut}>Log Out</button>
                    </>
                    :
                    <>
                    <NavLink to="/login" className="ml-5"><button className="bg-red-700 text-white rounded px-3 py-1 ml-6">Login</button></NavLink>
                    <NavLink to="/signup"><button className="bg-purple-800 text-white px-3 py-1 rounded ml-6">Sign Up</button></NavLink>
                    </>}</li>

                </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;