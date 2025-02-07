import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">

        RJ Global Group
        </Link>
        <ul className="flex space-x-4">
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
            <Link to="/contact" className="hover:text-gray-300">
            Contact
            </Link>
        </li>
        </ul>
    </nav>
</header>
    )
}

export default Navbar
