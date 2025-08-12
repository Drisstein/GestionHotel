'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, LayoutDashboard, CalendarCheck, MessageCircle, Hotel } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/dashboard', icon: LayoutDashboard, label: 'General' },
    { href: '/hotels', icon: Hotel, label: 'Hôtels' },
    { href: '/reservations', icon: CalendarCheck, label: 'Réservations' },
    { href: '/commentaires', icon: MessageCircle, label: 'Commentaires' },
  ];

  const styles = {
    sidebar: {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '250px',
      height: '100vh',
      backgroundColor: '#4a5568',
      color: 'white',
      padding: '20px',
      zIndex: 10
    },
    sidebarHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '24px'
    },
    sidebarTitle: {
      fontSize: '18px',
      fontWeight: '500'
    },
    sidebarNav: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    sidebarItem: {
      marginBottom: '12px'
    },
    sidebarLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      color: '#cbd5e0',
      textDecoration: 'none',
      fontSize: '14px',
      borderRadius: '6px',
      transition: 'all 0.2s'
    },
    sidebarLinkActive: {
      backgroundColor: '#2d3748',
      color: 'white',
      fontWeight: 'bold'
    }
  };

  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarHeader}>
        <Building2 size={20} />
        <h3 style={styles.sidebarTitle}>RED PRODUCT</h3>
      </div>
      
      <nav>
        <ul style={styles.sidebarNav}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <li key={item.href} style={styles.sidebarItem}>
                <Link 
                  href={item.href}
                  style={{
                    ...styles.sidebarLink,
                    ...(isActive ? styles.sidebarLinkActive : {})
                  }}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;