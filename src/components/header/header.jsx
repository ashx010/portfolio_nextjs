import React from 'react';
import styles from './header.module.css';
import Link from "next/link";
import {KanitFont} from "@/app/fonts"

function Header(props) {
    return (
        <header className={`${styles.header} lg:flex lg:justify-between pb-4`}>
            <h1 className={`${KanitFont.variable} font-[kanit] tracking-wider text-5xl xl:text-7xl font-bold py-7`}>
                <span className={`${styles.stroke_text}`}>Yash </span>
                Aggarwal
            </h1>
            <ul className={`flex space-x-4 list-none font-mono font-semibold py-4`}>
                <li className={`list-none`}>
                    <Link href="https://www.linkedin.com/in/yash-aggarwal-ashx010/" target={'_blank'}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="2em" height="2em" viewBox="0 0 48 48">
                            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                        </svg>
                    </Link>
                </li>
                <li className={`list-none`}>
                    <Link href="https://github.com/ashx010/" target={'_blank'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="2em"
                            height="2em"
                            {...props}
                        >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </Link>
                </li>
                <li className={`list-none`}>
                    <Link href="https://www.kaggle.com/ashx010" target={'_blank'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 128"
                            width="2em"
                            height="2em"
                            {...props}
                        >
                            <path
                                fill="#20beff"
                                d="M100.402 127.243c-.126.501-.627.752-1.502.752H82.168c-1.007 0-1.876-.438-2.632-1.317L51.91 91.531l-7.706 7.33v27.258c0 1.255-.628 1.881-1.88 1.881h-12.97c-1.254 0-1.88-.626-1.88-1.88V1.876c0-1.25.625-1.877 1.88-1.877h12.97c1.253 0 1.882.628 1.882 1.876v76.501l33.08-33.457c.878-.875 1.755-1.315 2.631-1.315h17.295c.75 0 1.25.315 1.504.937c.252.753.19 1.316-.19 1.693L63.561 80.062l36.465 45.3c.499.502.625 1.128.38 1.881"
                            ></path>
                        </svg>
                    </Link>
                </li>
                <li className={`list-none`}>
                    <Link href="/Yash%20Aggarwal%20Resume.pdf" target={'_blank'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="2em"
                            height="2em"
                            {...props}
                        >
                            <path
                                fill="currentColor"
                                d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm98.88 133.234c19.636 0 37.082 6.789 49.929 16.971c11.88 9.452 17.444 18.907 22.298 27.393l-33.923 16.949c-2.427-5.565-5.347-11.387-12.846-17.682c-8.248-6.552-16.478-8.484-23.524-8.484c-27.626 0-42.17 25.693-42.17 54.287c0 37.573 19.161 56.22 42.17 56.22c22.3 0 31.278-15.51 37.08-25.435L219.6 302.66c-6.315 9.926-12.374 19.635-25.95 29.069c-7.262 5.09-23.977 15.037-47.736 15.037C100.586 346.766 64 313.81 64 255.87c0-50.636 34.415-90.637 82.88-90.637m75.483 5.328h45.565L303.31 292.24l35.125-121.678H384l-59.379 171.112H281.01z"
                            ></path>
                        </svg>
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
