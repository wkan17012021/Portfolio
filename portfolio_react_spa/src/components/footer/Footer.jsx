import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import { SiLinkedin, SiTwitter, SiGithub, SiHashnode } from "react-icons/si";
import { footerDetails } from "../../data/footerDetails";

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      marginBottom={2}
      sx={{ color: "#FFF" }}
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
      className="footer"
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
            li: {
              width: "100px",
              justifyContent: "center",
              borderTop: "4px solid #407bff",
              borderBottom: "4px solid #407bff",
              transition: "all 1s ease-in-out",
              "&:hover": {
                border: "none",
              },
            },
            "> li:first-child ": {
              borderLeft: "4px solid #407bff",
              borderRight: "none",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            },
            "> li:last-child ": {
              borderRight: "4px solid #407bff",
              borderLeft: "none",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            },
            "> li > a > svg ": {
              "&:hover": {
                color: "#407bff",
                cursor: "pointer",
              },
            },
          }}
        >
          <ListItem>
            <Tooltip title="Connect via LinkedIn" placement="top" arrow>
              <Link
                hrefLang="en"
                target="_blank"
                href="https://www.linkedin.com/in/william-kan"
                sx={{ color: "whitesmoke" }}
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
                sx={{ color: "whitesmoke" }}
              >
                <SiTwitter size={32} />
              </Link>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip
              title="Collaborate with me on GitHub"
              placement="top"
              arrow
            >
              <Link
                hrefLang="en"
                target="_blank"
                href="https://github.com/wkan17012021"
                sx={{ color: "whitesmoke" }}
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
                href="https://the-dog-can-blog.hashnode.dev/"
                sx={{ color: "whitesmoke" }}
              >
                <SiHashnode size={32} />
              </Link>
            </Tooltip>
          </ListItem>
        </List>
        <Typography variant="h4" align="center" lineHeight={2.2}>
          Acknowledgments:
        </Typography>

        {footerDetails.map((detail) => {
          return (
            <Typography
              key={detail.id}
              variant="subtitle1"
              align="center"
              component="p"
              gutterBottom
              lineHeight={1}
              sx={{ color: "#FFF" }}
            >
              {detail.desc}
            </Typography>
          );
        })}
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
