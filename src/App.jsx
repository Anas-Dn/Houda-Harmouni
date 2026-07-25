import {Routes , Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Footer from "./Components/Footer"
import FreeGuide from "./Pages/FreeGuide"
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/free-guide" element={<FreeGuide/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
