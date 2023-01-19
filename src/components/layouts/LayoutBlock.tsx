import React, {useState} from 'react';
import './testStyles/testStyles.css'
// import {Resizable } from 'react-resizable'
import { Resizable } from "re-resizable";


const items: number[] = [1,2,3,4,5,6]

const LayoutBlock = () => {

    return (
        <Resizable
            className="grid-container"
            // style={style}
            defaultSize={{
                width: 600,
                height: 300
            }}
        >
            {items.map((item, index) => (
                <div className="item" key={index}>{item}</div>
            ))}
        </Resizable>

    );
};

export default LayoutBlock;
