import React from 'react'
import Marquee from "react-fast-marquee";
import SkillCards from '../skillCards/SkillCards';
import { skills } from "../../data/skillsList";

export default function SkillsMarquee(props) {
  return (
    <Marquee
    pauseOnHover={true}
    delay={2}
    speed={100}
    gradient={true}
    gradientColor={[255,255,255]}
    gradientWidth={100}
    direction={props.direction}
    >
    {skills.map((skill) => {
      return (
        <SkillCards 
        title={skill.skillTitle}
        desc={skill.source}
        icon={skill.img}
        alt={skill.alt}
        />
      )
    })}

    </Marquee>
  )
}
