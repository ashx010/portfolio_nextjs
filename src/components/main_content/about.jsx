import React from 'react';
import styles from './main_content.module.css';
import Image from 'next/image';

function About(props) {
    return (
        <div id="about" className={`${styles.about_container} px-10 py-12 flex justify-between flex-row`}>
            <div className={`${styles.image_container} relative`}>
                <Image
                    src="/profileImg.jpeg"
                    alt="profile picture"
                    fill={true}
                    sizes="25vw"
                    style={{objectFit: "cover", objectPosition: "center", borderRadius: "50%"}}
                    priority={true}
                />
            </div>
        </div>
    );
}

export default About;