import React from 'react';
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Logo = () => {
    const styles = {
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.2rem',
        color: 'inherit',
        textDecoration: 'none',
    }

    return (
        <Box>
            <Link to="/">
                <ViewComfyIcon sx={{ mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="span"
                    sx={styles}
                >
                    Layouts
                </Typography>
            </Link>
        </Box>
    );
};

export default Logo;
