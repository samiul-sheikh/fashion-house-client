import React from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {

    const { name } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (

        <div style={{textAlign: 'center'}}>
            <h3>This is Checkout Page</h3>
            <h1> Hello {loggedInUser.name} ! </h1>
            <h2>You order product: {name} </h2>
            <p>Want a <Link to="/home">different product?</Link> </p>
        </div>
    );
};

export default CheckOut;