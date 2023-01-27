import * as React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Caterpie from "../../assets/caterpie.png"
import ProfileImg from "../../assets/profile-photo.svg"

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
              src={Caterpie}
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
          src={ProfileImg}
          alt="hiker sitting on a rock looking out into the sunset with a cityscape backdrop"
        ></Box>
      </div>
    </section>
  );
};

export default Hero;
