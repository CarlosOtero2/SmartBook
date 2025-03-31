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

  const handleCloseBook = () => {
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-center">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {selectedBook ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl relative">
              <button 
                onClick={handleCloseBook}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedBook.title}</h2>
              <div className="space-y-4">
                <p className="text-gray-600">{selectedBook.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedBook.keywords.map((keyword, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map(book => (
              <BookCard
                key={book.id}
                book={book}
                onView={handleViewBook}
              />
            ))}
          </div>
        )}
      </div>
      <Navigation />
    </div>
  );
};