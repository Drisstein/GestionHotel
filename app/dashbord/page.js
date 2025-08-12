'use client';

import DashboardLayout from '../components/layout/DashboardLayout';
import Link from 'next/link';
import { Hotel, Calendar, MessageSquare } from 'lucide-react';

export default function Dashboard() {
  const quickActions = [
    { title: 'Gérer les Hôtels', href: '/hotels', icon: Hotel },
    { title: 'Réservations', href: '/reservations', icon: Calendar },
    { title: 'Commentaires', href: '/commentaires', icon: MessageSquare },
  ];

  return (
    <DashboardLayout title="Dashboard">
      <div style={{ padding: '20px' }}>
        <h2>Actions rapides</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          marginTop: '20px' 
        }}>
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.href} href={action.href}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}>
                  <Icon size={32} style={{ marginBottom: '10px' }} />
                  <h3>{action.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}