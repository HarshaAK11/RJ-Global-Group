import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import earth from "../assets/earth.png"
import { ArrowRight } from "lucide-react"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.querySelector('section');
            if (heroSection) {
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                const scrollPosition = window.scrollY;
                
                if (scrollPosition > heroBottom - 90) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full flex justify-between bg-[white] items-center text-black z-[99] px-20 transition-all duration-300 ${
            isScrolled ? 'text-[1rem] h-[60px]' : 'text-[1.2rem] h-[90px]'
        }`}>
            <ul className="flex items-center space-x-10 px-2">
                <li className="mr-10">
                    <img src={earth} alt="earth" className={`transition-all duration-300 ${
                        isScrolled ? 'w-8 h-8' : 'w-10 h-10'
                    }`}/>
                </li>
                <li>
                    <Link to="/" >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" >
                        Know Us
                    </Link>
                </li>
                <li>
                    <Link to="/divisions" >
                        Divisions
                    </Link>
                </li>
                <li>
                    <Link to="/services" >
                        Services
                    </Link>
                </li>
            </ul>

            <Link to="/contact" className={`rounded-full text-white bg-black flex items-center gap-2 hover:bg-[#f0ff75] hover:text-black transition-all duration-300 ${
                isScrolled ? 'px-4 py-2' : 'px-5 py-3'
            }`}>
                Let's Talk
                <ArrowRight className={`-rotate-45 transition-all duration-300 ${
                    isScrolled ? 'w-4 h-4' : 'w-5 h-5'
                }`} />
            </Link>
        </nav>
    )
}

export default Navbar