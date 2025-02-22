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
                    <Link href="/">LinkedIN</Link>
                </li>
                <li className={`list-none`}>
                    <Link href="/">GitHub</Link>
                </li>
                <li className={`list-none`}>
                    <Link href="/">Resume</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;