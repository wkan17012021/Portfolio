import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import Tooltip from '@mui/material/Tooltip';
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiHashnode } from "react-icons/si";
import { footerDetails } from "../../data/footerDetails";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      marginBottom={2}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background:
          "top / cover no-repeat url('./src/assets/bg-purple-gradient.jpg')",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          align="center"
          fontSize={"2.5rem"}
          fontFamily={"ElMessiri"}
        >
          Thanks for Reading!
        </Typography>
        <List
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            li: { width: "100px", justifyContent: "center" },
          }}
        >
          <ListItem>
          <Tooltip title="Connect via LinkedIn" placement="top" arrow>
            <Link 
            hrefLang="en" 
            target="_blank" 
            href="https://www.linkedin.com/in/william-kan"
            sx={{color: 'whitesmoke'}}
            >
            <SiLinkedin size={32} />
          </Link>
          </Tooltip>
          </ListItem>
          <ListItem>
          <Tooltip title="Let's chat on Twitter" placement="bottom" arrow>
            <Link 
            hrefLang="en" 
            target="_blank" 
            href="https://twitter.com/willkancode"
            sx={{color: 'whitesmoke'}}
            >
              <SiTwitter size={32} 
              />
          </Link>
          </Tooltip>
          </ListItem>
          <ListItem>
          <Tooltip title="Collaborate with me on GitHub" placement="top" arrow>
            <Link 
            hrefLang="en" 
            target="_blank" 
            href='https://github.com/wkan17012021'
            sx={{color: 'whitesmoke'}}
            >
              <SiGithub size={32} />
          </Link>
          </Tooltip>
          </ListItem>
          <ListItem>
          <Tooltip title="Share knowledge on HashNode" placement="top" arrow>
            <Link 
            hrefLang="en" 
            target="_blank" 
            href='https://the-dog-can-blog.hashnode.dev/'
            sx={{color: 'whitesmoke'}}
            >
              <SiHashnode size={32} />
          </Link>
          </Tooltip>
          </ListItem>
        </List>
        <Typography variant="h4" align="center" lineHeight={2.2}>
          Acknowledgments:
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          gutterBottom
          lineHeight={1}
        >
          {footerDetails[0].desc}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          gutterBottom
          lineHeight={1}
        >
          {footerDetails[1].desc}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          gutterBottom
          lineHeight={1}
        >
          {footerDetails[2].desc}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  blob: PropTypes.string.isRequired,
  cartoons: PropTypes.string.isRequired,
};

export default Footer;