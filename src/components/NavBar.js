import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HouseIcon from '@mui/icons-material/House';
import gatorlogo from './images/gatorlogo.jpg';
import { useState } from 'react';
import Link from '@mui/material/Link';
import axios from 'axios';

// Arrays holding lists of pages to display based on location in bar and user log in status
const pages = ['Sign Up', 'About'];
const loggedin = ['AddResources', 'LogOut'];
const loggedout = ['Log In'];

/** Renders the Navigation Bar with Drop Down Menu on Left side
 * Display changes based on user log in status
 * @summary Interactive Navigation Bar
 * @author Kathleen Tiley, Zachary Schirm
 */

function NavBar(propss) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  React.useEffect(() => {
    axios.get(`http://localhost:3001/api/isloggedin`, { withCredentials: true }).then((d) => {
      console.log(d);
      //window.location.href = '/Log%In';
      console.log(d.data);
      var response = d.data;
      if (response == 'Not logged in :-(') {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    });
  }, [propss.loggedInStatusChange]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" style={{ background: '#fb6502' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HouseIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}>
            The Homeless Helper
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
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
              textDecoration: 'none'
            }}>
            The Homeless Helper
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                href={`/${page}`}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Gator Logo" src={gatorlogo} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {isLoggedIn
                ? loggedin.map((loggedin) => (
                    <MenuItem key={loggedin} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        <Link href={`/${loggedin}`} sx={{ color: 'black' }} underline="none">
                          {loggedin}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))
                : loggedout.map((loggedout) => (
                    <MenuItem key={loggedout} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        <Link href={`/${loggedout}`} sx={{ color: 'black' }} underline="none">
                          {loggedout}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
