import React from 'react';
import { Book } from '../../types';
import { MagneticButton } from '../../components/MagneticButton/MagneticButton';

interface BookInfoProps {
  book: Book;
}

export const BookInfo: React.FC<BookInfoProps> = ({ book }) => {
  return (
    <div className="book-info-block">
      {/* Category & Status Tag */}
      <div className="editorial-badge">
        <span className="status-dot" />
        <span>{book.index} // {book.category}</span>
      </div>

      {/* Main Massive Book Headline Link */}
      <h2 className="book-title display-title">
        <a
          href={book.shopierUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="book-title-link"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          {book.shortTitle}
        </a>
      </h2>

      {/* Book Subtitle */}
      {book.subtitle && (
        <div className="book-subtitle mono-label mono-label--accent">
          {book.subtitle}
        </div>
      )}

      {/* Concise Description: "Bu kitap ne işe yarıyor?" */}
      <p className="book-description">
        {book.description}
      </p>

      {/* Topic Metadata Tags */}
      <div className="book-topics-list" aria-label="Kitap Konuları">
        {book.topics.map((topic, index) => (
          <span key={index} className="book-topic-tag">
            {topic}
          </span>
        ))}
      </div>

      {/* Shopier CTA Button */}
      <div className="book-action-row">
        <MagneticButton
          href={book.shopierUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-primary book-cta"
          cursorLabel="SHOPIER"
          aria-label={`${book.shortTitle} kitabını Shopier'de incele`}
        >
          <span>SHOPIER'DE İNCELE</span>
          <span className="cta-arrow" aria-hidden="true">→</span>
        </MagneticButton>

        <div className="meta-item">
          <span className="meta-item__label">REFARENCE:</span>
          <span className="meta-item__value">SHOPIER OFFICIAL PRODUCT</span>
        </div>
      </div>
    </div>
  );
};
