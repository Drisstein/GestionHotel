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