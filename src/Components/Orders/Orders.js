import React, { useState, useEffect, useContext } from 'react';
import { Table } from 'react-bootstrap';
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
            <h3 style={{textAlign: 'center'}}>Thank you for placed - {orders.length} orders</h3>
            {
                orders.map(order =>
                    <div >
                        <Table striped bordered hover>
                            {/* <thead>
                                <tr>
                                    <th>User Email</th>
                                    <th>Date & Time</th>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                <tr>
                                    <td>{order.email}</td>
                                    <td>{order.date}</td>
                                    <td>{order.name}</td>
                                    <td>{order.price}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>)
            }
        </div>
    );
};

export default Orders;