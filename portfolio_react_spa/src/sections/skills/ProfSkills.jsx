import React from "react";
import Typography from '@mui/material/Typography';
import {skills} from '../../data/skillsList';

const ProfSkills = () => {
  return (
    <section>
             <Typography variant="h2" mt={3}  gutterBottom>
        Professional Skills
      </Typography>
      <ul>
        {skills.map((skill) => {
          return <li key={skill.id}>{skill.skillDetail}</li>;
        })}
      </ul>
    </section>
  );
};

export default ProfSkills;
