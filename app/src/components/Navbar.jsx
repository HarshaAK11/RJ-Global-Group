import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import earth from "../assets/earth.png";
import { ArrowRight, Minus } from "lucide-react";
import gsap from "gsap";
import Menu from "./Menu";

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Know Us', path: '/about' },
        { name: 'Divisions', path: '/divisions' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isDarkSection, setIsDarkSection] = useState(false);
    const [isTransparent, setIsTransparent] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const arrowRef = useRef(null);

    // dark and transparent section check
    const checkSections = () => {
        const darkSections = document.querySelectorAll('.dark-section');
        const transparentSections = document.querySelectorAll('.transparent-section');
        let isOverDarkSection = false;
        let isOverTransparentSection = false;

        darkSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 90 && rect.bottom >= 0) {
                isOverDarkSection = true;
            }
        });

        transparentSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 90 && rect.bottom >= 0) {
                isOverTransparentSection = true;
            }
        });

        setIsDarkSection(isOverDarkSection);
        setIsTransparent(isOverTransparentSection);
    };

    // Run on route changes
    useEffect(() => {
        setTimeout(checkSections, 0);
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

            checkSections();

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

    // Link hover animation
    const handleLinkEnter = (index) => {
        const link = document.querySelector(`.link-${index}`);
        gsap.to(link, {
            y: isScrolled ? 25 : 27,
            duration: 0.5,
        });
    };

    // Link leave animation
    const handleLinkLeave = (index) => {
        const link = document.querySelector(`.link-${index}`); 
        gsap.to(link, {
            y: 0,
            duration: 0.5,
        });
    };

    // Button hover animation
    const handleArrowEnter = () => {
        const arrow = arrowRef.current;
        gsap.to(arrow, {
            rotate: 0,
            duration: 0.1,
            scale: 1.2,
            ease: 'bounce.in'
        });
    };

    // Button leave animation
    const handleArrowLeave = () => {
        const arrow = arrowRef.current;
        gsap.to(arrow, {
            rotate: -45,
            duration: 0.1,
            scale: 1,
            ease: 'bounce.out',
        });
    };

    const handleNavigation = (path, e) => {
        e.preventDefault();

        const curtain = document.querySelector('.transition-curtain');
        
        gsap.timeline()
          .to(curtain, {
            y: '0%',
            duration: 0.6,
            ease: 'power4.inOut',
          })
          .to(curtain, {
            y: '-100%',
            duration: 0.6,
            delay: 0.3,
            ease: 'power4.inOut',
            onComplete: () => {
                navigate(path);
                window.scrollTo(0, 0);
            }
          });
        
        // Animate current page up
        gsap.to('.page-content', {
            y: '-100%',
            duration: 0.6,
            ease: 'power4.inOut',
            onComplete: () => {
                navigate(path);
                window.scrollTo(0, 0);
            }
        });
    };

    // Cancel and resume scroll
    const scrollHandling = () => {
        setIsMenuOpen(!isMenuOpen)
        isMenuOpen ? window.LocomotiveScroll.start() : window.LocomotiveScroll.stop()
    }

    return (
        <>

            {/* Curtain */}
            <div className="transition-curtain fixed inset-0 bg-black z-[100] transform -translate-y-full"></div>

            <nav 
                className={`fixed w-full flex justify-between items-center z-[99] px-20 transition-all duration-300 
                    ${isScrolled ? 'text-[1rem] h-[60px]' : 'text-[1.2rem] h-[90px]'}
                    ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                    ${isTransparent 
                        ? 'bg-transparent text-white' 
                        : isDarkSection 
                            ? 'bg-[#171717] text-white' 
                            : 'bg-white text-black'
                    }
                `}
            >

                <div className="flex items-center gap-20">
                    {/* Logo */}
                    <img 
                        src={earth} 
                        alt="earth" 
                        className={`transition-all duration-300 
                            ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}
                        `}
                    />  

                    
                    
                    <ul className="flex items-center space-x-10 px-2 max-md:hidden">
                        {navLinks.map((link, index) => (
                            <li className="overflow-hidden" key={index}>
                                <Link 
                                    to={link.path}
                                    className={`link-${index} flex flex-col justify-end items-center ${
                                        isScrolled ? 'h-[20px]' : 'h-[30px]'
                                    }`} 
                                    onMouseEnter={() => handleLinkEnter(index)} 
                                    onMouseLeave={() => handleLinkLeave(index)}
                                    onClick={(e) => handleNavigation(link.path, e)}
                                >
                                    <p>{link.name}</p>
                                    <p>{link.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <Link 
                    to="/contact" 
                    onMouseEnter={handleArrowEnter} 
                    onMouseLeave={handleArrowLeave} 
                    className={`relative rounded-full flex items-center gap-2 transition-all duration-300 group overflow-hidden max-md:hidden
                        ${isTransparent || isDarkSection
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

                {/* Hamburger menu */}
                <div 
                    className={`relative w-12 h-12 rounded-full flex flex-col bg-[#F3F4EE] items-center justify-evenly cursor-pointer transform hidden max-md:block transition-all duration-300
                        ${isScrolled ? 'scale-[0.8]' : 'scale-1'}
                    `}

                    onClick={() => {
                        scrollHandling()
                        sty
                    }}
                >
                    <Minus className="absolute top-[15px] left-1/2 -translate-x-1/2" />
                    <Minus className="absolute bottom-[15px] left-1/2 -translate-x-1/2" />
                </div>
            </nav>

            {/* Mobile Menu */}
            <Menu className={`
                ${isMenuOpen ? `top-0 ${isScrolled ? 'pt-[60px]' : 'pt-[90px]'}` : 'top-[-100%]'}    
                `} 

                setIsMenuOpen={setIsMenuOpen}
            />
        </>
    );
};

export default Navbar;