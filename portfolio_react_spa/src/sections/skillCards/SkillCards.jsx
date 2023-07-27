import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {SiHtml5} from "react-icons/si";

export default function SkillCards(props) {

  return (
    <Card sx={{ 
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        maxWidth: 400, 
        mx: '1.5rem' 
    }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.desc}
          </Typography>
        </CardContent>
      </Box>
      {props.icon}
      {/* <CardMedia
        component="img"
        sx={{ width: 100 }}
        image="./src/assets/linkedin-icon.png"
        alt="Live from space album cover"
      /> */}
    </Card>
  );
}