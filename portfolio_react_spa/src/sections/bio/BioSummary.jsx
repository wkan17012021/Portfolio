import React from "react";
import StorySetCoder from "./StorySetCoder.jsx";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "../../css/storysetsvg.css";

const Bio = () => {
  return (
    <Container id="bio-section" className="scroll-mt-offset">
    <Box
    >
        <Grid container spacing={3}>
        <Grid item xs={12} sm={10} md={8} lg={4}>
          <Container>
            <Typography variant="h2" mt={4}  gutterBottom>
        Biography
      </Typography>
          </Container>
                <Container>
        <Typography variant="body1"
        paddingBottom={4}>
          Entry-level developer seeking web and software development
          opportunities within South West London or fully remote roles
        </Typography>
        <hr />
      </Container>
      <Container 
      sx={{marginTop: 4}}>
        <Typography variant="body1">
        I am keen to continue learning new technologies and programming tools
          so that I can enhance my capabilities as a developer and aspire to
          provide support for front- and back-end innovative solutions
        </Typography>
      </Container>
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={8}>
         <StorySetCoder />
        </Grid>
      </Grid>
     </Box>
    </Container>
  );
};

export default Bio;