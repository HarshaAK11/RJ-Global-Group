import React from "react"
import { Link } from "react-router-dom"
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
            <nav className="w-full h-[80px] px-16 container mx-auto flex justify-center items-center bg-[#1D3E2F] text-[#F7F5F4]">
                <ul className="flex space-x-10">
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
                        <Link to="/contact" className="px-4 py-2 rounded-full bg-[#F7F5F4] text-[#1D3E2F] hover:text-gray-300">
                        Contact
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar
