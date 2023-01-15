import React from "react";
import StorySetTeam from "../../sections/skills/StorySetTeam";

const FluidContainer = ({children}) => {
    return ( 
        <section className="fluid-container">
            {children}
            <StorySetTeam />
        </section>
     );
}

export default FluidContainer;