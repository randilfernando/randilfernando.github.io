import React from 'react';
import { Profile } from '../types';

interface HeroProps {
    profile: Profile | null;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
    if (!profile) return <header className="hero container custom-loading">Loading...</header>;

    return (
        <header className="hero container">
            <h1>{profile.name}</h1>
            <h2 className="text-gradient">{profile.headline}</h2>
            <p className="value-statement">{profile.valueStatement}</p>

            <div className="cta-group">
                <a href={profile.contact?.linkedin || `mailto:${profile.email}`} target="_blank" rel="noopener noreferrer" className="btn">
                    Connect via LinkedIn
                </a>
                <a href="#blog" className="btn btn-secondary">
                    Read my writing
                </a>
            </div>

            <div className="credibility-strip" style={{ marginTop: '4rem', padding: 0, border: 'none' }}>
                <ul style={{ justifyContent: 'center' }}>
                    {profile.credibility.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Hero;
