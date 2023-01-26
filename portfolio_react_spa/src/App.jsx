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
import './css/reset.css'
import './css/global.css'
import "./css/hero.css"
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import AlegreyaSans from './assets/fonts/alegreya-sans-v24-latin-regular.woff';
import AlegreyaSans2 from './assets/fonts/alegreya-sans-v24-latin-regular.woff2';
import ElMessiri500 from './assets/fonts/el-messiri-v18-latin-500.woff';
import ElMessiri500_2 from './assets/fonts/el-messiri-v18-latin-500.woff2';
import ElMessiri600 from './assets/fonts/el-messiri-v18-latin-600.woff';
import ElMessiri600_2 from './assets/fonts/el-messiri-v18-latin-600.woff2';
import ElMessiri700 from './assets/fonts/el-messiri-v18-latin-700.woff';
import ElMessiri700_2 from './assets/fonts/el-messiri-v18-latin-700.woff2';


const theme = createTheme({
  typography : {
    fontSize: 16,
    fontFamily: [
      'Alegreya Sans', 
      'El Messiri',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: 'clamp(2.4rem, 3.6rem, 4rem)',
      color: "whitesmoke",
      fontFamily: 'El Messiri, Iowan Old Style'
    },
    h2: {
      fontSize: 'clamp(2rem, 3rem, 3.6rem)',
      fontFamily: 'El Messiri, Iowan Old Style',
      fontWeight: 600
    },
    h3: {
      fontSize: 'clamp(1.6rem, 2.4rem, 3.2rem)',
      fontFamily: 'El Messiri, Iowan Old Style',
      fontWeight: 500
    },
    h4: {
      fontSize: 'clamp(1.2rem, 1.4rem, 2.8rem)',
      fontFamily: 'El Messiri, Iowan Old Style'
    },  
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Alegreya Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Alegreya Sans'), url(${AlegreyaSans}) format("woff"), url(${AlegreyaSans2}) format("woff2");
        }

      @font-face {
        font-family: 'El Messiri';
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: local('El Messiri'), url(${ElMessiri500}) format("woff"), url(${ElMessiri500_2}) format("woff2");
    }

    @font-face {
      font-family: 'El Messiri';
      font-style: normal;
      font-display: swap;
      font-weight: 600;
      src: local('El Messiri'), url(${ElMessiri600}) format("woff"), url(${ElMessiri600_2}) format("woff2");
  }

  @font-face {
    font-family: 'El Messiri';
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: local('El Messiri'), url(${ElMessiri700}) format("woff"), url(${ElMessiri700_2}) format("woff2");
},
    `,
    styleOverrides: {
      body: {
      margin: '0 auto',
      maxWidth: '1400px',
      minWidth: '340px',
      fontSize: '1rem',
      backgroundColor: '#f8f1ff'
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
     <Hero
     sx={{
      fontFamily: 'Alegreya Sans',
    }} 
      />
     <Bio 
      sx={{
        fontFamily: 'El Messiri',
      }}/>
     <FluidContainer >
     <ProfSkills />
     </FluidContainer> 
     <WorkExpAccordions />
     <Projects />
     <SocialGrid />
     <FetchBlogData />
     <Footer blob={"SVG shape created using blobmaker.app"} icons={"Icons chosen from Skyrim Fandom website & icons8"} cartoons={`Cartoon illustrations from Storyset`}/>      
    </main>
    </ThemeProvider>
  )
}

export default App
