import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const {pid} = useParams();
    return (
        <div>
            <h1>this is {pid} no product</h1>
            <Link to="/purchase"><button className="btn btn-dark">Buy Now</button></Link>
        </div>
    );
};

export default ProductDetails;