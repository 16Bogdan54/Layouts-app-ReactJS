import React from 'react';
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import {Typography} from "@mui/material";
//       display: { xs: 'none', md: 'flex' }, display: { xs: 'none', md: 'flex' }

type Styles = {}

interface Props {
    styles: Styles
}

const Logo = ({styles}: Props) => {
    const baseStyles: Styles = {
        mr: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.2rem',
        color: 'inherit',
        textDecoration: 'none',
    }

    return (
        <>
            <ViewComfyIcon sx={{ ...styles, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{...styles, ...baseStyles}}
            >
                Layouts
            </Typography>
        </>
    );
};

export default Logo;
