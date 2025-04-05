import React from "react";
import StorySetCoder from "./StorySetCoder.jsx";
import StorySetTeam from "../skills/StorySetTeam.jsx";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../css/storysetsvg.css";

const Bio = () => {
  return (
    <Container id="bio-section" className="scroll-mt-offset">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <Container>
              <Typography variant="h2" mt={4} gutterBottom>
                Biography
              </Typography>
            </Container>
            <Container>
              <Typography variant="body1" paddingBottom={4}>
              I'm a web developer enthusiastic about building accessible, responsive websites for the non profit sector. I specialize in front-end development using Drupal and WordPress CMS. I'm open to discussing opportunities where my skills and experience can support digital solutions.
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12}  md={6} lg={6} display={"flex"} >
            <StorySetCoder />
          </Grid>
          <Grid item xs={12}  md={6} lg={6} display={"flex"} >
            <StorySetTeam />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Bio;
