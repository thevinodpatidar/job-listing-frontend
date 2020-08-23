import React from 'react';
import Navbar from '../modules/shared/Navbar/Navbar';

function AppLayout({ children }) {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
        </div>
    )
}

export default AppLayout;