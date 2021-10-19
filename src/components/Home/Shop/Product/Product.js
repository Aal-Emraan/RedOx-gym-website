import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const Product = (props) => {
    const {id,title, img, price} = props.product;
    return (
        <div className="col-md-3 p-2">
            <div className="shadow">
            <img className="d-inline-block mx-auto" src={img} alt="" />
            <h1>{title}</h1>
            <h1 className="text-2xl">Price: {price} Taka</h1>
            <Link to={`/product/${id}`}><button className="btn btn-secondary mb-4">Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Product;