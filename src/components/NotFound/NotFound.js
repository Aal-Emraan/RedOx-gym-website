import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container mx-auto p-5 shadow-lg">
            <img className="w-100 mb-3 rounded" src="https://www.prestashop.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln" alt="" />
            <Link to="/home"><button className="btn btn-danger py-3 w-100">Go Home</button></Link>
        </div>
    );
};

export default NotFound;