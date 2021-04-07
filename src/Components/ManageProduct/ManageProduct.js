import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

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
            <h3 style={{ textAlign: 'center' }}>Total Products In Store: {showProduct.length} Items</h3>
            {
                showProduct.map(product =>
                    // <div>
                    //     <h6>name: {product.name}</h6>
                    //     <h6>price: {product.price}</h6>
                    //     <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    // </div>
                    <Table responsive striped bordered hover>
                        {/* <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead> */}
                        <tbody>
                            <tr>
                                <td>{product.name} </td>
                                <td>1</td>
                                <td>{product.price}</td>
                                <td>
                                    <Button className="shadow-none mx-1" variant="success" size="sm">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Button>
                                    <Button onClick={() => deleteProduct(product._id)} className="shadow-none mx-1" variant="danger" size="sm">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </Button></td>
                            </tr>
                        </tbody>
                    </Table>
                )
            }
        </div>
    );
};

export default ManageProduct;