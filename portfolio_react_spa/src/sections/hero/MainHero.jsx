import * as React from "react";
import { Typography } from "@mui/material";

const Hero = () => {
  return (
    <header className="hero">
      <div className="wrapper hero__wrapper">
        <div className="hero__content">
        <Typography variant="h1">William Kan</Typography>
          <div className="flow">
            <p>
              Front-End Developer <span className="pipe">|</span> Netizen <span className="pipe">|</span>  Bug Catcher{" "}
            </p>
            <img
                className="pokemon-caterpie"
                src="src/assets/caterpie.png"
                alt="Pokemon creature: Caterpie's face"
              />
          </div>
          <p>CV available upon request</p>
        </div>
        <img className="bkgnd-profile" src="src/assets/profile-photo.svg" alt="" />
      </div>
    </header>
  );
};

export default Hero;
