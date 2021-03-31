import React from 'react';
import Products from '../Products/Products';

const products = [
    {
        name: 'Marks',
        image: 'marks.png'
    },
    {
        name: 'Mr. Twist',
        image: 'mrTwist.png'
    },
    {
        name: 'Ruchi',
        image: 'ruchi.png'
    }
]

const Home = () => {
    return (
        <div className="row">
            {
                products.map(product => <Products product={product}></Products>)
            }
        </div>
    );
};

export default Home;