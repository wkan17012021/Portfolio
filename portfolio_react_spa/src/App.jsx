import ResponsiveAppBar from "./sections/navigation/Nav"
import ControlledAccordions from "./sections/workexp/Accordion"
import './assets/reset.css'
import './assets/fonts.css'

function App() {
  

  return (
    <div className="App">
      <div>
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
      </div>
     <ResponsiveAppBar />
     <ControlledAccordions />
    </div>
  )
}

export default App
