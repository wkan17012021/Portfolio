import React from 'react'
import Grid from '@mui/material/Grid';
import SkillCards from '../skillCards/SkillCards';
import { skills } from "../../data/skillsList";

export default function SkillsGrid(props) {
  return (
    <Grid container spacing={2}
    style={{minHeight: "200px", marginTop: '1.2rem'}}
    >
    {skills.map((skill) => {
      return (
        <Grid
        item
        xs={12}
        md={6}
        lg={4}>
        <SkillCards 
        title={skill.skillTitle}
        desc={skill.source}
        icon={skill.img}
        alt={skill.alt}
        />
        </Grid>
      )
    })}
    </Grid>
  )
}
