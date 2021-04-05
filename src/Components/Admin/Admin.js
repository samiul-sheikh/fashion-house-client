import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {

    const [show, setShow] = useState(true);

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url = `http://localhost:8000/addProduct`;
        // console.log(data)
        // console.log(productData)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log('server side res ', res))
    };

    const handleImageUpload = product => {
        // console.log(product.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'b8a0776f79e4a37c3c341318f0f61e22')
        imageData.append('image', product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h3>Add Your Product Here</h3>
            
            <button onClick={() => setShow(false)}>Manage Product</button>
            <button onClick={() => setShow(true)}>Add Product</button>

            {show?
                <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="product name" ref={register} />
                <br />
                <input name="price" defaultValue="product price" ref={register} />
                <br />
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>:
            // <p>Hello world</p>
            <ManageProduct></ManageProduct>
            }
        </div>
    );
};

export default Admin;