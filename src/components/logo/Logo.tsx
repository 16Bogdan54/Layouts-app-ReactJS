import React from 'react';
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import {Box, Typography} from "@mui/material";

const Logo = () => {
    const styles = {
        mr: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.2rem',
        color: 'inherit',
        textDecoration: 'none',
    }

    return (
        <Box>
            <ViewComfyIcon sx={{ mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={styles}
            >
                Layouts
            </Typography>
        </Box>
    );
};

export default Logo;
