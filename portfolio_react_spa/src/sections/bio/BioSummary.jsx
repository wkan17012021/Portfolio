import React from "react";
import StorySetCoder from "./StorySetCoder.jsx";
import StorySetTeam from "../../sections/skills/StorySetTeam";
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
          <Grid item xs={12} sm={10} md={8} lg={12}>
            <Container>
              <Typography variant="h2" mt={4} gutterBottom>
                Biography
              </Typography>
            </Container>
            <Container>
              <Typography variant="body1" paddingBottom={4}>
                Junior web and software developer seeking hybrid-working
                opportunities in South-West London, Central London or fully
                remote roles
              </Typography>
              <hr />
            </Container>
            <Container sx={{ marginTop: 4 }}>
              <Typography variant="body1">
                I am a life-long learner, continually applying new technologies
                and programming tools so that I can enhance my capabilities as a
                developer and aspire to provide support for front- and back-end
                innovative solutions
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <StorySetCoder />
          </Grid>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <StorySetTeam />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Bio;
