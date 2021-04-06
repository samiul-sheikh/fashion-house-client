import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

const Products = ({ product }) => {

    // const { id } = useParams();
    // console.log(id);

    const history = useHistory();

    const handleBook = id => {
        const url = `/checkout/${id}`;
        history.push(url);
    }

    return (
        
        <div className="col-md-3">
            <Card className="px-5 py-10 shadow" style={{ width: '18rem', borderRadius: '15px' }}>
                <Card.Img variant="top" src={product.imageURL} rounded style={{height: '300px', width: '200px'}} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text> price: {product.price} </Card.Text>
                    <Button onClick={() => handleBook(product._id)} variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Products;