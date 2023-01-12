import * as React from "react";

const Hero = () => {
  return (
    <header class="hero">
      <div class="wrapper hero__wrapper">
        <div class="hero__content">
          <h1 class="hero__headline">William Kan</h1>
          <div class="flow">
            <p>
              Front-End Developer <span className="pipe">|</span> Netizen <span className="pipe">|</span>  Bug Catcher{" "}
              
            </p>
            <img
                class="pokemon-caterpie"
                src="src/assets/caterpie.png"
                alt="Pokemon creature: Caterpie's face"
              />
          </div>
        </div>
        <img class="bkgnd-profile" src="src/assets/profile-photo.svg" alt="" />
      </div>
    </header>
  );
};

export default Hero;
