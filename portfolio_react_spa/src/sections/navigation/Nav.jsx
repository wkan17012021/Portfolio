import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Favicon from '../../assets/logo.svg';
import BioIcon from '../../assets/bio-icon.png'
import ExpIcon from '../../assets/exp-icon.webp'
import ProjIcon from '../../assets/projects-icon.webp'
import ContactIcon from '../../assets/contacts-icon.webp'
import BlogsIcon from '../../assets/blogs-icon.png'

const sections = ['Bio', 'Work Exps', 'Projects', 'Contact', 'Blogs'];
const sections2 = [
  {
    id: 1,
    hdg: 'Bio',
    img: BioIcon,
    alt: "icon logo depicting a microphone"
  },
  {
    id: 2,
    hdg: 'Work Exp',
    img: ExpIcon,
    alt: "icon logo depicting an anvil"
  },
  {
    id: 3,
    hdg: 'Projects',
    img: ProjIcon,
    alt: "icon logo depicting a potion alchemy"
  },
  {
    id: 4,
    hdg: 'Contact',
    img: ContactIcon,
    alt: "icon logo depicting people conversing"
  },
  {
    id: 5,
    hdg: 'Blogs',
    img: BlogsIcon,
    alt: "icon logo depicting an open book and a quiver"
  }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Favicon} alt="WK initials wrapped inside greater and less than symbols" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="navigation mobile menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
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
              {sections2.map((section) => (
                <MenuItem key={section.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{section.hdg}</Typography>
                   <img src={section.img} alt={section.alt} className="menu-icons"/> 
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sections2.map((section) => (
              <Button
                key={section.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {section.hdg}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;