import ResponsiveAppBar from "./sections/navigation/Nav"
import Hero from "./sections/hero/MainHero"
import Bio from "./sections/bio/BioSummary"
import ControlledAccordions from "./sections/workexp/Accordion"
import FluidContainer from "./components/layouts/FluidContainer"
import ProfSkills from "./sections/skills/ProfSkills"
import './assets/reset.css'
import './assets/fonts.css'
import './css/global.css'
import "./css/hero.css"

function App() {
  return (
    <main className="App">
     <ResponsiveAppBar />
     <Hero />
     <Bio />
     <ControlledAccordions />
     <FluidContainer >
     < ProfSkills />
      </FluidContainer> 
     
    </main>
  )
}

export default App
