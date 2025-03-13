import React from 'react';
import styles from './header.module.css';
import Link from "next/link";
import {KanitFont} from "@/app/fonts"

function Header(props) {
    return (
        <header className={`${styles.header} flex justify-between`}>
            <h1 className={`${KanitFont.variable} font-[kanit] tracking-wider text-5xl xl:text-7xl font-bold py-7`}>
                <span className={`${styles.stroke_text}`}>Yash </span>
                Aggarwal
            </h1>
            <ul className={`flex space-x-4 list-none font-mono font-semibold py-4`}>
                <li className={`list-none`}>
                    <Link href="https://www.linkedin.com/in/yash-aggarwal-ashx010/" target={'_blank'}>LinkedIN</Link>
                </li>
                <li className={`list-none`}>
                    <Link href="https://github.com/ashx010/" target={'_blank'}>GitHub</Link>
                </li>
                <li className={`list-none`}>
                    <Link href="/Yash%20Aggarwal%20Resume.pdf" target={'_blank'}>Resume</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;