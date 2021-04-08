import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Products = ({ product }) => {

    const history = useHistory();

    const handleBook = id => {
        const url = `/checkout/${id}`;
        history.push(url);
    }

    return (

        <div className="col-md-3 mt-4">
            <Card className="" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imageURL} rounded />
                <Card.Body>
                    <Card.Title style={{textAlign: 'center' }}>{product.name}</Card.Title>
                    <div className="d-flex justify-content-between">
                        <Card.Title>{product.price}</Card.Title>
                        <Button onClick={() => handleBook(product._id)} variant="primary">Buy Now</Button>
                    </div>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Products;