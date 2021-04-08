import React, { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
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
                products.length === 0 && <div style={{top: '50%', left: '50%', position: 'absolute', transform: 'translate(-50%,-50%)'}}>
                    <Spinner className="" animation="border" variant="primary" />
                </div> 
            }

            {
                products.map(product => <Products product={product}></Products>)
            }
        </div>
    );
};

export default Home;