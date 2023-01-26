import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Link from "@mui/material/Link";
import SkyrimLogo from '../../assets/Skyrim-Logo.png';
import LinkedInLogo from '../../assets/linkedin-icon.png';
import TwitterLogo from '../../assets/twitter-icon.png';
import MuiLogo from '../../assets/material-ui.png';
import ViteLogo from '../../assets/vite-logo.svg';
import GitHubLogo from '../../assets/github-icon.png';


import BasicForm from './BasicForm';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SocialGrid() {
  return (
    <section id="contact-section" className='scroll-mt-offset'>
      <Container>
        <Box>
          <Typography variant="h2" mt={3}  gutterBottom>
        Contact
      </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, backgroundColor: '#9da9a0', padding: 2 }}>
      <Grid container spacing={1}>
        <Grid xs={12} sm={6} md={3} lg={2}>
        <Tooltip title="Nav Icons from Skyrim Video Game: Work Exp, Projects, Contact" placement="top" arrow>
          <Item>
            <Box component={"img"}
            src={SkyrimLogo}
            alt="Skyrim video game logo by bethesda Gaming Studio"
            margin={"0 auto"}
            height="80px"
            >
            </Box>
          </Item>
          </Tooltip>
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={4}>
          <Item>Worthy Travel Tip:
            <Link
            hrefLang="en" 
            target="_blank" 
            rel="noreferrer"
            href="https://jacksflightclub.com/"
            > JFC </Link>
            for discount plane tickets</Item>
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={2}>
<Tooltip title="You can find me on LinkedIn" placement="top" arrow>
          <Item>
            <Link 
            hrefLang="en" 
            target="_blank" 
            rel="noreferrer"
            href="https://www.linkedin.com/in/william-kan"
            >
            <Box component={"img"}
            src={LinkedInLogo}
            alt="LinkedIn logo"
            margin={"0 auto"}
            height="80px"
            >
            </Box>
          </Link>
          </Item>
          </Tooltip>

          
        </Grid>
        <Grid xs={12} sm={4} md={6} lg={4}>
          <Item>Where I Blog:{" "}
          <Link
            hrefLang="en" 
            target="_blank" 
            rel="noreferrer"
            href="hashnode.com"
            >Hashnode</Link>
          </Item>
        </Grid>
        <Grid xs={12} sm={4} md={6} lg={5}>
        <Tooltip title="You can find me on GitHub" placement="top" arrow>
          <Item>
            <Link
             hrefLang="en" 
             target="_blank" 
             rel="noreferrer"
            href='https://github.com/wkan17012021'
            >
            <Box component={"img"}
            src={GitHubLogo}
            alt="GitHub logo"
            margin={"0 auto"}
            height="80px"
            >
            </Box>
            </Link>
          </Item>
          </Tooltip>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
        <Tooltip title="You can find me on Twitter" placement="top" arrow>
          <Item>Hero section inspiration from Ahmad Shadeed: {" "}
            <Link
            hrefLang="en" 
            target="_blank" 
            rel="noreferrer"
            href='https://ishadeed.com/article/inside-frontend-developer-mind-hero-section/'>
            find his article here
            </Link>
            </Item>
          </Tooltip>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={4}>
        <Tooltip title="You can find me on Twitter" placement="top" arrow>
        <Item>
            <Link 
            hrefLang="en" 
            target="_blank" 
            rel="noreferrer"
            href="https://twitter.com/willkancode"
            >
            <Box component={"img"}
            src={TwitterLogo}
            alt="Twitter logo"
            margin={"0 auto"}
            height="80px"
            >
            </Box>
          </Link>
          </Item>
          </Tooltip>
        </Grid>
        <Grid xs={12} sm={4} md={4} lg={3}>
        <Tooltip title="Components developed with Material UI v5" placement="top" arrow>
          <Item>
            <Box component={"img"}
            src={MuiLogo}
            alt="Material UI Framework logo"
            margin={"0 auto"}
            height="80px"
            >
            </Box>
          </Item>
          </Tooltip>
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={3}>
          <Item>
            IT software book worth reading:{" "}
            <Link
            hrefLang="en" 
            target="_blank" 
            rel="noreferrer"
            href="https://itrevolution.com/product/the-phoenix-project/"
            > The Phoenix Project
            </Link>
            </Item>
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={2}>
        <Tooltip title="Development environment used for this project: Vite.js" placement="top" arrow>
          <Item>
            <Box component={"img"}
            src={ViteLogo}
            alt="Vite logo"
            margin={"0 auto"}
            height="80px"
            >
            </Box>
          </Item>
          </Tooltip>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={4}>
        <Item>Cartoon Illustrations are from:{" "} 
            <Link
             hrefLang="en" 
             target="_blank" 
             rel="noreferrer"
             href="https://storyset.com/"
            >StorySet
            </Link>
            </Item>
        </Grid>
      </Grid>
    </Box>
    <BasicForm /> 
    </Container>
    </section>
  );
}