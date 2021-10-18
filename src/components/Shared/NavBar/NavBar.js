import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div className='container mx-auto flex justify-between my-3'>
                <div>
                    <h2 className="text-4xl font-bold"><span className="text-red-700">Red</span><span>Ox</span></h2>
                </div>

                <div>
                    <Link to="/home">Home</Link>
                    <Link to="/planes">Planes</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;