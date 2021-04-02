import React from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker
} from '@material-ui/pickers';

const CheckOut = () => {

    const { name } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleOrderDate = (date) => {
        // const newDates = { ...selectedDate }
        // newDates = date;
        setSelectedDate(date);
        // setSelectedDate(newDates);
    };

    const checkOutProduct = () => {

    }

    return (
        
        <div style={{ textAlign: 'center' }}>
            <h3>This is Checkout Page</h3>
            <h1> Hello {loggedInUser.name} ! </h1>
            <h2>You order product: {name} </h2>
            <p>Want a <Link to="/home">different product?</Link> </p>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Order Date"
                        value={selectedDate}
                        onChange={handleOrderDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Order Time"
                        value={selectedDate}
                        onChange={handleOrderDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </Grid>
                <Button onClick={checkOutProduct} variant="contained" color="primary">Cheakout</Button>
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default CheckOut;