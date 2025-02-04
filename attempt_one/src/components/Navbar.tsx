import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { BsSun, BsMoon } from 'react-icons/bs'; // Import icons (install react-icons)

const Navbar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false); // State for theme

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // Apply dark mode styles to the body or a root element
        document.body.classList.toggle('dark-mode'); // Or a more specific selector
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${isDarkMode ? 'bg-dark navbar-dark' : 'bg-light'}`}> {/* Conditional navbar bg */}
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" height="30" className="d-inline-block align-top me-2" />
                    AttemptOne
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={!isCollapsed}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>

                        <li className="nav-item"> {/* Theme Toggle */}
                            <button className="nav-link btn btn-link" onClick={toggleTheme}>
                                {isDarkMode ? <BsSun /> : <BsMoon />}
                            </button>
                        </li>

                        <li className="nav-item"> {/* Login/Signup */}
                            <div className="btn-group">
                                <button className="btn btn-outline-primary me-2" type="button">Login</button>
                                <button className="btn btn-primary" type="button">Sign Up</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;