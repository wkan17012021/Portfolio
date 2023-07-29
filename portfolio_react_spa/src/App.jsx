import './css/reset.css';
import './css/global.css';
import './css/hero.css';
import ResponsiveAppBar from "./components/navigation/Nav";
import Hero from "./components/hero/MainHero";
import Bio from "./components/bio/BioSummary";
import WorkExpAccordions from "./components/workexp/WorkExpAccordions";
import ProfSkills from "./components/skills/ProfSkills";
import Projects from "./components/projs/Projects";
import FetchBlogData from "./utils/FetchBlogData";
import BasicForm from './components/contact/BasicForm';
import Footer from "./components/footer/Footer";
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
      <ProfSkills />
     <WorkExpAccordions />
     <Projects />
     <FetchBlogData />
     <BasicForm />
     <Footer/>      
    </main>
    </ThemeProvider>
  )
}

export default App
  