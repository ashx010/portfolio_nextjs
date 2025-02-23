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
                    src="/profileImg.jpeg"
                    alt="profile picture"
                    fill={true}
                    sizes="25vw"
                    style={{objectFit: "cover", objectPosition: "center", borderRadius: "50%"}}
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
            </div>
        </div>
    );
}

export default About;