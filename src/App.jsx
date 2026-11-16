import {Routes , Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Footer from "./Components/Footer"
import FreeGuide from "./Pages/FreeGuide"
import Header from "./Components/Header"
import BoxDetails from "./Components/BoxDetails"
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/free-guide" element={<FreeGuide/>} />
        <Route path="/BoxDetails/:id" element={<BoxDetails/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
