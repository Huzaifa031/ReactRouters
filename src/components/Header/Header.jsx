import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Portfolio.hu_full_logo.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    
                    
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        type="button"
                        className="inline-flex items-center lg:hidden text-gray-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>

                    
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <ul className="flex space-x-8 font-medium">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center lg:order-2">
                        
                        <Link
                            to="/"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                </div>

              
                <div className={`${menuOpen ? "block" : "hidden"} lg:hidden`}>
                    <ul className="flex flex-col space-y-2 font-medium p-4 bg-gray-100 rounded-md mt-2">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block py-2 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block py-2 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/github"
                                className={({ isActive }) =>
                                    `block py-2 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                Github
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
