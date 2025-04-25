'use client';
import { useState } from 'react';
import './FilterSidebar.css';
import Image from 'next/image';

const FilterSection = ({ title, isOpen, onClick, children }) => {
    return (
        <div className="filter-section">
            <h4 className="filter-title" onClick={onClick}>
                <span>
                    {title} <br />
                    <span>All</span>
                </span>
                <span className="arrow">
                    <Image
                        src={'/arrow-left.png'}
                        alt="arrow"
                        title="arrow"
                        height={16}
                        width={16}
                        className={isOpen ? '' : 'roted'}
                        priority
                    />
                </span>
            </h4>
            {isOpen && <div className="filter-options">{children}</div>}
        </div>
    );
};

export default function FilterSidebar({ toggleFilter }) {
    const [openSection, setOpenSection] = useState('IDEAL FOR');

    const handleToggle = (section) => {
        setOpenSection(prev => (prev === section ? null : section));
    };

    return (
        <div className="sidebar">
            <button className='close_btn' onClick={toggleFilter}>x</button>
            <FilterSection
                title="IDEAL FOR"
                isOpen={openSection === 'IDEAL FOR'}
                onClick={() => handleToggle('IDEAL FOR')}
            >
                <div className="unselect">Unselect all</div>
                <label><input type="checkbox" /> Men</label>
                <label><input type="checkbox" /> Women</label>
                <label><input type="checkbox" /> Baby & Kids</label>
            </FilterSection>

            {[
                "OCCASION", "WORK", "FABRIC", "SEGMENT", "SUITABLE FOR", "RAW MATERIALS", "PATTERN"
            ].map(section => (
                <FilterSection
                    key={section}
                    title={section}
                    isOpen={openSection === section}
                    onClick={() => handleToggle(section)}
                >
                    <div>All</div>
                </FilterSection>
            ))}
        </div>
    );
}
