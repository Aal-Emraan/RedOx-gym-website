import React from 'react';
import {NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const NavBar = () => {

    const {user, logOut} = useFirebase();
    console.log(user);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light container mx-auto">
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

                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li className="nav-item"><NavLink to="/home" activeStyle={{fontWeight: "bold",color: "red"}} className="ml-5 font-semibold">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/plans" activeStyle={{fontWeight: "bold",color: "red"}} className="ml-5 font-semibold">Planes</NavLink></li>
                    <li className="nav-item"><NavLink to="/shop" activeStyle={{fontWeight: "bold",color: "red"}} className="ml-5 font-semibold">Shop</NavLink></li>
                    <li className="nav-item"><NavLink to="/about" activeStyle={{fontWeight: "bold",color: "red"}} className="ml-5 mr-6 font-semibold">About</NavLink></li>
                    <li className="nav-item">{user?.displayName || user?.email ?
                    <>
                    <img className="rounded-circle inline" style={{width:'36px'}} src={user?.photoURL ? user.photoURL : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"} alt="" />
                    <small className="font-normal ms-2 text-blue-900 font-semibold">{user?.displayName ? user.displayName : "User"}</small>
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