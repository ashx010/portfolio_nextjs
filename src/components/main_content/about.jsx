import React from 'react';
import styles from './main_content.module.css';
import Image from 'next/image';
import Typewriter from "@/components/main_content/Typewriter";
import {KanitFont} from "@/app/fonts"

function About(props) {
    return (
        <div id="about" className={`${styles.about_container} px-10 py-12 flex justify-between flex-row space-x-4`}>
            <div className={`${styles.image_container} relative`}>
                <Image
                    src="/pf-1.png"
                    alt="profile picture"
                    fill={true}
                    sizes="25vw"
                    style={{objectFit: "cover", objectPosition: "center", borderRadius: "50%", filter: "drop-shadow(0px 0px 50px #000)"}}
                    priority={true}
                />
                <div className={`${styles.profileFoot}`}>
                    <span className={`font-mono uppercase font-normal tracking-wider`}>
                        <Typewriter words={["Hi, There!", "I'm Yash _"]} delay={1000} typingSpeed={50} deletingSpeed={20} />
                    </span>
                </div>
            </div>
            <div className={`${styles.about_info_container} space-y-4`}>
                <h3 className={`font-mono font-medium uppercase text-lg tracking-wider relative pt-4 mb-5 dark:text-white before:content-['#'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15`} data-backdrop-text={"About Me"}>
                    About Me
                </h3>
                <h2 className={`text-3xl tracking-widest font-semibold ${KanitFont.variable} font-[kanit] ${styles.about_head_container}`}>
                    Software Engineer.<br/>
                    Full Stack Developer.<br/>
                    Data Science Enthusiast<br/>
                </h2>
                <div className={`space-x-2 flex flex-row space-between`}>
                    <div className={`border border-dashed rounded-xl border-white/40 px-3 py-1 text-white/40 tracking-wider uppercase font-mono hover:text-white/80`}><span className={`font-thin text-sm tracking-tighter`}>{"</>"}</span> Python</div>
                    <div className={`border border-dashed rounded-xl border-white/40 px-3 py-1 text-white/40 tracking-wider uppercase font-mono hover:text-white/80`}><span className={`font-thin text-sm tracking-tighter`}>{"</>"}</span> SQL</div>
                    <div className={`border border-dashed rounded-xl border-white/40 px-3 py-1 text-white/40 tracking-wider uppercase font-mono hover:text-white/80`}><span className={`font-thin text-sm tracking-tighter`}>{"</>"}</span> Java</div>
                    <div className={`border border-dashed rounded-xl border-white/40 px-3 py-1 text-white/40 tracking-wider uppercase font-mono hover:text-white/80`}><span className={`font-thin text-sm tracking-tighter`}>{"</>"}</span> Javascript</div>
                </div>
                <p className={`tracking-wide font-mono text-white/70 font-normal`}>
                    Computer Science graduate with experience in web development and data science. Driven by curiosity and a knack for
                    problem-solving.
                </p>
            </div>
        </div>
    );
}

export default About;