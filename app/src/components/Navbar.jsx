import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import earth from "../assets/earth.png";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Know Us', path: '/about' },
        { name: 'Divisions', path: '/divisions' },
    ]

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const arrowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
      setIsVisible(document.querySelector("footer")?.getBoundingClientRect().top >= window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleArrowAnimation = (enter) => {
    gsap.to(arrowRef.current, {
      rotate: enter ? 0 : -45,
      scale: enter ? 1.2 : 1,
      duration: 0.1,
      ease: enter ? "bounce.in" : "bounce.out",
    });
  };

  return (
    <nav className={`fixed w-full flex justify-between items-center z-[99] px-8 md:px-20 transition-all duration-300 
        ${isScrolled ? "text-[1rem] h-[60px]" : "text-[1.2rem] h-[90px]"}
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isDarkSection ? "bg-[#171717] text-white" : "bg-white text-black"}
      `}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={earth}
          alt="earth"
          className={`transition-all duration-300 ${isScrolled ? "w-8 h-8" : "w-10 h-10"}`}
        />
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center space-x-10 px-2">
        {navLinks.map((link, index) => (
          <li key={index} className="relative group">
            <Link to={link.path} className="hover:text-gray-500 transition-all">
              {link.name}
            </Link>
            {link.dropdown && (
              <ul className="absolute left-0 hidden group-hover:block bg-white text-black shadow-lg py-2 w-40">
                {link.dropdown.map((item, idx) => (
                  <li key={idx} className="px-4 py-2 hover:bg-gray-200">
                    <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Social Links */}
      <div className="hidden md:flex space-x-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600 text-xl hover:scale-110 transition-transform" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-600 text-xl hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Contact Button */}
      <Link to="/contact" onMouseEnter={() => handleArrowAnimation(true)} onMouseLeave={() => handleArrowAnimation(false)}
        className="hidden md:flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 bg-black text-white hover:bg-[#f0ff75] hover:text-black"
      >
        Let's Talk
        <ArrowRight ref={arrowRef} className="-rotate-45 transition-all duration-300 w-5 h-5" />
      </Link>

      {/* Mobile Menu */}
      <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <ul className="absolute top-[60px] left-0 w-full bg-white text-black flex flex-col space-y-4 p-6 shadow-lg md:hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-600 text-xl" />
            </a>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
