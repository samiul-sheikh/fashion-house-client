import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageProduct = () => {

    const [showProduct, setShowProduct] = useState([])

    useEffect(() => {
        fetch('https://fashion-house-bd.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setShowProduct(data))
    }, [])

    const deleteProduct = id => {
        fetch('https://fashion-house-bd.herokuapp.com/deleteProduct/' + id, {
            method: 'DELETE'
        })
    }

    const productList = () => {
        return (
            showProduct.map(product => {
                return (
                    <React.Fragment>
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
                    </React.Fragment>
                )
            })
        )
    }
    return (
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            {
                productList()
            }
        </Table>
    )
};

export default ManageProduct;