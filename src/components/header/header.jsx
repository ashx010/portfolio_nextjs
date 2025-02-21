import React from 'react';
import styles from './header.module.css';
import Link from "next/link";
import {KanitFont} from "@/app/fonts"

function Header(props) {
    return (
        <header className={`${styles.header} flex justify-between`}>
            <h1 className={`${KanitFont.variable} font-[kanit] tracking-wider text-5xl xl:text-7xl font-semibold py-6 px-2`}>
                Yash
                <span className={`${styles.stroke_text}`}> Aggarwal</span>
            </h1>
            <ul className={`flex space-x-3 list-none font-mono tracking-tight py-4 px-2`}>
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