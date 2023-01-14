import React from "react";
import StorySetTeam from "../../sections/skills/StorySetTeam";

const FluidContainer = ({children}) => {
    return ( 
        <section className="fluid-container">
            <StorySetTeam />
        {children}
        </section>
     );
}

export default FluidContainer;