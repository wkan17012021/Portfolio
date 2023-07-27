import React from "react";


const FluidContainer = ({ children }) => {
  return (
    <section className="fluid-container" style={{marginTop: '-60px'}}>
      {children}
    </section>
  );
};

export default FluidContainer;
