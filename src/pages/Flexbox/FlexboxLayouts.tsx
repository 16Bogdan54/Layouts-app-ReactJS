import React from 'react';
import {Box} from "@mui/material";
import Layout from "../../components/layouts/Layout";

const FlexboxLayouts = () => {
    return (
            <Box p={4}>

                <h1>Flex</h1>
                <Layout type="flexbox"/>
                <Layout type="flexbox"/>
                <Layout type="flexbox"/>
            </Box>
    );
};

export default FlexboxLayouts;
