import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {id,title, img, price} = props.product;
    return (
        <div className="col-md-3 p-2">
            <div className="shadow">
            <img className="d-inline-block mx-auto" src={img} alt="" />
            <h1 className='text-2xl font-semibold text-secondary'>{title}</h1>
            <h1 className="text-2xl my-2">Price: {price} Taka</h1>
            <Link to={`/product/${id}`}><button className="btn text-white bg-red-800 mb-4">See Details</button></Link>
            </div>
        </div>
    );
};

export default Product;