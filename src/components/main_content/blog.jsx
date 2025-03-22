import React from 'react';
import {KanitFont} from "@/app/fonts";
import Image from "next/image";

function Blog(props) {
    const data = [
        {
            name: "HOW TO add Database to Next.js 14+ using Prisma",
            link: "https://medium.com/@scripet/2763cb4ec8d0",
            imgLink: "/post1.jpg",
            date: "Sep 20,2024",
            type: "Web Development"
        },
        {
            name: "Vs Code Secrets: Pro Developers’ TOP Shortcuts and Extensions Revealed!",
            link: "https://medium.com/@scripet/2d6099dd3478",
            imgLink: "/post2.jpg",
            date: "Sep 14,2024",
            type: "Productivity"
        },
        {
            name: "HOW TO set up Authentication in Next.js 14+ with Auth.js: A Step-by-Step Guide.",
            link: "https://medium.com/@scripet/b746203481d7",
            imgLink: "/post3.jpg",
            date: "Sep 7,2024",
            type: "Web Development"
        },
        {
            name: "HOW TO deploy Django project using Nginx and Gunicorn: A Step-by-Step Guide.",
            link: "https://medium.com/@scripet/69eee0f830d0",
            imgLink: "/post4.jpg",
            date: "Sep 2,2024",
            type: "Backend Development"
        },
    ]
    return (
        <div id="portfolio" className={`w-full rounded-[15px] bg-[#1C1E20FF] px-4 py-6 lg:px-10 lg:py-12 space-y-4`}>
            <h3 className={`font-mono font-medium uppercase text-lg tracking-wider relative pt-4 mb-5 dark:text-white before:content-['#'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15`} data-backdrop-text={"Blog"}>
                Blog
            </h3>
            <h1 className={`text-2xl lg:text-3xl ${KanitFont.variable} font-[kanit] font-black tracking-wider`}>
                Latest Blog Posts
            </h1>
            <div className={`w-full pt-3 lg:pt-6 space-y-6 flex flex-col justify-start items-start`}>
                {data
                    .slice(0, 4)
                    .map((post, index) => (
                    <div key={index} className={`w-full flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 justify-start content-center`}>
                        <div className={`w-full lg:w-2/5 rounded-[8px] relative aspect-video overflow-hidden h-fit`}>
                            <Image
                                src={post.imgLink}
                                alt={"Post Image"}
                                className={`rounded-[8px] object-cover object-center brightness-[0.8]`}
                                fill={true}
                                sizes="50vw"
                                priority={true}
                            />
                            <span
                                className="z-[1] absolute top-4 left-4 bg-black/20 px-4 py-2 rounded-full backdrop-blur-[5px] text-white font-mono font-normal text-sm uppercase tracking-[0.5px]">
                                {post.type}
                            </span>
                        </div>
                        <div className={`w-full lg:w-3/5 flex flex-col space-y-4 justify-start`}>
                            <h3 className={`font-mono font-medium capitalize text-base tracking-wide pt-2 text-white/75`}>
                                Posted on {post.date}
                            </h3>
                            <h2 className={`${KanitFont.variable} font-[kanit] font-bold text-lg lg:text-xl tracking-wider text-white`}>
                                {post.name}
                            </h2>
                            <a href={post.link} target={"_blank"} className={`text-base lg:text-lg rounded-2xl text-white/80 w-fit pr-6 pl-4 py-2 border-2 border-dotted border-white/75 hover:text-white`}>
                                Continue..
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;