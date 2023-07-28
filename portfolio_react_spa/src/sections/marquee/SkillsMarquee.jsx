import React from 'react'
import Marquee from "react-fast-marquee";
import SkillCards from '../skillCards/SkillCards';
import { skills } from "../../data/skillsList";

export default function SkillsMarquee(props) {
  return (
    <Marquee
    style={{minHeight: "200px"}}
    play={true}
    pauseOnHover={true}
    delay={2}
    speed={100}
    gradient={true}
    gradientColor={[46,49,65]}
    gradientWidth={25}
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
