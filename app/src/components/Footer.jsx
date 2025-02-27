import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/earth.png";
import gsap from "gsap";

const Footer = () => {
    const textRef = useRef(null);
    const lastScrollY = useRef(0);
    const [scrollDirection, setScrollDirection] = useState("down");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const animation = gsap.fromTo(
            textRef.current,
            { xPercent: 0 },
            { xPercent: -100, duration: 30, ease: "linear", repeat: -1 }
        );
        return () => animation.kill();
    }, []);

    return (
        <footer className="relative w-full h-[110vh] bg-[#171717] text-white px-20 py-10 overflow-hidden">
            {/* Scrolling Heading Text */}
            <div className="absolute top-10 whitespace-nowrap overflow-hidden w-full">
                <h1 ref={textRef} className="text-[10rem] font-bold leading-none inline-block">
                    Innovate Create Elevate • Innovate Create Elevate •
                </h1>
            </div>

            {/* Main Content */}
            <div className="relative h-full flex flex-col justify-end gap-2">
                <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] text-lg font-medium">
                    <h3></h3>
                    <h3>MENU</h3>
                    <h3>SOCIALS</h3>
                    <h3>BUSINESS ENQUIRIES</h3>
                </div>

                <hr className="border-[grey] my-4" />

                <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] mb-10">
                    <div>
                        <img src={logo} alt="logo" className="w-[100px] h-[100px]" />
                    </div>

                    <div className="flex flex-col gap-4">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/divisions">Divisions</Link>
                        <Link to="/services">Services</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="mailto:rjglobalg@gmail.com">rjglobalg@gmail.com</a>
                        <a href="tel:+918590067082">+91 8590067082</a>
                    </div>
                </div>

                <hr className="border-[grey] mt-20" />

                <div className="flex justify-between">
                    <p>
                        DESIGNED BY <a href="https://practical-professionals-087122.framer.app/" className="text-[#f0ff75]">RJ TECH INNOVATIONS</a>
                    </p>
                    <p>&copy; 2025 RJ Global Group. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
