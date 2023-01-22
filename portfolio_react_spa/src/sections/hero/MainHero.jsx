import * as React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper hero__wrapper">
        <Container
          className="hero__content"
        >
          <Typography variant="h1" fontWeight={700}>
            William Kan
          </Typography>
        </Container>
        <div className="hero__content">
          <Container
            className="flow"
            sx={{
              marginTop: "0.5rem",
            }}
          >
            <Typography variant="body1" fontWeight={600}>
              Front-End Developer <span className="pipe">|</span> Netizen{" "}
              <span className="pipe">|</span> Bug Catcher{" "}
            </Typography>
            <Box
              component="img"
              className="pokemon-caterpie"
              src="src/assets/caterpie.png"
              alt="Pokemon creature: Caterpie's face"
            ></Box>
          </Container>
          <Container
          sx={{
            marginTop: "0.5rem",
          }}>
             <Typography variant="body1">CV available upon request</Typography>
          </Container>
         
        </div>
        <Box
          component="img"
          className="bkgnd-profile"
          src="src/assets/profile-photo.svg"
          alt="hiker sitting on a rock looking out into the sunset with a cityscape backdrop"
        ></Box>
      </div>
    </section>
  );
};

export default Hero;
