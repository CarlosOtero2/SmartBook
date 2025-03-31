import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-8 right-8 flex gap-2">
      <button
        onClick={() => navigate(-1)}
        className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50"
        aria-label="Regresar"
      >
        <ChevronLeft size={24} className="text-gray-700" />
      </button>
      <button
        onClick={() => navigate(1)}
        className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50"
        aria-label="Continuar"
      >
        <ChevronRight size={24} className="text-gray-700" />
      </button>
    </div>
  );
};