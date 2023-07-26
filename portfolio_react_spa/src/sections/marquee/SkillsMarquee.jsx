import React from 'react'
import Marquee from "react-fast-marquee";

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
        <h2>Some Text</h2>
        <p>Some para</p>
        <span>Some span</span>
    </Marquee>
  )
}
