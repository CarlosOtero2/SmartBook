import React from 'react';
import { Link } from 'react-router-dom';
import { Book as BookIcon, GraduationCap, Search, Download, MessageSquare, BookOpen } from 'lucide-react';
import { Footer } from '../components/Footer';

export const Welcome: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
            <img src="/LOGO.png" alt="SmartBook Logo" className="w-40 h-30" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Bienvenido a SmartBook
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Tu biblioteca digital educativa. Accede a una amplia colección de libros,
              personaliza tu experiencia de lectura y descarga contenido en formato PDF.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 justify-center">
                <Link
                  to="/books"
                  className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explorar Libros
                </Link>
                <Link
                  to="/exercises"
                  className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Ejercicios
                </Link>
                <Link
                  to="/forum"
                  className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Foro
                </Link>
              </div>
            </div>
            
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <BookIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Biblioteca Digital
                </h3>
                <p className="text-gray-600">
                  Accede a una amplia colección de libros educativos en formato digital.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Ejercicios Prácticos
                </h3>
                <p className="text-gray-600">
                  Practica y mejora tus habilidades con ejercicios interactivos.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Foro de Discusión
                </h3>
                <p className="text-gray-600">
                  Participa en discusiones y comparte conocimientos con otros usuarios.
                </p>
              </div>
            </div>

            {/* Developers Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Desarrolladores</h2>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex justify-center mb-6">
                  <GraduationCap size={48} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Equipo de Desarrollo - Segundo Año de Programación
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-700 mb-2">Desarrolladores:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Carlos I. Otero E.</li>
                      <li>• Nabit Ayala</li>
                      <li>• David Candanedo</li>
                      <li>• Estefany Morales</li>
                      <li>• David Candanedo</li>
                      <li>• Joselin Morales</li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-700 mb-2">Supervisores:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Olinda Aguirre</li>
                      <li>• Andres Miranda</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* University Section */}
            <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
              <img
                src="/Logo-Unachi.png"
                alt="UNACHI Logo"
                className="h-32 mx-auto mb-6"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Universidad Autónoma de Chiriquí (UNACHI)
              </h2>
              <div className="text-gray-600">
                <p className="text-lg font-semibold mb-2">Facultad de Economía</p>
                <p>Departamento de Ciencias Computacionales</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};