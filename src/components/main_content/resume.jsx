import React from 'react';
import styles from "./resume.module.css";
import {KanitFont} from "@/app/fonts";


function Resume(props) {
    const data = [
        {
            sTime: "2020-2024",
            course: "Bachelors Of Technology",
            special: "Computer Science Engineering",
            name: "Guru Gobindh Singh Indraprastha University",
            grade: "8.86 CGPA"
        },
        {
            sTime: "2019-2020",
            course: "Class 12",
            special: "Science : PCM",
            name: "St. Lawrence Convent",
        },
        {
            sTime: "2017-2018",
            course: "Class 10",
            name: "St. Lawrence Convent",
        }
    ]
    return (
        <div id="portfolio" className={`${styles.res_container} px-10 py-12 space-y-4`}>
            <h3 className={`font-mono font-medium uppercase text-lg tracking-wider relative pt-4 mb-5 dark:text-white before:content-['#'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15`} data-backdrop-text={"Resume"}>
                Resume
            </h3>
            <h1 className={`text-3xl ${KanitFont.variable} font-[kanit] font-black tracking-wider`}>
                Education & Experience
            </h1>
            <div className={`grid grid-cols-1 pt-6 md:grid-cols-2 gap-6 justify-start items-center`}>
                <div className={`relative space-y-6 py-6 px-4 ${styles.res_cont2}`}>
                    <div className={`text-3xl stroke-2 stroke-white`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-9">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
                        </svg>
                    </div>
                    {
                        data.map((item, index) => (
                            <div className="group pt-2">
                                <span className="relative inline-block px-4 py-2 rounded-full border border-black/20 dark:border-white/20 border-dashed font-mono font-medium uppercase text-sm tracking-[0.5px] text-pColor dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition ease-linear duration-100 before:content-[''] before:absolute before:top-1/2 before:left-[-20px] before:w-[20px] before:h-[1px] before:border-t before:border-black/20 dark:before:border-white/20 before:border-dashed after:content-[''] after:absolute after:top-1/2 after:left-[-22px] after:-translate-y-1/2 after:bg-black dark:after:bg-white after:w-[5px] after:h-[5px] after:rounded-full">
                                    {item.sTime}
                                </span>
                                <h4 className={`${KanitFont.variable} whitespace-nowrap overflow-hidden text-ellipsis font-[kanit] font-medium text-xl mt-2 lg:mt-3 text-white`}>
                                    {item.course}
                                </h4>
                                {item.special ? (
                                    <>
                                        <h4 className={`${KanitFont.variable} whitespace-nowrap overflow-hidden text-ellipsis font-[kanit] font-medium text-md mb-2 ml-3 text-white/75`}>
                                            {item.special}
                                        </h4>
                                    </>
                                ) : null}
                                <h4 className="text-white/70 whitespace-nowrap overflow-hidden text-ellipsis">@{item.name}</h4>
                                {item.grade ? (
                                    <>
                                        <h4 className="ml-2 font-sm text-white/70 ">{item.grade}</h4>
                                    </>
                                ) : null}
                            </div>
                        ))
                    }

                </div>

                <div className={`relative py-6 px-4 ${styles.res_cont2}`}>
                    <div className={`text-3xl stroke-2 stroke-white`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-9">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;