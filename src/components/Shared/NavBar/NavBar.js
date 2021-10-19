import React from 'react';
import {NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const NavBar = () => {

    const {user, logOut} = useFirebase()
    return (
        <nav className="shadow-sm">
            <div className='container mx-auto flex justify-between py-3'>
                <NavLink to="/home">
                <div>
                    <h2 className="text-4xl font-bold"><span className="text-red-700">Red</span><span>Ox</span></h2>
                </div>
                </NavLink>

                <div className="font-semibold text-xl">
                    <NavLink to="/home" activeStyle={{fontWeight: "bold",color: "red"}} className="ml-5">Home</NavLink>
                    <NavLink to="/plans" activeStyle={{fontWeight: "bold",color: "red"}} className="ml-5">Planes</NavLink>
                    <NavLink to="/shop" activeStyle={{fontWeight: "bold",color: "red"}} className="ml-5">Shop</NavLink>
                    <NavLink to="/about" activeStyle={{fontWeight: "bold",color: "red"}} className="ml-5 mr-6">About</NavLink>
                    {user?.email ?
                    <>
                    <img className="rounded-circle inline" style={{width:'36px'}} src={user.photoURL} alt="" />
                    <small className="font-normal ms-2">{user.displayName}</small>
                    <button className="bg-red-700 text-white rounded px-3 py-1 ml-6" onClick={logOut}>Log Out</button>
                    </>
                    :
                    <>
                    <NavLink to="/login" className="ml-5"><button className="bg-red-700 text-white rounded px-3 py-1 ml-6">Login</button></NavLink>
                    <NavLink to="/signup"><button className="bg-purple-800 text-white px-3 py-1 rounded ml-6">Sign Up</button></NavLink>
                    </>}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;