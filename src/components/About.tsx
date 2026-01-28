import React from 'react';

interface AboutProps {
    text: string;
}

const About: React.FC<AboutProps> = ({ text }) => {
    return (
        <section className="section container">
            <h2 className="section-title">About</h2>
            <div className="about-content">
                <p>{text}</p>
            </div>
        </section>
    );
};

export default About;
