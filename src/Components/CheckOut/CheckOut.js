import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {

    const { id } = useParams();
    console.log(id);

    const [checkoutProduct, setCheckoutProduct] = useState({});

    useEffect(() => {
        fetch('http://localhost:8000/product/' + id)
            .then(res => res.json())
            .then(data => setCheckoutProduct(data))
    }, [id])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (

        <div style={{ textAlign: 'center' }}>
            <h1>This is Checkout Page</h1>
            <h3> Hello {loggedInUser.name} ! </h3>
            <img src={checkoutProduct.imageURL} alt=""/>
            <p>{checkoutProduct.name}</p>
            <p>{checkoutProduct.price}</p>
            <button>cheackout</button>
        </div>
    );
};

export default CheckOut;