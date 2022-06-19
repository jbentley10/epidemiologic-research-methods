/**
 * @file navigation.js
 */
// Import dependencies
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import MUI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

// Import styles
import { logo } from '../styles/Navigation.module.scss';

// Declare pages from the app to populate the nav bar
const pages = ["Home", "About", "Experts", "Services", "Publications", "Contact Us"];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [anchorElServices, setAnchorElServices] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop styles */}
          <Link href="/" passHref>
            <Image alt={`Epidemiology Research Methods, LLC logo`} layout={`intrinsic`} width={`127`} height={`100`} className={logo} src={`/images/logo-web.jpg`} />
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link passHref key={page} href={"/" + (page === 'Home' ? '' : page.toLowerCase().replace(' ', '-'))}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 4, mx: 2, color: "black", display: "block", fontSize: 18 }}
                >
                  {page}
                </Button> 
              </Link>
            ))}
          </Box>

          {/* Mobile styles */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link passHref key={page} href={"/" + page.toLowerCase()}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
