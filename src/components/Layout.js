import React from 'react';
import Navbar from '../modules/shared/Navbar/Navbar';
// import styles from "./Layout.module.scss";

function AppLayout({ children }) {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
        </div>
    )
}

export default AppLayout;