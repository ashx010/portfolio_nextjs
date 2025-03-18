import React from 'react';
import styles from './skills.module.css';
import {
    JavaLineSVG,
    LogoJavascriptSVG,
    NextjsFillSVG, Postgresql,
    PythonSVG,
    ReactjsFillSVG,
    Sqldeveloper
} from "@/components/svg.jsx"
import {KanitFont} from "@/app/fonts";

function Skills(props) {
    return (
        <div id="portfolio" className={`w-full rounded-[15px] bg-[#1C1E20FF] px-4 py-6 lg:px-10 lg:py-12 space-y-4`}>
            <h3 className={`font-mono font-medium uppercase text-lg tracking-wider relative pt-4 mb-5 dark:text-white before:content-['#'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15`} data-backdrop-text={"Skills"}>
                Skills
            </h3>
            <div className={`w-full pt-8 pl-10 lg:pl-4 flex flex-wrap flex-auto gap-y-12 gap-x-14`}>
                <h2 className={`${KanitFont.variable} font-[kanit] font-semibold uppercase relative tracking-wider text-base lg:text-xl text-white/80 hover:text-white`}>
                    Python
                    <PythonSVG className="absolute top-[-1rem] left-[-2rem] opacity-20" />
                </h2>
                <h2 className={`${KanitFont.variable} font-[kanit] font-semibold uppercase relative tracking-wider text-base lg:text-xl text-white/80 hover:text-white`}>
                    Java
                    <JavaLineSVG className="absolute top-[-1rem] left-[-2rem] opacity-20" />
                </h2>
                <h2 className={`${KanitFont.variable} font-[kanit] font-semibold uppercase relative tracking-wider text-base lg:text-xl text-white/80 hover:text-white`}>
                    SQL
                    <Sqldeveloper className="absolute top-[-1rem] left-[-2rem] opacity-20" />
                </h2>
                <h2 className={`${KanitFont.variable} font-[kanit] font-semibold uppercase relative tracking-wider text-base lg:text-xl text-white/80 hover:text-white`}>
                    JavaScript
                    <LogoJavascriptSVG className="absolute top-[-1rem] left-[-2rem] opacity-20" />
                </h2>
                <h2 className={`${KanitFont.variable} font-[kanit] font-semibold uppercase relative tracking-wider text-base lg:text-xl text-white/80 hover:text-white`}>
                    PostgreSQL
                    <Postgresql className="absolute top-[-1rem] left-[-2rem] opacity-20" />
                </h2>
                <h2 className={`${KanitFont.variable} font-[kanit] font-semibold uppercase relative tracking-wider text-base lg:text-xl text-white/80 hover:text-white`}>
                    Next.js
                    <NextjsFillSVG className="absolute top-[-1rem] left-[-2rem] opacity-20" />
                </h2>
                <h2 className={`${KanitFont.variable} font-[kanit] font-semibold uppercase relative tracking-wider text-base lg:text-xl text-white/80 hover:text-white`}>
                    React
                    <ReactjsFillSVG className="absolute top-[-1rem] left-[-2rem] opacity-20" />
                </h2>
            </div>

        </div>
    );
}

export default Skills;