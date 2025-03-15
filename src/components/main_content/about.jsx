import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';
import Typewriter from "@/components/main_content/Typewriter";
import {KanitFont} from "@/app/fonts"

function About(props) {
    return (
        <div id="about" className={`${styles.about_container} px-4 lg:px-10 py-6 lg:py-12 flex justify-between flex-col space-y-12 lg:space-y-0 lg:flex-row lg:space-x-4`}>
            <div className={`${styles.image_container} w-full lg:w-[30%] relative`}>
                <Image
                    src="/pf-1.png"
                    alt="profile picture"
                    fill={true}
                    sizes="50vw"
                    style={{objectFit: "cover", objectPosition: "center", borderRadius: "50%", filter: "drop-shadow(0px 0px 50px #000)"}}
                    priority={true}
                />
                <div className={`${styles.profileFoot}`}>
                    <span className={`font-mono uppercase font-normal tracking-wider`}>
                        <Typewriter words={["Hi, There!", "I'm Yash _"]} delay={1000} typingSpeed={50} deletingSpeed={20} />
                    </span>
                </div>
            </div>
            <div className={`w-full lg:w-[65%] space-y-4`}>
                <h3 className={`font-mono font-medium uppercase text-lg tracking-wider relative pt-4 mb-5 dark:text-white before:content-['#'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15`} data-backdrop-text={"About Me"}>
                    About Me
                </h3>
                <h2 className={`text-xl lg:text-3xl tracking-widest font-semibold ${KanitFont.variable} font-[kanit]`}>
                    Software Engineer.<br/>
                    Full Stack Developer.<br/>
                    Data Science Enthusiast<br/>
                </h2>
                <div className={`lg:space-x-2 space-y-2 lg:space-y-0 flex flex-col lg:flex-row space-between`}>
                    <div className={`whitespace-nowrap w-fit overflow-hidden flex items-center cursor-default border border-dashed rounded-xl border-white/40 px-3 py-1 text-white/40 tracking-wider uppercase font-mono hover:text-white`}>
                        <span className={`mr-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                            </svg>
                        </span>
                        Python
                    </div>
                    <div className={`whitespace-nowrap w-fit overflow-hidden flex items-center cursor-default border border-dashed rounded-xl border-white/40 px-3 py-1 text-white/40 tracking-wider uppercase font-mono hover:text-white`}>
                        <span className={`mr-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                            </svg>
                        </span>
                        Java
                    </div>
                    <div className={`whitespace-nowrap w-fit  overflow-hidden flex items-center cursor-default border border-dashed rounded-xl border-white/40 px-3 py-1 text-white/40 tracking-wider uppercase font-mono hover:text-white`}>
                        <span className={`mr-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                            </svg>
                        </span>
                        SQL
                    </div>
                    <div className={`whitespace-nowrap w-fit  overflow-hidden flex items-center cursor-default border border-dashed rounded-xl border-white/40 px-3 py-1 text-white/40 tracking-wider uppercase font-mono hover:text-white`}>
                        <span className={`mr-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                            </svg>
                        </span>
                        JavaScript
                    </div>
                </div>
                <p className={`text-sm lg:text-base tracking-wide font-mono text-white/70 font-normal`}>
                    Computer Science graduate with experience in web development and data science. Driven by curiosity and a knack for
                    problem-solving.
                </p>
            </div>
        </div>
    );
}

export default About;