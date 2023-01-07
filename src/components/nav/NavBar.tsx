import React, {useState} from "react";
import * as Material from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';

const pages = ['Grid', 'Flexbox', 'Github'];

const NavBar  = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Material.AppBar position="sticky" sx={{
            backgroundColor: '#313D5A',
        }}>
            <Material.Container maxWidth="xl" >
                <Material.Toolbar disableGutters>
                    <ViewComfyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Material.Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Layouts
                    </Material.Typography>

                    <Material.Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Material.IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </Material.IconButton>
                        <Material.Menu
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
                            {pages.map((page) => (
                                <Material.MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Material.Typography textAlign="center">{page}</Material.Typography>
                                </Material.MenuItem>
                            ))}
                        </Material.Menu>
                    </Material.Box>
                    <ViewComfyIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Material.Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Layouts
                    </Material.Typography>
                    <Material.Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Material.Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Material.Button>
                        ))}
                    </Material.Box>
                </Material.Toolbar>
            </Material.Container>
        </Material.AppBar>
    );
}
export default NavBar;