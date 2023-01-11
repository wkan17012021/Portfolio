import ResponsiveAppBar from "./sections/navigation/Nav"
import ControlledAccordions from "./sections/workexp/Accordion"
import Hero from "./sections/hero/MainHero"
import './assets/reset.css'
import './assets/fonts.css'
import './assets/global.css'
import "./css/hero.css"

function App() {
  

  return (
    <div className="App">
     <ResponsiveAppBar />
     <Hero />
     <ControlledAccordions />
    </div>
  )
}

export default App
