import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function SkillCards() {

  return (
    <Card sx={{ display: 'flex', maxWidth: 400, mx: '1.5rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Props of the prof skill
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Props of short description one liner
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image="./src/assets/linkedin-icon.png"
        alt="Live from space album cover"
      />
    </Card>
  );
}