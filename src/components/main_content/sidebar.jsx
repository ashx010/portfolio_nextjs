"use client";
import React, {useState} from 'react';
import styles from './main_content.module.css';
import Link from "next/link";

function Sidebar(props) {
    const [toggleSidebar, setToggleSidebar] = useState({
        about: true,
        portfolio: false,
        resume: false,
        blog: false,
        contact: false
    });

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
        <div className={`z-10 sticky px-10 py-7 ${styles.sidebar_container} backdrop-blur-sm`}>
            <ul className={`list-none space-y-6 font-mono text-white/70 font-normal uppercase text-left tracking-wider`}>
                <li onClick={() => handleToggleSidebar('about')}  className={`list-none ${styles.list_sidebar} relative`}>
                    <Link className={`${styles.link_sidebar} ${toggleSidebar.about ? styles.active : " "}`} href="#about">
                        About Me
                        <span className={`${styles.sidebar_section_link} ${toggleSidebar.about ? styles.active : " "}`}></span>
                    </Link>
                </li>
                <li onClick={() => handleToggleSidebar('portfolio')} className={`list-none ${styles.list_sidebar} relative`}>
                    <Link className={`${styles.link_sidebar} ${toggleSidebar.portfolio ? styles.active : " "}`} href="#portfolio">
                        Portfolio
                        <span className={`${styles.sidebar_section_link} ${toggleSidebar.portfolio ? styles.active : " "}`}></span>
                    </Link>
                </li>
                <li onClick={() => handleToggleSidebar('resume')} className={`list-none ${styles.list_sidebar} relative`}>
                    <Link className={`${styles.link_sidebar} ${toggleSidebar.resume ? styles.active : " "}`} href="#resume">
                        Resume
                        <span className={`${styles.sidebar_section_link} ${toggleSidebar.resume ? styles.active : " "}`}></span>
                    </Link>
                </li>
                <li onClick={() => handleToggleSidebar('blog')} className={`list-none ${styles.list_sidebar} relative`}>
                    <Link className={`${styles.link_sidebar} ${toggleSidebar.blog ? styles.active : " "}`} href="#blog">
                        Blog
                        <span className={`${styles.sidebar_section_link} ${toggleSidebar.blog ? styles.active : " "}`}></span>
                    </Link>
                </li>
                <li onClick={() => handleToggleSidebar('contact')} className={`list-none ${styles.list_sidebar} relative`}>
                    <Link className={`${styles.link_sidebar} ${toggleSidebar.contact ? styles.active : " "}`} href="#contact">
                        Contact
                        <span className={`${styles.sidebar_section_link} ${toggleSidebar.contact ? styles.active : " "}`}></span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;