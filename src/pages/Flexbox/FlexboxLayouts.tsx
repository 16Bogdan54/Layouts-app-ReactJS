import React from 'react';
import {Box} from "@mui/material";
import Layout from "../../components/layouts/Layout";
import Uploader from "../../components/uploader/Uploader"

const FlexboxLayouts = () => {
    return (
            <Box p={4}>
                <Uploader/>
                <h1>Flex</h1>
                <Layout type="flexbox"/>
                <Layout type="flexbox"/>
                <Layout type="flexbox"/>
            </Box>
    );
};

export default FlexboxLayouts;
