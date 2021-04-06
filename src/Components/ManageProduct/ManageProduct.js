import React, { useState } from 'react';
import { useEffect } from 'react';

const ManageProduct = () => {

    const [showProduct, setShowProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setShowProduct(data))
    }, [])

    const deleteProduct = id => {
        fetch('http://localhost:8000/deleteProduct/' + id, {
            method: 'DELETE'
        })
    }

    return (
        <div>
            <h3>Total Product: {showProduct.length}</h3>
            {
                showProduct.map(product =>
                    <div>
                        <h6>name: {product.name}</h6>
                        <h6>price: {product.price}</h6>
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    </div>)
            }
        </div>
    );
};

export default ManageProduct;