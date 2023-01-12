import React from 'react';
import {Grid} from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import LayoutSection from "../../components/layouts/LayoutsSection";

const GridLayouts = () => {
    return (
        <Grid container>
            <Grid item xs={12} sm={2}>
                <Sidebar/>
            </Grid>
            <Grid item xs={12} sm={10}>
                <LayoutSection/>
            </Grid>
        </Grid>
    );
};

export default GridLayouts;
