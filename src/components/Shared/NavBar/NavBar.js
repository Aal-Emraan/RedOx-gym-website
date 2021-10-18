import React from 'react';
import {NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="shadow-sm">
            <div className='container mx-auto flex justify-between py-3'>
                <div>
                    <h2 className="text-4xl font-bold"><span className="text-red-700">Red</span><span>Ox</span></h2>
                </div>

                <div className="font-semibold text-xl">
                    <NavLink to="/home" className="ml-5">Home</NavLink>
                    <NavLink to="/planes" className="ml-5">Planes</NavLink>
                    <NavLink to="/shop" className="ml-5">Shop</NavLink>
                    <NavLink to="/about" className="ml-5">About</NavLink>
                    <NavLink to="/login" className="ml-5"><button className="bg-red-700 text-white rounded px-3 py-1 ml-6">Login</button></NavLink>
                    <NavLink to="/signup"><button className="bg-purple-800 text-white px-3 py-1 rounded ml-6">Sign Up</button></NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;