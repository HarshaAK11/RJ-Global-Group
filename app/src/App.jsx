import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Divisions from "./pages/Divisions"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import SmoothScroll from "./SmoothScroll"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <SmoothScroll>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/divisions" element={<Divisions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />

      </SmoothScroll>
    </Router>
  )
}

export default App