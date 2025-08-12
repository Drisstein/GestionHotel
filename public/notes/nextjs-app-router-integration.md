# Intégration Page Hôtels - Next.js App Router

## 📁 Structure actuelle analysée

Votre projet utilise **Next.js 13+ avec App Router** - c'est excellent ! Voici les améliorations et l'intégration de la page hôtels.

## 🔧 Améliorations recommandées pour l'arborescence

```
RED-PRODUCT-DRISS/
├── .next/
├── actions/
├── app/
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.js
│   │   └── signup/
│   │       └── page.js
│   ├── dashboard/
│   │   └── page.js
│   ├── hotels/                    # ✨ NOUVEAU
│   │   ├── page.js               # Page principale des hôtels
│   │   ├── [id]/                 # Routes dynamiques
│   │   │   └── page.js           # Détail d'un hôtel
│   │   └── loading.js            # Loading UI
│   ├── reservations/             # ✨ NOUVEAU
│   │   └── page.js
│   ├── commentaires/             # ✨ NOUVEAU
│   │   └── page.js
│   ├── components/               # ✨ À CRÉER
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Header.jsx
│   │   │   └── DashboardLayout.jsx
│   │   ├── hotel/
│   │   │   ├── HotelCard.jsx
│   │   │   ├── HotelGrid.jsx
│   │   │   └── HotelModal.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       └── Modal.jsx
│   ├── lib/                      # ✨ À CRÉER
│   │   ├── utils.js
│   │   ├── constants.js
│   │   └── api.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
├── node_modules/
└── ui/
```

## 🚀 Étape 1: Créer les composants de layout

### 1.1 Layout principal pour le dashboard
**Fichier: `app/components/layout/DashboardLayout.jsx`**

```jsx
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
```

### 1.2 Composant Sidebar avec navigation Next.js
**Fichier: `app/components/layout/Sidebar.jsx`**

```jsx
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
```

## 📄 Étape 2: Créer la page hôtels

### 2.1 Page principale des hôtels
**Fichier: `app/hotels/page.js`**

```jsx
'use client';

import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import HotelGrid from '../components/hotel/HotelGrid';
import HotelModal from '../components/hotel/HotelModal';
import { Plus, Home } from 'lucide-react';

// Données temporaires - à remplacer par une API
const hotelsData = [
  {
    id: 1,
    name: "Hotel Noom 50",
    location: "Dakar",
    rating: 4,
    price: "45 000 FCFA",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    name: "King Fahd Palace",
    location: "Dakar",
    rating: 5,
    price: "85 000 FCFA",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=200&fit=crop"
  },
  // ... autres hôtels
];

const HotelsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [hotels, setHotels] = useState(hotelsData);

  const styles = {
    subHeader: {
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #ddd',
      padding: '16px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    subHeaderTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333'
    },
    addButton: {
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'background-color 0.2s'
    },
    content: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    breadcrumb: {
      backgroundColor: 'white',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '16px 20px',
      marginBottom: '20px'
    },
    breadcrumbContent: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '12px',
      color: '#666'
    }
  };

  const handleAddHotel = (newHotel) => {
    const hotel = {
      ...newHotel,
      id: Date.now(), // ID temporaire
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop"
    };
    setHotels(prev => [...prev, hotel]);
    setShowModal(false);
  };

  return (
    <DashboardLayout title="Liste des hôtels">
      {/* Sub Header */}
      <div style={styles.subHeader}>
        <h2 style={styles.subHeaderTitle}>Hôtels</h2>
        <button 
          style={styles.addButton}
          onClick={() => setShowModal(true)}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
        >
          <Plus size={16} />
          Ajouter un nouvel hôtel
        </button>
      </div>

      {/* Content */}
      <main style={styles.content}>
        {/* Breadcrumb */}
        <div style={styles.breadcrumb}>
          <div style={styles.breadcrumbContent}>
            <Home size={14} style={{ marginRight: '8px' }} />
            Dakar &gt; Hôtels &gt; Rechercher Hotel
          </div>
        </div>

        {/* Hotels Grid */}
        <HotelGrid hotels={hotels} />
      </main>

      {/* Modal */}
      {showModal && (
        <HotelModal 
          onClose={() => setShowModal(false)} 
          onSubmit={handleAddHotel}
        />
      )}
    </DashboardLayout>
  );
};

export default HotelsPage;
```

### 2.2 Page de chargement
**Fichier: `app/hotels/loading.js`**

```jsx
export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}>
      </div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
```

## 🎨 Étape 3: Créer les composants hôtels

### 3.1 Composant HotelGrid
**Fichier: `app/components/hotel/HotelGrid.jsx`**

```jsx
'use client';

import React from 'react';
import HotelCard from './HotelCard';

const HotelGrid = ({ hotels }) => {
  const styles = {
    hotelsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px'
    }
  };

  return (
    <div style={styles.hotelsGrid}>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelGrid;
```

### 3.2 Composant HotelCard avec Next/Image
**Fichier: `app/components/hotel/HotelCard.jsx`**

```jsx
'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const HotelCard = ({ hotel }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        style={{
          fontSize: '14px',
          color: i < rating ? '#ffa500' : '#d1d5db'
        }}
      >
        ★
      </span>
    ));
  };

  const styles = {
    hotelCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer'
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: '200px'
    },
    hotelInfo: {
      padding: '15px'
    },
    hotelName: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: '#333'
    },
    hotelLocation: {
      color: '#666',
      fontSize: '14px',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    hotelRating: {
      display: 'flex',
      alignItems: 'center',
      gap: '2px',
      marginBottom: '10px'
    },
    hotelPrice: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#007bff',
      textAlign: 'right'
    }
  };

  return (
    <div 
      style={styles.hotelCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      }}
    >
      <div style={styles.imageContainer}>
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div style={styles.hotelInfo}>
        <h3 style={styles.hotelName}>{hotel.name}</h3>
        
        <div style={styles.hotelLocation}>
          <MapPin size={14} />
          {hotel.location}
        </div>
        
        <div style={styles.hotelRating}>
          {renderStars(hotel.rating)}
        </div>
        
        <div style={styles.hotelPrice}>
          {hotel.price}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
```

## 🔧 Étape 4: Mettre à jour la configuration

### 4.1 Configuration Next.js
**Fichier: `next.config.js` (racine du projet)**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
```

### 4.2 Mettre à jour les dépendances
**Ajoutez à votre `package.json`:**

```bash
npm install lucide-react
# ou
yarn add lucide-react
```

## 🚀 Étape 5: Navigation et intégration

### 5.1 Mettre à jour dashboard.js
**Fichier: `app/dashboard/page.js`**

```jsx
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
```

## ✅ Points de vérification

- [ ] Structure App Router respectée
- [ ] Composants modulaires créés
- [ ] Navigation avec Next/Link
- [ ] Images optimisées avec Next/Image
- [ ] Layout réutilisable
- [ ] Pages de chargement
- [ ] Configuration Next.js mise à jour

## 🎯 Prochaines étapes

1. **API Routes**: Créer `app/api/hotels/route.js`
2. **Base de données**: Connecter Prisma/MongoDB
3. **Authentification**: Intégrer avec votre système auth existant
4. **Responsive**: Améliorer pour mobile
5. **Types**: Ajouter TypeScript (.tsx)

Votre structure est excellente avec App Router ! Cette approche est moderne et performante.