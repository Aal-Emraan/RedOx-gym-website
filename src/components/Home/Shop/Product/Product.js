import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const Product = (props) => {
    const {id,title, img, price} = props.product;
    return (
        <div className="col-3">
            <div className="card">
            <img src={img} alt="" />
            <h1 className="text-2xl">Price: {price} Taka</h1>
            <Link to={`/product/${id}`}><button className="btn btn-secondary">Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Product;