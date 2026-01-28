import React from 'react';

interface ContactCTAProps {
    email: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ email }) => {
    return (
        <section className="section section-alt">
            <div className="container text-center">
                <h2 style={{ marginBottom: '1rem' }}>Ready to build?</h2>
                <p style={{ marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto' }}>
                    If you’re building a system that needs to be reliable today and scalable tomorrow, I’m happy to talk.
                </p>
                <a href={`mailto:${email}`} className="btn">
                    Get in touch
                </a>
            </div>
        </section>
    );
};

export default ContactCTA;
