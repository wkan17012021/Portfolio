import React from "react";
import SkillsMarquee from "../../sections/marquee/SkillsMarquee";

const FluidContainer = ({ children }) => {
  return (
    <section className="fluid-container" style={{marginTop: '-60px'}}>
      {children}
      <SkillsMarquee />
    </section>
  );
};

export default FluidContainer;
