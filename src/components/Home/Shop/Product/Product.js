import React from 'react';

const Product = (props) => {
    const {title, img, price} = props.product;
    return (
        <div className="col-3">
            <div className="card">
            <img src={img} alt="" />
            <h1 className="text-2xl">Price: {price} Taka</h1>
            </div>
        </div>
    );
};

export default Product;