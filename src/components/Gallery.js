import React, { useState } from 'react';
import LazyImage from './LazyImage';

const Gallery = () => {
  // Placeholder for gallery images - replace with actual image paths
  const galleryImages = [
    { id: 1, src: '/gallery/image1.jpg', alt: 'Team Photo 1', caption: 'First XV Team Photo' },
    { id: 2, src: '/gallery/image2.jpg', alt: 'Team Photo 2', caption: 'Match Action' },
    { id: 3, src: '/gallery/image3.jpg', alt: 'Team Photo 3', caption: 'Training Session' },
    { id: 4, src: '/gallery/image4.jpg', alt: 'Team Photo 4', caption: 'Victory Celebration' },
    { id: 5, src: '/gallery/image5.jpg', alt: 'Team Photo 5', caption: 'Team Huddle' },
    { id: 6, src: '/gallery/image6.jpg', alt: 'Team Photo 6', caption: 'Match Day' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Team Picture Gallery</h2>
          <div className="title-underline"></div>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <div className="gallery-image-wrapper">
                <LazyImage 
                  src={image.src} 
                  alt={image.alt}
                  className="gallery-image"
                  placeholder="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ELoading...%3C/text%3E%3C/svg%3E"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Coming Soon%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="gallery-overlay">
                  <p className="gallery-caption">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <button className="gallery-modal-close" onClick={closeModal} aria-label="Close">
            ×
          </button>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="gallery-modal-image"
            />
            <p className="gallery-modal-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

