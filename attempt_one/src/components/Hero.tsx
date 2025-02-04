import React, { useState, useEffect } from 'react';
import heroImage from '../assets/hero.jpg'; // Replace with your image path
import { TypeAnimation } from 'react-type-animation'; // Install: npm install react-type-animation
import { FaReact, FaCode, FaRocket } from 'react-icons/fa';  // Example icons (install react-icons)

const Hero: React.FC = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize); // Update on resize
        return () => {
            window.removeEventListener('resize', handleResize); // Clean up
        };
    }, []);

    return (
        <section
            className="hero d-flex align-items-center justify-content-center" // Flexbox for centering
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: windowHeight, // Fullscreen height
                width: '100%', // Ensure full width
            }}
        >
            <div className="container text-white text-center"> {/* Center text */}
                <div className="row">
                    <div className="col-12"> {/* Full width for text */}
                        <TypeAnimation
                            sequence={[
                                'Welcome to Our Awesome Website',
                                1000, // Wait 1s
                                'We Build Amazing Things',
                                1000,
                                'Let us help you grow',
                                1000,
                            ]}
                            wrapper="h1" // Use <h1> tag
                            cursor={true}
                            repeat={Infinity} // Loop the animation
                            className="hero-title" // Add a class for styling
                        />
                        <p className="lead mt-4">
                            <FaReact className="me-2" /> {/* Icon before text */}
                            We specialize in modern web technologies.
                            <FaCode className="ms-2 me-2" /> {/* Icon after text */}
                            Creating innovative solutions.
                            <FaRocket className="ms-2" /> {/* Another icon */}
                        </p>

                        <button className="btn btn-lg btn-primary mt-4">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;