import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
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
    <section id="contact-section" className='social-grid-wrapper'>
      <Typography variant="h2" mt={3}  gutterBottom>
        Contact
      </Typography>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={12} sm={6} md={3} lg={2}>
          <Item>Skyrim Logo with tooltip about the icons acknowledgments and navbar hamburger menu icons</Item>
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={4}>
          <Item>LinkedIn</Item>
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={2}>
          <Item>Worthy recommendation of a place to Travel</Item>
        </Grid>
        <Grid xs={12} sm={4} md={6} lg={4}>
          <Item>Hashnode Blogsite</Item>
        </Grid>
        <Grid xs={12} sm={4} md={6} lg={5}>
          <Item>Storyset Illustrations tooltip acknowledgments</Item>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Item>Twitter</Item>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={4}>
          <Item>Hero section inspiration from Ahmad Shadeed</Item>
        </Grid>
        <Grid xs={12} sm={4} md={4} lg={3}>
          <Item>Components built with Material UI</Item>
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={3}>
          <Item>IT software book worth reading recommendation </Item>
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={2}>
          <Item>Development Tool: Vite add logo</Item>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={4}>
          <Item>GitHub</Item>
        </Grid>
      </Grid>
    </Box>
    <div className="contact-container">
    <BasicForm />
    </div>
    </section>
    
  );
}