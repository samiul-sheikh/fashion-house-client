import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {

    const { id } = useParams();
    console.log(id);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (

        <div style={{ textAlign: 'center' }}>
            <h1>This is Checkout Page</h1>
            <h3> Hello {loggedInUser.name} ! </h3>
        </div>
    );
};

export default CheckOut;