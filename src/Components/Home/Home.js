import React, { useState } from 'react';
import { useEffect } from 'react';
import Products from '../Products/Products';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="row">
            {
                products.map(product => <Products product={product}></Products>)
            }
        </div>
    );
};

export default Home;