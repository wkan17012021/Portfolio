import './css/reset.css';
import './css/global.css';
import './css/hero.css';
import ResponsiveAppBar from "./sections/navigation/Nav";
import Hero from "./sections/hero/MainHero";
import Bio from "./sections/bio/BioSummary";
import WorkExpAccordions from "./sections/workexp/WorkExpAccordions";
import FluidContainer from "./components/layouts/FluidContainer";
import ProfSkills from "./sections/skills/ProfSkills";
import Projects from "./sections/projs/Projects";
import SocialGrid from "./sections/contact/Socials";
import FetchBlogData from "./utils/FetchBlogData";
import Footer from "./sections/footer/Footer";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography : {
    fontSize: 18,
    fontFamily: "AlegreyaSans",
    h1: {
      fontSize: 'clamp(2.4rem, 3.6rem, 4rem)',
      color: "#407bff",
      fontWeight: 700,
      fontFamily: "ElMessiri, Iowan Old Style, sans-serif",
    },
    h2: {
      fontSize: 'clamp(2rem, 3rem, 3.6rem)',
      color: "#407bff",
      fontWeight: 600,
      fontFamily: "ElMessiri, Iowan Old Style, sans-serif",
    },
    h3: {
      fontSize: 'clamp(1.6rem, 2.4rem, 3.2rem)',
      fontWeight: 500,
      fontFamily: "ElMessiri, Iowan Old Style, sans-serif",
    },
    h4: {
      fontSize: 'clamp(1.2rem, 1.4rem, 2.8rem)',
      fontWeight: 500,
      fontFamily: "ElMessiri, Iowan Old Style, sans-serif",
    },  
  },
  components: {
    MuiCssBaseline: {
    styleOverrides: {
      body: {
      margin: '0 auto',
      maxWidth: '1400px',
      minWidth: '340px',
      fontSize: '1rem',
      backgroundColor: '#2e3141',
      color: '#fff',
    }}
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <main className="App">
     <ResponsiveAppBar />
     <Hero/>
     <Bio />
     <FluidContainer >
     <ProfSkills />
     </FluidContainer> 
     <WorkExpAccordions />
     <Projects />
     <SocialGrid />
     <FetchBlogData />
     <Footer/>      
    </main>
    </ThemeProvider>
  )
}

export default App
  