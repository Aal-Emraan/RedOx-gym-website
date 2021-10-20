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
                <h2 className="text-2xl font-semibold text-start mt-5  mb-3 italic">Eqqipements</h2>
                {
                    allProducts.slice(4,8).map(product => <Product key={product.title} product={product}></Product>)
                }
                <h2 className="text-2xl font-semibold text-start mt-5 mb-3 italic">Suppliments</h2>
                {
                    allProducts.slice(0,4).map(product => <Product key={product.title} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllShopProducts;