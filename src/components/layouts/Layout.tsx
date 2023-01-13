import React from 'react';
import {Box, Typography} from "@mui/material";
import './testStyles/testStyles.css'
import SyntaxHighlighter from "react-syntax-highlighter";

interface Props {
    type: string;
}

const items: number[] = [1,2,3,4,5,6]

const Layout = ({type}:Props) => {
    return (
        <Box  sx={{height: 'auto', border: '2px solid red', p: 4}}>
            <Typography variant="h3">Setka</Typography>
            <h1>{type === "flexbox" ? "#flexbox" : "#grid"}</h1>
            <div className="grid-container">
                {items.map((item, index) => (
                    <div className="item" key={index}>{item}</div>
                ))}
            </div>
            <div>
                <SyntaxHighlighter  className="whitespace-pre d-block border-2" bg="transparent" color="white" language="css" children={
                    `.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
}

.item {
    text-align: center;
    border: 1px solid #b95454;
    font-weight: bold;
    background: #ffb4b4;
}`
                }/>
            </div>
        </Box>
    );
};

export default Layout;
