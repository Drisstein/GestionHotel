'use client';

import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ children, title = "Dashboard" }) => {
    const styles = {
        container: {
            display: 'flex',
            minHeight: '100vh',
            backgroundColor: '#f5f5f5',
            fontFamily: 'Arial, sans-serif'
        },
        mainContent: {
            marginLeft: '250px',
            flex: 1,
            minHeight: '100vh'
        }
    };

    return (
        <div style={styles.container}>
            <Sidebar />
            <div style={styles.mainContent}>
                <Header title={title} />
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;