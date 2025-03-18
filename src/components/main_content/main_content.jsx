import React from 'react';
import Sidebar from './sidebar';
import About from "./about";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Skills from "./skills";

function MainContent(props) {
    return (
        <main className={`space-y-6 lg:space-y-0 lg:space-x-8 lg:flex xl:space-x-12 top-2`}>
            <Sidebar />
            <div className={`space-y-6 w-full lg:w-3/4 pb-12`}>
                <About />
                <Portfolio />
                <Resume />
                <Skills />
            </div>
        </main>
    );
}

export default MainContent;