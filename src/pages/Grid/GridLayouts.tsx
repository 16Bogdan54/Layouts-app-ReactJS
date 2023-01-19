import React from 'react';
import Layout from "../../components/layouts/Layout";
import {Box} from "@mui/material";

const GridLayouts = () => {
    return (
        <Box p={4}>
            <Layout type="grid"/>
            <Layout type="grid"/>
            <Layout type="grid"/>
        </Box>
    );
};

export default GridLayouts;
