import ResponsiveAppBar from "./sections/navigation/Nav"
import Hero from "./sections/hero/MainHero"
import ControlledAccordions from "./sections/workexp/Accordion"
import Bio from "./sections/bio/BioSummary"
import './assets/reset.css'
import './assets/fonts.css'
import './css/global.css'
import "./css/hero.css"

function App() {
  return (
    <div className="App">
     <ResponsiveAppBar />
     <Hero />
     <Bio />
     <ControlledAccordions />
    </div>
  )
}

export default App
