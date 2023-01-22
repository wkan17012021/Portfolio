import React from "react";
import Box from "@mui/material/Box";
import StorySetTeam from "../../sections/skills/StorySetTeam";

const FluidContainer = ({ children }) => {
  return (
    <section className="fluid-container" style={{marginTop: '-60px'}}>
      {children}
      <Box>
        <StorySetTeam />
      </Box>
    </section>
  );
};

export default FluidContainer;
