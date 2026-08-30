export interface Book {
  id: number;
  number: string;        // e.g. "01"
  index: string;         // e.g. "01 / 07"
  title: string;
  shortTitle: string;
  subtitle: string;
  slug: string;
  cover: string;
  description: string;
  category: string;
  topics: string[];
  shopierUrl: string;
  year?: string;
  edition?: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  cover: string;
  content: string;
}

export interface PointerPosition {
  x: number; // -1 to 1
  y: number; // -1 to 1
  clientX: number;
  clientY: number;
}
