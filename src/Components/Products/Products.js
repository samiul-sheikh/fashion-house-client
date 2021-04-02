import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

export default function Products ({ product }) {

    const history = useHistory();

    const handleBook = name => {
        const url = `/product/${name}`
        history.push(url);
    }

    return (
        // <div className="col-md-3">
        //     <img style={{ height: '300px' }} src={product.imageURL} alt="" />
        //     <h3>{product.name}</h3>
        // </div>

        <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imageURL} style={{ height: '300px', width: '300px' }} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text> price: {product.price} </Card.Text>
                    <Button onClick={() => handleBook(product.name)} variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div >
    );
};