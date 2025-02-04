// components/Features.tsx
import React, { useRef, useEffect } from 'react';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCode, faChartLine, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Features: React.FC = () => {
    const featuresData = [
        { title: 'Innovative Solutions', description: 'Cutting-edge technology to drive your business.', icon: faLightbulb },
        { title: 'Clean Code', description: 'Well-structured and maintainable code.', icon: faCode },
        { title: 'Data-Driven Results', description: 'Achieve your goals with data-backed strategies.', icon: faChartLine },
        { title: 'Mobile-First Approach', description: 'Seamless experience across all devices.', icon: faMobileAlt },
    ];

    // const featuresRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (featuresRef.current) {
    //             const top = featuresRef.current.getBoundingClientRect().top;
    //             if (top < window.innerHeight * 0.75) {
    //                 featuresRef.current.classList.add('in-view');
    //             } else {
    //                 featuresRef.current.classList.remove('in-view');
    //             }
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <section className="features py-5 bg-light" >
            <div className="container">
                <h2 className="text-center mb-4">Our Features</h2>
                <div className="">
                    <ul className="list-unstyled">
                        {featuresData.map((feature, index) => (
                            <li key={index} className="mb-3">
                                <div className="card p-4 feature-item">
                                    <FontAwesomeIcon icon={feature.icon} className="me-2 fa-lg text-primary" />
                                    <h5 className="mt-2 d-inline-block">{feature.title}</h5>
                                    <p className="mt-2">{feature.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Features;