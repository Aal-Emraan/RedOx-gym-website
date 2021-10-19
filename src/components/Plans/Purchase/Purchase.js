import React from 'react';
import { Link } from 'react-router-dom';

const Purchase = () => {
    return (
        <div className="card my-5 p-16 container mx-auto shadow">
            <h1 className="text-4xl my-5">Thanks for purchesing!</h1>
            <Link to="/home"><button className="btn btn-danger">Go Home</button></Link>
        </div>
    );
};

export default Purchase;