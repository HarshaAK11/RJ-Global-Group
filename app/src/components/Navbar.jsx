import React from "react"
import { Link } from "react-router-dom"
import earth from "../assets/earth.png"

const Navbar = () => {
    return (
            <nav className="fixed top-8 left-1/2 -translate-x-1/2 h-[60px] w-fit flex justify-center items-center bg-[gray]/80 backdrop-blur-sm text-primary rounded-xl z-10">
                
                <ul className="flex items-center space-x-10 px-2">
                    <li>
                        <img src={earth} alt="earth" className="w-10 h-10"/>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/divisions" className="hover:text-gray-300">
                            Divisions
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className="hover:text-gray-300">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="px-5 py-3 rounded-lg bg-secondary text-primary hover:text-gray-300">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar