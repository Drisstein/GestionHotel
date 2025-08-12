'use client';

import React, { useState } from 'react';
import { ArrowLeft, Upload, X } from 'lucide-react';

const HotelModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    price: '',
    currency: 'F XOF',
    location: '',
    rating: 3
  });

  const styles = {
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
      color: '#666',
      padding: '4px'
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
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    star: {
      fontSize: '20px',
      cursor: 'pointer',
      transition: 'color 0.2s'
    },
    starActive: {
      color: '#ffa500'
    },
    starInactive: {
      color: '#d1d5db'
    },
    modalFooter: {
      padding: '20px 24px',
      borderTop: '1px solid #e5e7eb',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '12px'
    },
    cancelBtn: {
      backgroundColor: 'transparent',
      color: '#6b7280',
      border: '1px solid #d1d5db',
      padding: '12px 24px',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s'
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
    
    // Validation basique
    if (!formData.name || !formData.address || !formData.email || !formData.phone || !formData.price) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    // Formatage des données
    const hotelData = {
      ...formData,
      price: `${formData.price} ${formData.currency}`,
      // Vous pouvez ajouter d'autres transformations ici
    };

    onSubmit(hotelData);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        style={{
          ...styles.star,
          ...(i < rating ? styles.starActive : styles.starInactive)
        }}
        onClick={() => handleInputChange('rating', i + 1)}
      >
        ★
      </span>
    ));
  };

  const handleUploadClick = () => {
    // Ici vous pouvez implémenter la logique d'upload
    // Par exemple, ouvrir un sélecteur de fichier
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        // Traiter le fichier ici
        console.log('Fichier sélectionné:', file);
        // Vous pouvez ajouter la logique d'upload vers votre serveur
      }
    };
    input.click();
  };

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button 
          style={styles.modalCloseBtn}
          onClick={onClose}
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
              {/* Nom de l'hôtel */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Nom de l'hôtel *</label>
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
                  placeholder="Ex: Hotel Noom 50"
                  required
                />
              </div>

              {/* Localisation */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Localisation *</label>
                <input
                  type="text"
                  style={styles.input}
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  onFocus={(e) => {
                    e.target.style.borderColor = styles.inputFocus.borderColor;
                    e.target.style.boxShadow = styles.inputFocus.boxShadow;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = styles.input.borderColor;
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Ex: Dakar"
                  required
                />
              </div>

              {/* Adresse */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Adresse complète *</label>
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
                  placeholder="Ex: Les iles du saloum, Mar Lodj"
                  required
                />
              </div>

              {/* Email */}
              <div style={styles.formGroup}>
                <label style={styles.label}>E-mail *</label>
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
                  placeholder="Ex: contact@hotel.com"
                  required
                />
              </div>

              {/* Téléphone */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Numéro de téléphone *</label>
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
                  placeholder="Ex: +221 77 777 77 77"
                  required
                />
              </div>

              {/* Prix */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Prix par nuit *</label>
                <input
                  type="number"
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
                  placeholder="Ex: 25000"
                  required
                />
              </div>

              {/* Devise */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Devise</label>
                <select
                  style={styles.select}
                  value={formData.currency}
                  onChange={(e) => handleInputChange('currency', e.target.value)}
                >
                  <option value="FCFA">FCFA</option>
                  <option value="F XOF">F XOF</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

              {/* Note/Étoiles */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Note (étoiles)</label>
                <div style={styles.ratingContainer}>
                  {renderStars(formData.rating)}
                  <span style={{ marginLeft: '8px', fontSize: '14px', color: '#666' }}>
                    {formData.rating} étoile{formData.rating > 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              {/* Upload photo */}
              <div style={{...styles.formGroup, ...styles.formGroupFull}}>
                <label style={styles.label}>Ajouter une photo</label>
                <div 
                  style={styles.uploadArea}
                  onClick={handleUploadClick}
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
                  <div style={styles.uploadText}>
                    Cliquez pour ajouter une photo ou glissez-déposez
                  </div>
                  <div style={{ ...styles.uploadText, fontSize: '12px', marginTop: '4px' }}>
                    PNG, JPG jusqu'à 5MB
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer avec boutons */}
          <div style={styles.modalFooter}>
            <button 
              type="button"
              style={styles.cancelBtn}
              onClick={onClose}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f3f4f6';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Annuler
            </button>
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
  );
};

export default HotelModal;