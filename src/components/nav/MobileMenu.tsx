import React, {useState} from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import {Box, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import NavLink from "./NavLink";

const MobileMenu = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    return (
        <Box sx={{display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                <NavLink to="/grid" onClick={handleCloseNavMenu}>Grid</NavLink>
                <NavLink to="/flexbox" onClick={handleCloseNavMenu}>Flexbox</NavLink>
            </Menu>
        </Box>
    );
};

export default MobileMenu;
