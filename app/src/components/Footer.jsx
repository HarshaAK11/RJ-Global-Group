import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/earth.png"
import gsap from "gsap"
import { VelocityScroll } from './ui/scroll-based-velocity'

const Footer = () => {
    return (
        <footer className="relative w-full h-[110vh] bg-[#171717] text-white px-20 py-10 overflow-hidden">
            {/* Heading Text */}
            <div className="absolute left-0 top-10">
                <VelocityScroll numRows={1} defaultVelocity={1}>Innovate Create Elevate</VelocityScroll> 
            </div>

            {/* Main Content */}
            <div className="relative h-full flex flex-col justify-end gap-2">

                {/* Content header */}
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
                    <div>
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
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col gap-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>

                    {/* Business Enquiries */}
                    <div className="flex flex-col gap-4">
                        <a href="mailto:rjglobalg@gmail.com" className="">
                            rjglobalg@gmail.com
                        </a>
                        <a href="tel:+918088018968" className="">
                            +91 8088018968
                        </a>
                    </div>
                </div>

                <hr className="border-[grey] mt-20" />

                <div className="flex justify-between">
                    <p>
                        DESIGNED BY{" "}
                        <a
                            href="https://practical-professionals-087122.framer.app/"
                            className="text-[#f0ff75]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            RJ TECH INNOVATIONS
                        </a>
                    </p>
                    <p>&copy; 2025 RJ Global Group. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
