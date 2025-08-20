'use client';

import React, { useState } from 'react';
import { LayoutDashboard, Building2 } from 'lucide-react';

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState('dashboard');

    const styles = {
        sidebar: {
            width: '250px',
            height: '100vh',
            backgroundColor: 'rgba(61, 61, 61, 1)',
            position: 'fixed',
            left: 0,
            top: 0,
            boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
        },
        logo: {
          padding: '24px 20px',
          width: '200px',
            borderBottom: '1px solid #475569'
        },
        logoContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        },
        logoImg: {
            height: '32px',
            width: '200px'
        },
        logoText: {
            fontSize: '16px',
            fontWeight: '600',
            margin: 0,
            color: 'white'
        },
        nav: {
            padding: '20px 0',
            flex: 1
        },
        menuItem: {
            display: 'flex',
            alignItems: 'center',
            padding: '12px 20px',
            margin: '4px 0',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: '#cbd5e1',
            fontSize: '14px',
            fontWeight: '500'
        },
        menuItemActive: {
            backgroundColor: 'rgba(61, 61, 61, 1)',
            color: 'white',
            borderRight: '3px solid #3b82f6'
        },
        menuItemHover: {
            backgroundColor: '#475569',
            color: 'white'
        },
        menuIcon: {
            marginRight: '12px',
            minWidth: '20px'
        },
        userProfile: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '16px 20px',
            borderTop: '1px solid #475569',
            // backgroundColor: '#64748b'
        },
        userContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
        },
        userAvatar: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#3b82f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '16px',
            fontWeight: '600',
            position: 'relative'
        },
        onlineIndicator: {
            position: 'absolute',
            bottom: '2px',
            right: '2px',
            width: '12px',
            height: '12px',
            backgroundColor: '#22c55e',
            border: '2px solid #ffffffff',
            borderRadius: '50%'
        },
        userInfo: {
            flex: 1
        },
        userName: {
            fontSize: '14px',
            fontWeight: '600',
            color: 'white',
            margin: 0,
            marginBottom: '2px'
        },
        userStatus: {
            fontSize: '12px',
            color: '#cbd5e1',
            margin: 0
        }
    };

    const menuItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: LayoutDashboard
        },
        {
            id: 'hotels',
            label: 'Liste des hôtels',
            icon: Building2
        }
    ];

    const handleMenuClick = (menuId) => {
        setActiveMenu(menuId);
        // Ici vous pouvez ajouter la navigation
        if (menuId === 'dashboard') {
            // router.push('/dashboard')
            console.log('Navigate to dashboard');
        } else if (menuId === 'hotels') {
            // router.push('/hotels')
            console.log('Navigate to hotels');
        }
    };

    return (
        <div style={styles.sidebar}>
            {/* Logo Section */}
            <div style={styles.logo}>
                <div style={styles.logoContainer}>
                    <img 
                        src="/logoRD.svg" 
                        alt="Logo RED" 
                        style={styles.logoImg}
                    />
                </div>
            </div>
            
            {/* Navigation */}
            <nav style={styles.nav}>
                {menuItems.map(item => {
                    const Icon = item.icon;
                    const isActive = activeMenu === item.id;
                    
                    return (
                        <div 
                            key={item.id}
                            style={{
                                ...styles.menuItem,
                                ...(isActive ? styles.menuItemActive : {})
                            }}
                            onClick={() => handleMenuClick(item.id)}
                            onMouseEnter={(e) => {
                                if (!isActive) {
                                    e.target.style.backgroundColor = '#ffffffff';
                                    e.target.style.color = 'rgba(61, 61, 61, 1)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive) {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.color = '#ffffffff';
                                }
                            }}
                        >
                            <Icon size={20} style={styles.menuIcon} />
                            {item.label}
                        </div>
                    );
                })}
            </nav>

            {/* User Profile Section */}
            <div style={styles.userProfile}>
                <div style={styles.userContainer}>
                    <div style={styles.userAvatar}>
                        GD
                        <div style={styles.onlineIndicator}></div>
                    </div>
                    <div style={styles.userInfo}>
                        <p style={styles.userName}>Admin</p>
                        <p style={styles.userStatus}>En ligne</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;