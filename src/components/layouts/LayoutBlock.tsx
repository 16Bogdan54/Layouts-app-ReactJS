import React, {useState} from 'react';
import './testStyles/testStyles.css'
// import {Resizable } from 'react-resizable'
import {Box} from "@mui/material";
import { Resizable } from "re-resizable";

/*
*
* import { Resizable } from "re-resizable";

* <Resizable
    style={style}
    defaultSize={{
      width: 200,
      height: 200
    }}
  >
    001
  </Resizable>
*
* */

const items: number[] = [1,2,3,4,5,6]

const LayoutBlock = () => {

    // const MyHandle = React.forwardRef((props, ref) => {
    //     const {handleAxis, ...restProps} = props;
    //     return <div ref={ref} className={`foo handle-${handleAxis}`} {...restProps} />;
    // });

    // <Box className="grid-container" my={2}>
    //     {items.map((item, index) => (
    //         <div className="item" key={index}>{item}</div>
    //     ))}
    // </Box>

    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 1px #ddd",
        background: "#f0f0f0"
    };

    return (
        <Resizable
            className="grid-container"
            // style={style}
            defaultSize={{
                width: 200,
                height: 200
            }}
        >
            {items.map((item, index) => (
                <div className="item" key={index}>{item}</div>
            ))}
        </Resizable>

    );
};

export default LayoutBlock;
