import React, { useState, useEffect, useContext } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    // display ordered products for specific user
    useEffect(() => {
        fetch('https://fashion-house-bd.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const placeOrderList = () => {
        return (
            orders.map(order => {
                return (
                    <React.Fragment>
                        <tbody>
                            <tr>
                                <td>{order.email}</td>
                                <td>{order.date}</td>
                                <td>{order.name}</td>
                                <td>{order.price}</td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                )
            })
        )
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>User Email</th>
                    <th>Date & Time</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
            </thead>
            {
                placeOrderList()
            }
        </Table>
    )
};
export default Orders;