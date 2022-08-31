import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

const pages = ['Home', 'Electronics', 'Sport', 'Art', 'Design'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box
          className="text-orange-200"
          sx={{
            flexGrow: 1,
            display: { sm: 'flex', md: 'none' },
          }}
        >
          <IconButton
            sx={{ textAlign: 'left' }}
            size="large"
            aria-label="account of current user"
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
              display: {
                xs: 'block',
                md: 'none',
                backdropFilter: 'blur(2px)',
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                sx={{
                  width: '100vw',
                }}
                key={page}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">
                  <span className="font-cairo text-black">{page}</span>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ display: 'block' }}
            >
              <span className="font-cairo text-orange-200">{page}</span>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
};

export default NavBar;
