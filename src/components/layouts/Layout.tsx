import React from 'react';
import {Box} from "@mui/material";

interface Props {
    type: string;
}

const Layout = ({type}:Props) => {
    return (
        <Box  sx={{height: 'auto', border: '2px solid red', p: 4}}>
            <h1>{type === "flexbox" ? "flexbox" : "grid"}</h1>
        </Box>
    );
};

export default Layout;
