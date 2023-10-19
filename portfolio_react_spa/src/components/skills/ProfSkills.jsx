import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import SkillsGrid from "../skillsGrid/SkillsGrid";

const ProfSkills = () => {
  return (
    <Container sx={{marginTop: '1.2rem'}}>
      <Box>
         <Typography variant="h2" gutterBottom>
        Professional Skills
      </Typography>
      </Box>
      <SkillsGrid />
    </Container>
  );
};

export default ProfSkills;
