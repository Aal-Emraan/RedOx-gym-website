import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark py-4">
        <div className="flex container mx-auto justify-between">
            <div></div>
            
            <div>
                <ul className="text-white text-start">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Plans</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div>
                <h2 className="text-4xl font-bold mt-2"><span className="text-red-700">Red</span><span className="text-white">Ox</span></h2>
            </div>
            <div>
                <ul className="text-white text-start">
                    <li>Contact Us</li>
                    <li>Adress: Sylhet</li>
                    <li>Email: redoxgym@gmail.com</li>
                    <li>Hotline: +32783829879</li>
                </ul>
            </div>
            <div></div>
        </div>
        <p className="text-white mt-4">&copy; copyright 2021. RedOx Gym Center.</p>
        </div>
    );
};

export default Footer;