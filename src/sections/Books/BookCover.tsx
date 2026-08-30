import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { Book } from '../../types';

interface BookCoverProps {
  book: Book;
  isHovered?: boolean;
}

const getCoverSrc = (path: string) => {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${cleanPath}`;
};

export const BookCover: React.FC<BookCoverProps> = ({ book }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const coverContainerRef = useRef<HTMLAnchorElement>(null);
  const bookMeshRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!bookMeshRef.current || window.matchMedia('(pointer: coarse)').matches) return;

    const rect = bookMeshRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateY = (x / (rect.width / 2)) * 10;
    const rotateX = -(y / (rect.height / 2)) * 8;

    gsap.to(bookMeshRef.current, {
      rotateY,
      rotateX,
      scale: 1.03,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 1000,
      overwrite: 'auto'
    });
  };

  const handleMouseLeave = () => {
    if (!bookMeshRef.current) return;

    gsap.to(bookMeshRef.current, {
      rotateY: 0,
      rotateX: 0,
      scale: 1.0,
      duration: 0.6,
      ease: 'power3.out',
      overwrite: 'auto'
    });
  };

  return (
    <a
      ref={coverContainerRef}
      href={book.shopierUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="book-cover-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor-label="SHOPIER"
      aria-label={`${book.title} kitabını Shopier'de incele`}
      style={{ display: 'block', textDecoration: 'none' }}
    >
      {/* 3D Physical Book Mockup Wrapper */}
      <div ref={bookMeshRef} className="book-3d-object">
        
        {/* Book Spine Edge (Physical depth) */}
        <div className="book-spine-edge" aria-hidden="true" />

        {/* Realistic Book Cover Frame */}
        <div className="book-cover-front">
          {!imageError ? (
            <img
              src={getCoverSrc(book.cover)}
              alt={`${book.title} kitap kapağı`}
              className={`book-cover-image ${imageLoaded ? 'is-loaded' : 'is-loading'}`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          ) : (
            /* Architectural Monograph Fallback Frame if real JPEG is pending */
            <div className="book-cover-fallback">
              <div className="book-fallback-header">
                <span className="book-fallback-num">{book.number}</span>
                <span className="book-fallback-category">{book.category}</span>
              </div>
              <div className="book-fallback-body">
                <h3 className="book-fallback-title">{book.shortTitle}</h3>
                <p className="book-fallback-subtitle">{book.subtitle}</p>
              </div>
              <div className="book-fallback-footer">
                <span className="book-fallback-brand">4JAVA4 ACADEMY</span>
                <span className="book-fallback-edition">{book.edition || '2026'}</span>
              </div>
            </div>
          )}

          {/* Book Sheen / Highlight Overlay */}
          <div className="book-sheen" aria-hidden="true" />
        </div>

        {/* Physical Drop Shadow */}
        <div className="book-depth-shadow" aria-hidden="true" />
      </div>
    </a>
  );
};
