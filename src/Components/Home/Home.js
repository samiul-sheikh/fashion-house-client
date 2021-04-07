import React, { useState } from 'react';
import { useEffect } from 'react';
import Products from '../Products/Products';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fashion-house-bd.herokuapp.com/products')
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