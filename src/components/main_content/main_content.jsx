import React from 'react';
import styles from './main_content.module.css';
import Sidebar from './sidebar';

function MainContent(props) {
    return (
        <main className={`space-y-6 lg:space-y-0 lg:space-x-8 lg:flex xl:space-x-12 top-2`}>
            <Sidebar />
            <div className={""}>

            </div>
        </main>
    );
}

export default MainContent;