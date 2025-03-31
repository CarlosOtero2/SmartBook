import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SmartBook</h3>
            <p className="text-gray-300">
              Tu biblioteca digital educativa para el aprendizaje continuo.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-gray-300">
              Universidad Autónoma de Chiriquí<br />
              Facultad de Economía<br />
              Departamento de Ciencias Computacionales
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="text-gray-300">
              <li><a href="https://www.unachi.ac.pa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">UNACHI</a></li>
              <li><a href="https://www.unachi.ac.pa/facultades/economia" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facultad de Economía</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SmartBook. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};