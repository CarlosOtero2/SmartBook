import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import Footer from '../components/Footer';

interface Exercise {
  id: string;
  title: string;
  difficulty: string;
  category: string;
  description: string;
  problem: string;
  hints: string[];
  solution: string;
}

const Exercises = () => {
  const [exercises] = useState<Exercise[]>([
    {
      id: "1",
      title: "Ejercicio de Ejemplo",
      difficulty: "Principiante",
      category: "Programación",
      description: "Este es un ejercicio de ejemplo para practicar",
      problem: "Resolver el siguiente problema...",
      hints: ["Pista 1", "Pista 2"],
      solution: "Solución del ejercicio"
    }
  ]);

  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);

  const toggleExercise = (id: string) => {
    setExpandedExercise(expandedExercise === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Ejercicios y Prácticas
        </h1>

        <div className="grid gap-6">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {exercise.title}
              </h3>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                  {exercise.difficulty}
                </span>
                <span className="px-2 py-1 text-sm bg-green-100 text-green-600 rounded-full">
                  {exercise.category}
                </span>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">{exercise.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <button
                    onClick={() => toggleExercise(exercise.id)}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    {expandedExercise === exercise.id ? 'Ocultar detalles' : 'Ver detalles'}
                  </button>
                  
                  {expandedExercise === exercise.id && (
                    <div className="mt-4 space-y-4">
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">Problema:</h4>
                        <p className="text-gray-700">{exercise.problem}</p>
                      </div>
                      
                      {exercise.hints.length > 0 && (
                        <div className="bg-yellow-50 p-4 rounded">
                          <h4 className="font-semibold mb-2">Pistas:</h4>
                          <ul className="list-disc list-inside text-gray-700">
                            {exercise.hints.map((hint, index) => (
                              <li key={index}>{hint}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="bg-green-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">Solución:</h4>
                        <p className="text-gray-700">{exercise.solution}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { Exercises };