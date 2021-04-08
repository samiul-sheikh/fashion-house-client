import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CheckOut = () => {

    const { id } = useParams();
    console.log(id);

    const [checkoutProduct, setCheckoutProduct] = useState({});

    useEffect(() => {
        fetch('https://fashion-house-bd.herokuapp.com/product/' + id)
            .then(res => res.json())
            .then(data => setCheckoutProduct(data))
    }, [id])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // send checkOut product information in database
    const handleOrder = () => {
        const newOrder = { ...loggedInUser, ...checkoutProduct }
        newOrder.date = new Date();
        fetch('https://fashion-house-bd.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (

        <div style={{ textAlign: 'center' }}>
            <h3>Checkout Product</h3>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{checkoutProduct.name}</td>
                        <td>1</td>
                        <td>{checkoutProduct.price}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td>{checkoutProduct.price}</td>
                    </tr>
                </tbody>
            </Table>
            <Button style={{ textAlign: 'center' }} onClick={handleOrder} variant="primary" size="lg"> <FontAwesomeIcon icon={faShoppingBasket}> </FontAwesomeIcon> Place Order</Button>
        </div>
    );
};

export default CheckOut;