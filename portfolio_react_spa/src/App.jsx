import ResponsiveAppBar from "./sections/navigation/Nav"
import Hero from "./sections/hero/MainHero"
import Bio from "./sections/bio/BioSummary"
import WorkExpAccordions from "./sections/workexp/WorkExpAccordions"
import FluidContainer from "./components/layouts/FluidContainer"
import ProfSkills from "./sections/skills/ProfSkills"
import Projects from "./sections/projs/Projects"
import SocialGrid from "./sections/contact/Socials"
import FetchBlogData from "./utils/FetchBlogData"
import Footer from "./sections/footer/Footer"
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
      <Footer blob={"SVG shape created using blobmaker.app"} icons={"Icons chosen from Skyrim Fandom website & icons8"} cartoons={`Cartoon illustrations from Storyset`}/>      
    </main>
  )
}

export default App
