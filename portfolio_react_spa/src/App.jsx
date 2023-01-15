import ResponsiveAppBar from "./sections/navigation/Nav"
import Hero from "./sections/hero/MainHero"
import Bio from "./sections/bio/BioSummary"
import WorkExpAccordions from "./sections/workexp/WorkExpAccordions"
import FluidContainer from "./components/layouts/FluidContainer"
import ProfSkills from "./sections/skills/ProfSkills"
import Projects from "./sections/projs/Projects"
import SocialGrid from "./sections/contact/Socials"

import FetchBlogData from "./utils/FetchBlogData"
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
     <FluidContainer >
     < ProfSkills />
     </FluidContainer> 
     <WorkExpAccordions />
     <Projects />
     <SocialGrid />
      <FetchBlogData />
    </main>
  )
}

export default App
