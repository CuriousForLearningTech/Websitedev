// components/Footer.tsx
import React from 'react';
import logo from '../assets/logo.png'; // Import your logo
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons (install react-icons)
import './Footer.css';
const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-dark text-light py-3">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4">
                        <img src={logo} alt="Logo" height="40" className="footer-logo mb-2" /> {/* Add logo */}
                        <p>&copy; {currentYear} Your Company. All rights reserved.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <p>Email: info@example.com<br />Phone: 123-456-7890</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <ul className="list-inline"> {/* Use Bootstrap list-inline */}
                            <li className="list-inline-item">
                                <a href="#" className="text-light"><FaFacebook className="footer-icon" /></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-light"><FaTwitter className="footer-icon" /></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-light"><FaInstagram className="footer-icon" /></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-light"><FaLinkedin className="footer-icon" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;