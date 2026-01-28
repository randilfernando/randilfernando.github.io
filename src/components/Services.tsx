import React from 'react';
import { Service } from '../types';

interface ServicesProps {
    services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
    return (
        <section id="services" className="section section-alt">
            <div className="container text-center">
                <h2 className="section-title">How I can help</h2>
                <div className="grid-3">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
