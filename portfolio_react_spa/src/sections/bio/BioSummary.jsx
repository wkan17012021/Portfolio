import React from "react";
import StorySetCoder from "./StorySetCoder.jsx";
import Typography from '@mui/material/Typography';
import "../../css/storysetsvg.css";

const Bio = () => {
  return (
    <section id="bio-section" className="scroll-mt-offset">
       <Typography variant="h2" mt={3}  gutterBottom>
        Biography
      </Typography>
      <div>
        <h2>
          Entry-level developer seeking web and software development
          opportunities within South West London or fully remote roles
        </h2>
        <p>
          I am keen to continue learning new technologies and programming tools
          so that I can enhance my capabilities as a developer and aspire to
          provide support for front- and back-end innovative solutions
        </p>
      </div>
      <div>
        <StorySetCoder />
      </div>
    </section>
  );
};

export default Bio;
