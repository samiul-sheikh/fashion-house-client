import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Products = ({ product }) => {

    const history = useHistory();

    const handleBook = id => {
        const url = `/checkout/${id}`;
        history.push(url);
    }

    return (

        <div className="col-lg-3 col-md-6 pb-4">
            <Card className="">
                <Card.Img variant="top" src={product.imageURL} rounded />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <div className="d-flex justify-content-between">
                        <Card.Title>{product.price}</Card.Title>
                        <Button onClick={() => handleBook(product._id)} variant="primary"> <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Buy Now</Button>
                    </div>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Products;