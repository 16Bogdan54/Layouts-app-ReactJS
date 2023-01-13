import React from 'react';
import './testStyles/testStyles.css'
import {Resizable } from 'react-resizable'

const items: number[] = [1,2,3,4,5,6]

const LayoutBlock = () => {
    return (
        <div className="grid-container">
            {items.map((item, index) => (
                <div className="item" key={index}>{item}</div>
            ))}
        </div>
    );
};

export default LayoutBlock;
