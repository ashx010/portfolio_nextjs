"use client";
import React, {useState} from 'react';
import styles from './portfolio.module.css';
import {KanitFont} from "@/app/fonts"
import Image from "next/image";

function Portfolio(props) {
    const data = [
        {
            src: "/car_prevent.jpg",
            alt: "project_1",
            type: "dataScience",
            name: "Data Science",
            pro_name: "Car Accident Prevention Alert using AI",
            link_name: "https://github.com/ashx010/Night-Time-Car-Accident-Prevention",
        },
        {
            src: "/map.svg",
            alt: "project_2",
            type: "webDevelop",
            name: "Web development",
            pro_name: "Mapping Interactive",
            link_name: "https://github.com/ashx010/Mapping-Application",
        },
        {
            src: "/tcart.svg",
            alt: "project_3",
            type: "webDevelop",
            name: "Web development",
            pro_name: "TCART: Travel Assistant",
            link_name: "https://tcart.scripet.com",
        },
        {
            src: "/titanic.jpg",
            alt: "project_4",
            type: "dataScience",
            name: "Data Science",
            pro_name: "Titanic: Survival Analysis",
            link_name: "https://www.kaggle.com/code/ashx010/titanic-data-analysis-and-model-deployment",
        }
    ];
    const [portType, setPortType] = useState(["webDevelop", "dataScience"]);
    const handleTogglePort = (choice) => {
        if (choice === "webDevelop") {
            setPortType(["webDevelop"]);
        }else if (choice === "dataScience") {
            setPortType(["dataScience"]);
        }else if (choice === "showAll") {
            setPortType(["webDevelop", "dataScience"]);
        }
    }
    return (
        <div id="portfolio" className={`${styles.port_container} px-4 py-6 lg:px-10 lg:py-12 space-y-4`}>
            <h3 className={`font-mono font-medium uppercase text-lg tracking-wider relative pt-4 mb-5 dark:text-white before:content-['#'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:${KanitFont.variable} after:font-[kanit] after:font-bold after:uppercase after:text-4xl after:opacity-15`} data-backdrop-text={"Portfolio"}>
                Portfolio
            </h3>
            <h1 className={`text-2xl lg:text-3xl ${KanitFont.variable} font-[kanit] font-black tracking-wider`}>
                My Latest Works
            </h1>
            <div className={`pt-2 lg:pt-6 flex lg:space-x-4 lg:space-y-0 space-y-4 lg:flex-row flex-col w-fit justify-start lg:items-center`}>
                <div onClick={() => handleTogglePort("showAll")} className={`cursor-pointer border border-dashed rounded-xl px-3 py-1  tracking-wider font-mono ${portType.length === 2 ? "text-white/90 border-white/90" : "text-white/40 border-white/40"} hover:text-white/80`}>Show All</div>
                <div onClick={() => handleTogglePort("webDevelop")} className={`cursor-pointer border border-dashed rounded-xl  px-3 py-1  tracking-wider font-mono ${portType.length === 1 && portType.includes("webDevelop") ? "text-white/90 border-white/90" : "text-white/40 border-white/40"} hover:text-white/80`}>Web Development</div>
                <div onClick={() => handleTogglePort("dataScience")} className={`cursor-pointer border border-dashed rounded-xl  px-3 py-1 tracking-wider font-mono ${portType.length === 1 && portType.includes("dataScience") ? "text-white/90 border-white/90" : "text-white/40 border-white/40"} hover:text-white/80`}>Data Science : ML</div>
            </div>
            <div className={`pt-3 lg:pt-6 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 justify-items-center`}>
                {data.map((item, index) => (
                    portType.includes(item.type) ? (
                        <div key={index}
                             className={`group p-4 w-full h-fit overflow-hidden relative aspect-square rounded-2xl`}>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill={true}
                                className={`group-hover:blur-[1.5px] group-hover:scale-105 group-hover:brightness-50`}
                                sizes="50vw"
                                style={{objectFit: "cover", objectPosition: "center", borderRadius: "1rem"}}
                                priority={true}
                            />
                            <span
                                className="z-[1] absolute top-4 right-4 bg-black/20 px-4 py-2 rounded-full backdrop-blur-[5px] text-white font-mono font-normal text-sm uppercase tracking-[0.5px]">
                                {item.name}
                            </span>
                            <div
                                className="z-[1] absolute bottom-0 left-0 w-full px-7 pb-6 invisible opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 group-hover:mb-0 transition ease-out duration-[160ms]">
                                <a className={`${KanitFont.variable} font-[kanit] font-semibold text-xl lg:text-3xl tracking-[0.5px] transition-all ease-linear duration-100`}
                                   href={`${item.link_name}`} target={"_blank"}>{item.pro_name}</a>
                            </div>
                        </div>) : null
                ))}
            </div>
        </div>
    );
}

export default Portfolio;