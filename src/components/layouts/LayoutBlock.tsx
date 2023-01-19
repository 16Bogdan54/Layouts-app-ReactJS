import React from 'react';
import {Box}from '@mui/material'
import './testStyles/testStyles.css'
import { Resizable } from "re-resizable";


const items: number[] = [1,2,3,4,5,6]

const LayoutBlock = () => {

    return (
        <Box my={2}>
            <Resizable
                className="grid-container"
                defaultSize={{
                    width: 700,
                    height: 'auto',
                }}
            >
                {items.map((item, index) => (
                    <div className="item" key={index}>{item}</div>
                ))}
            </Resizable>
        </Box>

    );
};

export default LayoutBlock;
