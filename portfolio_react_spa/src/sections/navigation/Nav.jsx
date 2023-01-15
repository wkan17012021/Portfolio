import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import Favicon from "../../assets/logo.svg";
import BioIcon from "../../assets/bio-icon.png";
import ExpIcon from "../../assets/exp-icon.webp";
import ProjIcon from "../../assets/projects-icon.webp";
import ContactIcon from "../../assets/contacts-icon.webp";
import BlogsIcon from "../../assets/blogs-icon.png";

const sections = [
  {
    id: 1,
    hdg: "Bio",
    href: "#bio-section",
    img: BioIcon,
    alt: "icon logo depicting a microphone",
  },
  {
    id: 2,
    hdg: "Work Exp",
    href: "#work-exp-section",
    img: ExpIcon,
    alt: "icon logo depicting an anvil",
  },
  {
    id: 3,
    hdg: "Projects",
    href: "#proj-section",
    img: ProjIcon,
    alt: "icon logo depicting a potion alchemy",
  },
  {
    id: 4,
    hdg: "Contact",
    href: "#contact-section",
    img: ContactIcon,
    alt: "icon logo depicting people conversing",
  },
  {
    id: 5,
    hdg: "Blogs",
    href: "#blogs-section",
    img: BlogsIcon,
    alt: "icon logo depicting an open book and a quiver",
  },
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
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={Favicon}
            alt="WK initials wrapped inside greater and less than symbols"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "flex", md: "none" },
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
                display: { xs: "block", md: "none" },
              }}
            >
              {sections.map((section) => (
                <MenuItem key={section.id} onClick={handleCloseNavMenu}>
                  <Link href={section.href} textAlign="center" 
                 >
                    {section.hdg}
                    <img
                      src={section.img}
                      alt={section.alt}
                      className="menu-icons"
                    />
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {sections.map((section) => (
              <Link href={section.href} textAlign="center">
                <Button
                  key={section.id}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {section.hdg}
                </Button>
                <img
                  src={section.img}
                  alt={section.alt}
                  className="menu-icons"
                />
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
