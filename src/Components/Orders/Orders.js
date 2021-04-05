import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';

const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    // display ordered products for specific user
    useEffect(() => {
        fetch('http://localhost:8000/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div>
            <h3>You place: {orders.length} orders</h3>
            {
                orders.map(order => <li>{order.email} product : {order.name} price: {order.price} </li>)
            }
        </div>
    );
};

export default Orders;