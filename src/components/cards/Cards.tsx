import React from 'react';
import Card from './Card';
import {Grid} from "@mui/material";

const Cards = () => {
    return (
        <Grid container spacing={3}>
            <Card/>
            <Card/>
            <Card/>
        </Grid>
    );
};

export default Cards;
