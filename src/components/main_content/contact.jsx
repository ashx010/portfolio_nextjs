import React from 'react';
import {KanitFont} from "@/app/fonts";

function Contact(props) {
    return (
        <div id="portfolio" className={`w-full rounded-[15px] bg-[#1C1E20FF] px-4 py-6 lg:px-10 lg:py-12 space-y-4`}>
            <h3 className={`font-mono font-medium uppercase text-lg tracking-wider relative pt-4 mb-5 dark:text-white before:content-['#'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15`}
                data-backdrop-text={"Contact"}>
                Contact
            </h3>
            <h1 className={`text-2xl lg:text-3xl ${KanitFont.variable} font-[kanit] font-black tracking-wider`}>
                Let's Connect
            </h1>
            <div
                className={`pt-2 text-sm lg:text-base lg:pt-6 flex flex-wrap flex-auto gap-x-6 gap-y-4 w-fit`}>
                <div
                    className={`cursor-default border border-dashed border-white/40 text-white/60 rounded-2xl px-4 py-2  tracking-wider font-mono hover:text-white/80`}>
                    Phone: +91 9711029829
                </div>
                <div
                    className={`cursor-default border border-dashed border-white/40 text-white/60 rounded-2xl  px-4 py-2  tracking-wider font-mono hover:text-white/80`}>
                    Email: yashaggarwal960@gmail.com
                </div>
                <div
                    className={`cursor-default border border-dashed border-white/40 text-white/60 rounded-2xl  px-4 py-2  tracking-wider font-mono hover:text-white/80`}>
                    Address: Delhi, India
                </div>
            </div>
        </div>
    );
}

export default Contact;