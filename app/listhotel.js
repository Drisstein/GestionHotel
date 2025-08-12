import React, { useState } from 'react';
import { Search, Bell, LogOut, Plus, Home, MapPin, LayoutDashboard, CalendarCheck, MessageCircle, Building2, ArrowLeft, Upload, X } from 'lucide-react';

const HotelsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: 'CAP Marniane',
    address: 'Les iles du saloum, Mar Lodj',
    email: 'information@gmail.com',
    phone: '+221 77 777 77 77',
    price: '25.000 XOF',
    currency: 'F XOF'
  });
  const hotels = [
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
    {
      id: 3,
      name: "Pullman Saly Hotel",
      location: "Saly",
      rating: 5,
      price: "125 000 FCFA",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Radisson Grand Tanger",
      location: "Tanger",
      rating: 4,
      price: "95 000 FCFA",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Ocean Sea Hotel",
      location: "Dakar",
      rating: 3,
      price: "35 000 FCFA",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      name: "Grand Villa",
      location: "Mbour",
      rating: 4,
      price: "65 000 FCFA",
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=400&h=200&fit=crop"
    },
    {
      id: 7,
      name: "Palm Beach Resort & Spa",
      location: "Saly",
      rating: 5,
      price: "155 000 FCFA",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=200&fit=crop"
    },
    {
      id: 8,
      name: "Lamantin Beach Resort",
      location: "Saly",
      rating: 4,
      price: "89 000 FCFA",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=200&fit=crop"
    }
  ];

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    },
    sidebar: {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '250px',
      height: '100vh',
      backgroundColor: '#4a5568',
      color: 'white',
      padding: '20px'
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
      padding: '8px 0',
      color: '#cbd5e0',
      textDecoration: 'none',
      fontSize: '14px',
      cursor: 'pointer'
    },
    sidebarLinkActive: {
      color: 'white',
      fontWeight: 'bold'
    },
    sidebarLinkHover: {
      color: 'white'
    },
    mainContent: {
      marginLeft: '250px',
      flex: 1,
      minHeight: '100vh'
    },
    header: {
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '16px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    headerTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333'
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    },
    searchContainer: {
      position: 'relative'
    },
    searchInput: {
      width: '250px',
      padding: '8px 35px 8px 12px',
      border: '1px solid #ddd',
      borderRadius: '20px',
      fontSize: '14px',
      outline: 'none'
    },
    searchIcon: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#666',
      cursor: 'pointer'
    },
    iconButton: {
      width: '24px',
      height: '24px',
      backgroundColor: '#f1f1f1',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    userAvatar: {
      width: '32px',
      height: '32px',
      backgroundColor: '#007bff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '14px',
      cursor: 'pointer'
    },
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
    },
    hotelsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px'
    },
    hotelCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer'
    },
    hotelCardHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    },
    hotelImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
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
    star: {
      fontSize: '14px'
    },
    starActive: {
      color: '#ffa500'
    },
    starInactive: {
      color: '#d1d5db'
    },
    hotelPrice: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#007bff',
      textAlign: 'right'
    },
    // Modal Styles
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '8px',
      width: '90%',
      maxWidth: '600px',
      maxHeight: '90vh',
      overflow: 'auto',
      position: 'relative'
    },
    modalHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '20px 24px',
      borderBottom: '1px solid #e5e7eb',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333'
    },
    modalCloseBtn: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#666'
    },
    modalBody: {
      padding: '24px'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginBottom: '20px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    formGroupFull: {
      gridColumn: '1 / -1'
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151'
    },
    input: {
      padding: '12px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      outline: 'none',
      transition: 'border-color 0.2s'
    },
    inputFocus: {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
    },
    select: {
      padding: '12px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      outline: 'none',
      backgroundColor: 'white',
      cursor: 'pointer'
    },
    uploadArea: {
      border: '2px dashed #d1d5db',
      borderRadius: '6px',
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: '#f9fafb',
      cursor: 'pointer',
      transition: 'border-color 0.2s'
    },
    uploadAreaHover: {
      borderColor: '#3b82f6',
      backgroundColor: '#eff6ff'
    },
    uploadIcon: {
      width: '48px',
      height: '48px',
      margin: '0 auto 12px',
      color: '#9ca3af'
    },
    uploadText: {
      color: '#6b7280',
      fontSize: '14px'
    },
    modalFooter: {
      padding: '20px 24px',
      borderTop: '1px solid #e5e7eb',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    saveBtn: {
      backgroundColor: '#4b5563',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    saveBtnHover: {
      backgroundColor: '#374151'
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hotel data:', formData);
    // Here you would typically send the data to your API
    setShowModal(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        style={{
          ...styles.star,
          ...(i < rating ? styles.starActive : styles.starInactive)
        }}
      >
        ★
      </span>
    ));
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <Building2 size={20} />
          <h3 style={styles.sidebarTitle}>RED PRODUCT</h3>
        </div>
        
        <nav>
          <ul style={styles.sidebarNav}>
            <li style={styles.sidebarItem}>
              <a 
                href="#" 
                style={{
                  ...styles.sidebarLink,
                  ...styles.sidebarLinkActive
                }}
              >
                <LayoutDashboard size={16} />
                General
              </a>
            </li>
            <li style={styles.sidebarItem}>
              <a 
                href="#" 
                style={styles.sidebarLink}
                onMouseEnter={(e) => {
                  e.target.style.color = styles.sidebarLinkHover.color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = styles.sidebarLink.color;
                }}
              >
                <CalendarCheck size={16} />
                Reservations
              </a>
            </li>
            <li style={styles.sidebarItem}>
              <a 
                href="#" 
                style={styles.sidebarLink}
                onMouseEnter={(e) => {
                  e.target.style.color = styles.sidebarLinkHover.color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = styles.sidebarLink.color;
                }}
              >
                <MessageCircle size={16} />
                Commentaires
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.headerTitle}>Liste des hôtels</h1>
          
          <div style={styles.headerRight}>
            {/* Search */}
            <div style={styles.searchContainer}>
              <input
                type="text"
                placeholder="Rechercher..."
                style={styles.searchInput}
              />
              <Search size={16} style={styles.searchIcon} />
            </div>
            
            {/* Notifications */}
            <div 
              style={styles.iconButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e5e5e5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = styles.iconButton.backgroundColor;
              }}
            >
              <Bell size={16} />
            </div>
            
            {/* User Avatar */}
            <div style={styles.userAvatar}>
              GD
            </div>
            
            {/* Logout */}
            <div 
              style={styles.iconButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e5e5e5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = styles.iconButton.backgroundColor;
              }}
            >
              <LogOut size={16} />
            </div>
          </div>
        </header>

        {/* Sub Header */}
        <div style={styles.subHeader}>
          <h2 style={styles.subHeaderTitle}>Hôtels</h2>
          <button 
            style={styles.addButton}
            onClick={() => setShowModal(true)}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#218838';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = styles.addButton.backgroundColor;
            }}
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
          <div style={styles.hotelsGrid}>
            {hotels.map((hotel) => (
              <div 
                key={hotel.id} 
                style={styles.hotelCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = styles.hotelCardHover.transform;
                  e.currentTarget.style.boxShadow = styles.hotelCardHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = styles.hotelCard.boxShadow;
                }}
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  style={styles.hotelImage}
                />
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
            ))}
          </div>
        </main>
      </div>

      {/* Modal for Creating New Hotel */}
      {showModal && (
        <div style={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              style={styles.modalCloseBtn}
              onClick={() => setShowModal(false)}
            >
              <X size={20} />
            </button>

            <div style={styles.modalHeader}>
              <ArrowLeft size={20} />
              CRÉER UN NOUVEL HÔTEL
            </div>

            <form onSubmit={handleSubmit}>
              <div style={styles.modalBody}>
                <div style={styles.formGrid}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Nom de l'hôtel</label>
                    <input
                      type="text"
                      style={styles.input}
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.inputFocus.borderColor;
                        e.target.style.boxShadow = styles.inputFocus.boxShadow;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = styles.input.borderColor;
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Adresse</label>
                    <input
                      type="text"
                      style={styles.input}
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.inputFocus.borderColor;
                        e.target.style.boxShadow = styles.inputFocus.boxShadow;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = styles.input.borderColor;
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>E-mail</label>
                    <input
                      type="email"
                      style={styles.input}
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.inputFocus.borderColor;
                        e.target.style.boxShadow = styles.inputFocus.boxShadow;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = styles.input.borderColor;
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Numéro de téléphone</label>
                    <input
                      type="tel"
                      style={styles.input}
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.inputFocus.borderColor;
                        e.target.style.boxShadow = styles.inputFocus.boxShadow;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = styles.input.borderColor;
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Prix par nuit</label>
                    <input
                      type="text"
                      style={styles.input}
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.inputFocus.borderColor;
                        e.target.style.boxShadow = styles.inputFocus.boxShadow;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = styles.input.borderColor;
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Devise</label>
                    <select
                      style={styles.select}
                      value={formData.currency}
                      onChange={(e) => handleInputChange('currency', e.target.value)}
                    >
                      <option value="F XOF">F XOF</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </div>

                  <div style={{...styles.formGroup, ...styles.formGroupFull}}>
                    <label style={styles.label}>Ajouter une photo</label>
                    <div 
                      style={styles.uploadArea}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = styles.uploadAreaHover.borderColor;
                        e.target.style.backgroundColor = styles.uploadAreaHover.backgroundColor;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = styles.uploadArea.borderColor;
                        e.target.style.backgroundColor = styles.uploadArea.backgroundColor;
                      }}
                    >
                      <div style={styles.uploadIcon}>
                        <Upload size={48} />
                      </div>
                      <div style={styles.uploadText}>Ajouter une photo</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={styles.modalFooter}>
                <button 
                  type="submit"
                  style={styles.saveBtn}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = styles.saveBtnHover.backgroundColor;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = styles.saveBtn.backgroundColor;
                  }}
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelsPage;