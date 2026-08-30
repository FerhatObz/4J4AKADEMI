import React from 'react';

interface BookIndexProps {
  activeIndex: number;
  totalBooks: number;
}

export const BookIndex: React.FC<BookIndexProps> = ({ activeIndex, totalBooks }) => {
  const currentNum = (activeIndex + 1).toString().padStart(2, '0');
  const totalNum = totalBooks.toString().padStart(2, '0');

  return (
    <div className="book-index-indicator" aria-hidden="true">
      <div className="book-index-current mono-num">{currentNum}</div>
      <div className="book-index-divider">/</div>
      <div className="book-index-total mono-num">{totalNum}</div>
    </div>
  );
};
