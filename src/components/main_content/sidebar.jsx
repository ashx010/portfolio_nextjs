"use client";
import React, {useState} from 'react';
import styles from './sidebar.module.css';

function Sidebar(props) {
    const [toggleSidebar, setToggleSidebar] = useState({
        about: true,
        portfolio: false,
        resume: false,
        blog: false,
        contact: false
    });

    const itemData = [
        {
            name: "About Me",
            abbr: "A",
            toggleName: "about"
        },
        {
            name: "Portfolio",
            abbr: "P",
            toggleName: "portfolio"
        },
        {
            name: "Resume",
            abbr: "R",
            toggleName: "resume"
        },
        {
            name: "Blog",
            abbr: "B",
            toggleName: "blog"
        },
        {
            name: "Contact",
            abbr: "C",
            toggleName: "contact"
        }
    ];

    const handleToggleSidebar = (section) => {
        setToggleSidebar({
            about: section === 'about',
            portfolio: section === 'portfolio',
            resume: section === 'resume',
            blog: section === 'blog',
            contact: section === 'contact'
        });
    };

    return (
        <div className={`z-10 sticky border-2 border-white/70 px-8 py-6 lg:px-10 lg:py-7 bg-[#1C1E20FF] backdrop-blur-sm top-2 lg:top-6 w-full lg:w-1/5 rounded-2xl h-fit`}>
            <ul className={`list-none space-x-4 lg:space-x-0 lg:space-y-6 font-mono text-xl lg:text-base text-white/70 font-normal uppercase text-left tracking-wider flex flex-row w-full justify-around items-center content-center lg:block`}>
                {itemData.map((item, i) => (
                    <li key={i} onClick={() => handleToggleSidebar(item.toggleName)}
                        className={`list-none group relative`}>
                        <div className={`inline-flex group-hover:text-white justify-between items-center w-full content-center ${styles.sidebar_section_link} ${toggleSidebar[item.toggleName] ? `font-bold text-white 0 ${styles.active} group-hover:before:text-white` : null}`}>
                            <span className={`hidden lg:block group-hover:text-white`}>{item.name}</span>
                            <span className={`block lg:hidden`}>{item.abbr}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;