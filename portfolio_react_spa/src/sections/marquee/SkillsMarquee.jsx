import React from 'react'
import Marquee from "react-fast-marquee";
import SkillCards from '../skillCards/SkillCards';

export default function SkillsMarquee(props) {
  return (
    <Marquee
    pauseOnHover={true}
    delay={2}
    speed={100}
    gradient={true}
    gradientColor={[255,255,255]}
    gradientWidth={100}
    >
        <SkillCards />
        <h2>Some Text</h2>
        <SkillCards />
        <span>Some span</span>
        <SkillCards />
    </Marquee>
  )
}
