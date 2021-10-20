import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark py-4 mt-5">
        <div className="row container mx-auto g-5">
            <div className="col-md-4">
                <h2 className="text-4xl font-bold mt-2"><span className="text-red-700">Red</span><span className="text-white">Ox</span></h2>
            </div>
            
            <div className="col-6 col-md-4">
                <ul className="text-white text-start">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Plans</li>
                    <li>Our Tutors</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="col-6 col-md-4">
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