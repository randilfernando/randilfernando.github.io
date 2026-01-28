import React from 'react';
import { Work } from '../types';

interface SelectedWorkProps {
    work: Work[];
}

const SelectedWork: React.FC<SelectedWorkProps> = ({ work }) => {
    return (
        <section className="section container">
            <h2 className="section-title">Selected work</h2>
            <div className="work-list">
                {work.map((item, index) => (
                    <div key={index} className="work-item">
                        <span className="work-name">{item.name}</span>
                        <span className="work-separator">—</span>
                        <span className="work-desc">{item.description}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SelectedWork;
