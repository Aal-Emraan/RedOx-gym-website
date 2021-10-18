import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="my-4 container mx-auto">
            <h1 className="text-4xl mb-4">Checkout Our Latest Products</h1>
            <div className="row">
                {
                    products[0].map(product => <Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;