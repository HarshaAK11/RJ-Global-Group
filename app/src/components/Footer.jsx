import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/earth.png"
import gsap from "gsap"
import { VelocityScroll } from '../components/magicui/scroll-based-velocity'

const Footer = () => {
    const textRef = useRef(null)
    const [scrollDirection, setScrollDirection] = useState('down')
    const lastScrollY = useRef(0)

    useEffect(() => {
        // Handle scroll direction detection
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY.current) {
                setScrollDirection('down')
            } else {
                setScrollDirection('up')
            }
            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)

        // Infinite scrolling animation
        const animation = gsap.to(textRef.current, {
            xPercent: scrollDirection === 'down' ? -25 : 25,
            duration: 30,
            ease: "none",
            repeat: -1
        })

        // Update animation direction 
        return () => {
            window.removeEventListener('scroll', handleScroll)
            animation.kill()
        }
    }, [scrollDirection])

    return (
        <footer className="relative w-full h-[110vh] bg-[#171717] text-white px-20 py-10 overflow-hidden">
            {/* Heading Text */}
            <div className="absolute top-10 whitespace-nowrap">
                <h1 
                    className="text-[10rem] font-bold leading-none inline-block"
                >
                    <VelocityScroll>Innovate Create Elevate</VelocityScroll>
                </h1>
            </div>

            {/* Main Content */}
            <div className="relative h-full flex flex-col justify-end gap-2">

                {/* Content Headers */}
                <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] text-lg font-medium">
                    <h3></h3>
                    <h3>MENU</h3>
                    <h3>SOCIALS</h3>
                    <h3>BUSINESS ENQUIRIES</h3>
                </div>

                {/* Horizontal Line */}
                <hr className="border-[grey] my-4" />

                {/* Contents */}
                <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] mb-10">
                       
                    {/* Logo */}
                    <div className="">
                        <img src={logo} alt="logo" className="w-[100px] h-[100px]" />
                    </div>

                    {/* Menu Links */}
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="">
                            Home
                        </Link>
                        <Link to="/about" className="">
                            About
                        </Link>
                        <Link to="/divisions" className="">
                            Divisions
                        </Link>
                        <Link to="/services" className="">
                            Services
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col gap-4">
                        <a href="#" className="">
                            Instagram
                        </a>
                        <a href="#" className="">
                            LinkedIn
                        </a>
                        <a href="#" className="">
                            Twitter
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4">
                        <a href="mailto:rjglobalg@gmail.com" className="">
                            rjglobalg@gmail.com
                        </a>
                        <a href="tel:+918590067082" className="">
                            +91 8590067082
                        </a>
                    </div>

                </div>
                    
                {/* Horizontal Line */}
                <hr className="border-[grey] mt-20" />

                {/* Copyright */}
                <div className="flex justify-between">
                    <p>DESIGNED BY <a href="https://practical-professionals-087122.framer.app/" className="text-[#f0ff75]">RJ TECH INNOVATIONS</a></p>
                    <p>&copy; 2025 RJ Global Group. All rights reserved.</p>
                </div>

            </div>

        </footer>
    )
}

export default Footer
