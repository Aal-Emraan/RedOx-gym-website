import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const AllShopProducts = () => {

    const [allProducts, setProducts] = useState([]);

    useEffect(() => {
        fetch('./fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const products = allProducts[0];
    const secondProducts = allProducts[1];

    return (
        <div className="my-4 container mx-auto">
            <h1 className="text-4xl mb-4">Checkout Our Latest Products</h1>
            <div className="row">
                {
                    products.map(product => <Product key={product.title} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllShopProducts;