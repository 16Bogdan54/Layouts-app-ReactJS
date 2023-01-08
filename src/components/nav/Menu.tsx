import React, {useState} from 'react';
import {Box, Button} from "@mui/material";

const Menu = () => {

    const pages = ['Grid', 'Flexbox', 'Github'];

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    return (
        <Box sx={{display: { xs: 'none', md: 'flex'} }}>
            {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
            ))}
        </Box>
    );
};

export default Menu;
