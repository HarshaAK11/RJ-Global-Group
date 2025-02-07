import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Divisions from "./pages/Divisions"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import SmoothScroll from "./SmoothScroll"

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/divisions" element={<Divisions />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
              <p>&copy; 2023 RJ Global Group. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App

