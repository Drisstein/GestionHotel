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