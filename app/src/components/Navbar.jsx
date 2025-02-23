import React, { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import earth from "../assets/earth.png"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"

const Navbar = () => {

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Know Us', path: '/about' },
        { name: 'Divisions', path: '/divisions' },
        { name: 'Services', path: '/services' }
    ]

    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isDarkSection, setIsDarkSection] = useState(false);
    const location = useLocation();

    // Check dark sections immediately on route change or scroll
    const checkDarkSections = () => {
        const darkSections = document.querySelectorAll('.dark-section');
        let isOverDarkSection = false;

        darkSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 90 && rect.bottom >= 0) {
                isOverDarkSection = true;
            }
        });

        setIsDarkSection(isOverDarkSection);
    };

    // Run on route changes
    useEffect(() => {
        setTimeout(checkDarkSections, 0);
    }, [location.pathname]);

    // Run on scroll
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

            checkDarkSections();

            // Footer visibility logic
            const footer = document.querySelector('footer');
            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                
                if (footerRect.top < viewportHeight * 0.5) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    {/* Link hover animation */}
    const handleLinkEnter = (index) => {

        const link = document.querySelector(`.link-${index}`);

        gsap.to(link, {
            y: isScrolled? 25 : 27,
            duration: 0.5,
        })

    }

    {/* Link leave animation */}
    const handleLinkLeave = (index) => {

        const link = document.querySelector(`.link-${index}`); 

        gsap.to(link, {
            y: 0,
            duration: 0.5,
        })

    }

    const arrowRef = useRef(null)

    const handleArrowEnter = () => {
        const arrow  = arrowRef.current

        gsap.to(arrow, {
            rotate: 0,
            duration: 0.1,
            scale: 1.2,
            ease: 'bounce.in'
        })

    }

    const handleArrowLeave = () => {
        const arrow = arrowRef.current

        gsap.to(arrow, {
            rotate: -45,
            duration: 0.1,
            scale: 1,
            ease: 'bounce.out',
        })

    }

    return (
        <nav 
            className={`fixed w-full flex justify-between items-center z-[99] px-20 transition-all duration-300 
                ${isScrolled ? 'text-[1rem] h-[60px]' : 'text-[1.2rem] h-[90px]'}
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                ${isDarkSection ? 'bg-[#171717] text-white' : 'bg-white text-black'}
            `}
        >

            <ul className="flex items-center space-x-10 px-2">
                <li className="mr-10">
                    <img src={earth} alt="earth" className={`transition-all duration-300 
                        ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}
                    `}/>
                </li>
                {navLinks.map((link, index) => (
                    <li className="overflow-hidden">
                        <Link 
                            to={link.path} 
                            key={index} 
                            className={`link-${index} flex flex-col justify-end items-center ${
                                isScrolled ? 'h-[20px]' : 'h-[30px]'
                            }`} 
                            onMouseEnter={() => handleLinkEnter(index)} 
                            onMouseLeave={() => handleLinkLeave(index)}
                        >
                            <p>{link.name}</p>
                            <p>{link.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>

            <Link 
                to="/contact" 
                onMouseEnter={() => handleArrowEnter()} 
                onMouseLeave={() => handleArrowLeave()} 
                className={`relative rounded-full flex items-center gap-2 transition-all duration-300 group overflow-hidden
                    ${isDarkSection 
                        ? 'bg-white text-black hover:bg-[#f0ff75]' 
                        : 'bg-black text-white hover:bg-[#f0ff75] hover:text-black'
                    }
                    ${isScrolled ? 'px-4 py-2' : 'px-5 py-3'}
                `}
            >
                {/* Text & Icon Container (Above Background Effect) */}
                <span className="relative z-10 flex items-center gap-2">
                    Let's Talk
                    <ArrowRight 
                        ref={arrowRef} 
                        className={`arrow -rotate-45 transition-all duration-300 ${
                            isScrolled ? 'w-4 h-4' : 'w-5 h-5'
                        }`} 
                    />
                </span>
                    
            </Link>

        </nav>
    )
}

export default Navbar