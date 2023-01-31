import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import Favicon from "../../assets/logo.svg";
import {sections} from "../../data/navSections";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
    <AppBar position="sticky"
    sx={{
      backgroundColor: "#9da9a0"
    }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <Link href={'#'}>
            <Box
            component="img"
              sx={{ 
                display: { xs: "none", md: "flex" },
                maxHeight: { md: 75 }, 
                m: 'auto', 
                p: 1,
               }}
               src={Favicon}
            alt="WK initials wrapped inside greater and less than symbols"
            >
            </Box>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "flex", md: "none"},
            }}
          >
            <IconButton
              size="large"
              aria-label="navigation mobile menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
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
                display: { xs: "block", md: "none" }
              }}
            >
              {sections.map((section) => (
                <MenuItem key={section.id}  onClick={handleCloseNavMenu}>
                  <Link href={section.href} 
                  textAlign="center"
                  display='flex'
                  alignItems='center' 
                  sx={{ 
                    textDecoration: 'none', 
                    textTransform: 'capitalize', 
                    fontFamily: 'ElMessiri',                    
                    fontWeight: '700',
                    color: '#342E37',
                 }}
                 >
                    {section.hdg}
                    <Box component='img'
                    sx={{
                        width: 30,
                        height: 24,
                        mt: 'auto',
                        ml: 2,
                        WebkitFilter:'invert(100%) sepia(0%) saturate(0%) hue-rotate(000deg) brightness(0%) contrast(90%)',
                        filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(000deg) brightness(0%) contrast(90%)',
                      }}
                      src={section.img}
                      alt={section.alt}
                    >
                    </Box>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: "none", md: "flex" } 
            }}>
            {sections.map((section) => (
              <Link href={section.href} 
              sx={{ 
                textDecoration: 'none', 
             }}
              textAlign="center" 
              display="flex"
              alignContent="center"
              marginRight={3}
              >
                <Button
                  key={section.id}
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    my: 2, 
                    color: "white", 
                    display: "block",  
                    textDecoration: 'none',
                    textTransform: 'capitalize', 
                    fontFamily: 'ElMessiri',                    
                    fontWeight: '700',
                    letterSpacing: 1.8 }}
                >
                  {section.hdg}
                </Button>
                <Box
                component='img'
                  sx={{
                    width: 30,
                    height: 24,
                    m: 'auto',
                    WebkitFilter:'invert(100%) sepia(0%) saturate(0%) hue-rotate(000deg) brightness(0%) contrast(90%)',
                    filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(000deg) brightness(0%) contrast(90%)',
                  }}
                  src={section.img}
                  alt={section.alt}
                  >
                </Box>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
