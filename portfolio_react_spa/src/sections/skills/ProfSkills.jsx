import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";
import SkillsMarquee from "../../sections/marquee/SkillsMarquee";
import { skills } from "../../data/skillsList";

const ProfSkills = () => {
  return (
    <Container mt={4}>
      <Box>
         <Typography variant="h2" gutterBottom>
        Professional Skills
      </Typography>
      </Box>
      <SkillsMarquee direction={'left'} />
      <SkillsMarquee direction={'right'} />
      <List>
        {skills.map((skill) => {
          return <ListItem 
          key={skill.id}
          disableGutters
          >
            <Typography variant="body1" fontWeight={600}>{skill.skillDetail}</Typography>
            </ListItem>;
        })}
      </List>
    </Container>
  );
};

export default ProfSkills;
