import React, {useState} from 'react';
import {Box, Button} from "@mui/material";
import NavLink from './NavLink';

const Menu = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    return (
        <Box sx={{display: { xs: 'none', md: 'flex', color:'white'} }}>
            <NavLink to="/grid" onClick={handleCloseNavMenu}>Grid</NavLink>
            <NavLink to="/flexbox" onClick={handleCloseNavMenu}>Flexbox</NavLink>
        </Box>
    );
};

export default Menu;
