import React from 'react';

interface BookProgressProps {
  activeIndex: number;
  totalBooks: number;
  onSelectBook?: (index: number) => void;
}

export const BookProgress: React.FC<BookProgressProps> = ({
  activeIndex,
  totalBooks,
  onSelectBook
}) => {
  return (
    <div className="book-progress-rail" aria-label="Kitap Gezinme Çubuğu">
      {Array.from({ length: totalBooks }).map((_, index) => {
        const isActive = index === activeIndex;
        const isPast = index < activeIndex;

        return (
          <button
            key={index}
            className={`book-progress-tick ${isActive ? 'is-active' : ''} ${isPast ? 'is-past' : ''}`}
            onClick={() => onSelectBook?.(index)}
            aria-label={`Kitap ${index + 1}`}
            data-cursor-label={`0${index + 1}`}
          >
            <span className="tick-line" />
            <span className="tick-num mono-num">0{index + 1}</span>
          </button>
        );
      })}
    </div>
  );
};
