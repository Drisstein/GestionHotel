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