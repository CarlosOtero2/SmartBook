import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { BookCard } from '../components/BookCard';
import { Navigation } from '../components/Navigation';
import { Book } from '../types/book';
import booksData from '../data/books.json';

export const Books: React.FC = () => {
  const [books] = useState<Book[]>(booksData.books);
  const [searchResults, setSearchResults] = useState<Book[]>(booksData.books);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleSearch = (query: string) => {
    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
    );
    setSearchResults(filtered);
  };

  const handleViewBook = (book: Book) => {
    setSelectedBook(book);
    
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-center">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onView={handleViewBook}
            />
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
};