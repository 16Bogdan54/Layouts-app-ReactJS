import React from 'react';
import {Box, Card, Typography} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import LayoutBlock from "./LayoutBlock";

interface Props {
    type: string;
}

const items: number[] = [1,2,3,4,5,6]

const Layout = ({type}:Props) => {
    return (
        <Card variant="outlined" sx={{height: 'auto', p: 4, my:4, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <h1>{type === "flexbox" || "flex" ? "#flexbox" : "#grid"}</h1>
            <LayoutBlock/>
            <div>
                <SyntaxHighlighter language="css" children={
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
        </Card>
    );
};

export default Layout;
