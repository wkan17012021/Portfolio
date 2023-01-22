import * as React from "react";
import { Typography } from "@mui/material";

const Hero = () => {
  return (
    <header className="hero"
    sx={{
      position: 'relative',
      color: 'red'
    }}>
      <div className="wrapper hero__wrapper">
        <div className="hero__content">
        <Typography variant="h1">William Kan</Typography>
          <div className="flow">
            <Typography>
              Front-End Developer <span className="pipe">|</span> Netizen <span className="pipe">|</span>  Bug Catcher{" "}
            </Typography>
            <img
                className="pokemon-caterpie"
                src="src/assets/caterpie.png"
                alt="Pokemon creature: Caterpie's face"
              />
          </div>
          <Typography>CV available upon request</Typography>
        </div>
        <img className="bkgnd-profile" src="src/assets/profile-photo.svg" alt="" />
      </div>
    </header>
  );
};

export default Hero;
