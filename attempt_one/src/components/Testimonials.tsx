import React from 'react';
import usre from '../assets/user.png';

interface Testimonial {
    name: string;
    text: string;
    // Add other properties as needed
}

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        { name: "John Doe", text: "Great service!" },
        { name: "Jane Smith", text: "Highly recommend!" },
    ];

    return (
        <section className="testimonials py-5">
            <div className="container">
                <h2>Testimonials</h2>
                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <div className="col-4" key={index}>
                            <div className="card">
                                <img src={usre} alt="Logo" height="30" className="card-img-top h-25" />

                                <div className="card-body">
                                    <p>{testimonial.text}</p>
                                    <h6 className="card-title">{testimonial.name}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;