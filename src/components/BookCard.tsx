import React from 'react';
import { Download, ExternalLink, Eye } from 'lucide-react';
import { Book } from '../types/book';

interface BookCardProps {
  book: Book;
  onView: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onView }) => {
  const handleMegaOpen = () => {
    window.open(book.megaLink, '_blank');
  };

  const handleDownload = () => {
    window.open(book.pdfUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
        <p className="text-gray-600 mt-1">{book.author}</p>
        <p className="text-gray-500 mt-2 text-sm line-clamp-3">{book.description}</p>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {book.keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => onView(book)}
              className="flex items-center gap-1 px-3 py-1.5 text-blue-600 hover:text-blue-700 border border-blue-600 rounded-lg hover:bg-blue-50"
            >
              <Eye size={18} />
              <span>Ver</span>
            </button>
            <button
              onClick={handleMegaOpen}
              className="flex items-center gap-1 px-3 py-1.5 text-green-600 hover:text-green-700 border border-green-600 rounded-lg hover:bg-green-50"
            >
              <ExternalLink size={18} />
              <span>Abrir en MEGA</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1 px-3 py-1.5 text-purple-600 hover:text-purple-700 border border-purple-600 rounded-lg hover:bg-purple-50"
            >
              <Download size={18} />
              <span>Descargar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};