import React from 'react';
import {Box} from "@mui/material";
import Layout from './Layout'

const LayoutSection = () => {
    return (
        <Box>
            <Layout type="grid"/>
            <Layout type="grid"/>
            <Layout type="grid"/>
        </Box>
    );
};

export default LayoutSection;
