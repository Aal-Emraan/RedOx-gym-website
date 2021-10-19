import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const AllShopProducts = () => {

    const [allProducts, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="my-4 container mx-auto">
            <h1 className="text-4xl mb-4">Checkout Our Latest Products</h1>
            <div className="row">
                {
                    allProducts.map(product => <Product key={product.title} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllShopProducts;