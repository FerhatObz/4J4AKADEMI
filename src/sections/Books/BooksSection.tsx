import React, { useState } from 'react';
import { booksData } from '../../data/books';
import { BookScene } from './BookScene';
import { BookIndex } from './BookIndex';
import { BookProgress } from './BookProgress';

export const BooksSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectBook = (index: number) => {
    const targetBook = booksData[index];
    if (targetBook) {
      const el = document.getElementById(`book-${targetBook.number}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <section className="section-books" id="books" aria-label="4JAVA4 Kitap Arşivi">
      
      {/* Editorial Section Introduction Banner */}
      <div className="container books-section-header">
        <div className="editorial-badge">
          <span className="status-dot" />
          <span>[02 / 06] // KNOWLEDGE_ARCHIVE</span>
        </div>

        <div className="books-header-content">
          <h2 className="books-section-title display-headline">
            BOOKS
          </h2>
          <div className="books-section-meta">
            <span className="mono-label mono-label--accent">07 TITLES</span>
            <span className="meta-divider">/</span>
            <span className="mono-label">ENGINEERING &amp; CYBERSECURITY ARCHIVE</span>
          </div>
        </div>
      </div>

      {/* Sticky Desktop Rail: Floating Index & Progress */}
      <aside className="books-sticky-rail" aria-hidden="true">
        <BookIndex activeIndex={activeIndex} totalBooks={booksData.length} />
        <BookProgress
          activeIndex={activeIndex}
          totalBooks={booksData.length}
          onSelectBook={handleSelectBook}
        />
      </aside>

      {/* 7 Sequential Editorial Book Scenes */}
      <div className="books-scenes-container">
        {booksData.map((book, index) => (
          <BookScene
            key={book.id}
            book={book}
            index={index}
            isEven={index % 2 === 0}
            onEnterActive={(idx) => setActiveIndex(idx)}
          />
        ))}
      </div>

    </section>
  );
};
