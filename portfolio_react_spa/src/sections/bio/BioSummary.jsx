import React from "react";
import BioData from "../../data/bio"
import StorySetCoder from "./StorySetCoder.jsx"
import "../../assets/coderSVG.css"


const Bio = () => {
    return ( 
            <section>
                {BioData.bioText.map(bioEntry => (
                    <div>
                        <h2>{bioEntry.tagLine}</h2>
                        <p>{bioEntry.blurb}</p>
                    </div>
                ))}
            <div>
            <StorySetCoder />
            </div>
            </section>
     );
}
 
export default Bio;