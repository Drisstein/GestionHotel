'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Search, Bell, LogOut } from 'lucide-react';

const Header = ({ title = "Dashboard" }) => {
    const router = useRouter();

    const styles = {
        header: {
            backgroundColor: 'white',
            borderBottom: '1px solid #e5e7eb',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        },
        title: {
            margin: 0,
            color: '#1f2937',
            fontSize: '24px',
            fontWeight: '600'
        },
        rightSection: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        },
        searchContainer: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
        },
        searchInput: {
            padding: '8px 16px 8px 40px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px',
            width: '280px',
            outline: 'none',
            backgroundColor: '#f9fafb',
            color: '#6b7280'
        },
        searchIcon: {
            position: 'absolute',
            left: '12px',
            color: '#9ca3af',
            zIndex: 1
        },
        iconButton: {
            padding: '8px',
            border: 'none',
            backgroundColor: 'transparent',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s'
        },
        notificationBadge: {
            position: 'relative'
        },
        badge: {
            position: 'absolute',
            top: '-4px',
            right: '-4px',
            backgroundColor: '#ef4444',
            color: 'white',
            borderRadius: '50%',
            width: '8px',
            height: '8px',
            fontSize: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
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
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'transform 0.2s'
        }
    };

    // Fonction de déconnexion
    const handleLogout = () => {
    // Supprime tout ce qui garde l’utilisateur connecté
    localStorage.removeItem("token"); 
    sessionStorage.removeItem("token");

    // Si tu utilises des cookies, pense à les vider aussi côté serveur

    // Redirige vers la page de connexion
    router.push('/page');
};

    return (
        <header style={styles.header}>
            <h1 style={styles.title}>{title}</h1>

            <div style={styles.rightSection}>
                {/* Search Bar */}
                <div style={styles.searchContainer}>
                    <Search size={18} style={styles.searchIcon} />
                    <input 
                        type="text" 
                        placeholder="Rechercher..."
                        style={styles.searchInput}
                        onFocus={(e) => {
                            e.target.style.borderColor = '#3b82f6';
                            e.target.style.backgroundColor = 'white';
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = '#d1d5db';
                            e.target.style.backgroundColor = '#f9fafb';
                        }}
                    />
                </div>

                {/* Notifications */}
                <button 
                    style={styles.iconButton}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    <div style={styles.notificationBadge}>
                        <Bell size={20} color="#6b7280" />
                        <span style={styles.badge}></span>
                    </div>
                </button>

                {/* User Avatar */}
                <div 
                    style={styles.userAvatar}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    GD
                </div>

                {/* Logout */}
                <button 
                    style={styles.iconButton}
                    onClick={handleLogout}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#fef2f2'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    <LogOut size={20} color="#6b7280" />
                </button>
            </div>
        </header>
    );
};

export default Header;
