import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Divisions from "./pages/Divisions"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import SmoothScroll from "./SmoothScroll"
import Footer from "./components/Footer"
import ScrollToTop from './components/ScrollToTop'
import Page404 from './pages/404'
import { Toaster } from "sonner"

function MainLayout({ children }) {
  return (
    <SmoothScroll>
      <Navbar />
      {children}
      <Footer />
    </SmoothScroll>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />
        <Route path="/about" element={
          <MainLayout>
            <About />
          </MainLayout>
        } />
        <Route path="/divisions" element={
          <MainLayout>
            <Divisions />
          </MainLayout>
        } />
        <Route path="/services" element={
          <MainLayout>
            <Services />
          </MainLayout>
        } />
        <Route path="/contact" element={
          <Contact />
        } />
        
        {/* NotFound route without Navbar and Footer */}
        <Route path="*" element={
          <Page404 />
        } />
      </Routes>
      </Toaster>
    </Router>
  )
}

export default App