import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Exercise } from '../types/exercise';
import exercisesData from '../data/exercises.json';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Exercises: React.FC = () => {
  const [exercises] = useState<Exercise[]>(exercisesData.exercises);
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);

  const toggleExercise = (id: string) => {
    setExpandedExercise(expandedExercise === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Ejercicios y Prácticas
        </h1>

        <div className="grid gap-6">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div
                className="p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleExercise(exercise.id)}
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exercise.title}
                  </h3>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                      {exercise.difficulty}
                    </span>
                    <span className="px-2 py-1 text-sm bg-green-100 text-green-600 rounded-full">
                      {exercise.category}
                    </span>
                  </div>
                </div>
                {expandedExercise === exercise.id ? (
                  <ChevronUp className="h-6 w-6 text-gray-500" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-500" />
                )}
              </div>

              {expandedExercise === exercise.id && (
                <div className="p-4 border-t border-gray-200">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Descripción:</h4>
                    <p className="text-gray-600">{exercise.description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Problema:</h4>
                    <p className="text-gray-600">{exercise.problem}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Pistas:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {exercise.hints.map((hint, index) => (
                        <li key={index}>{hint}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Solución:</h4>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{exercise.solution}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Navigation />
      <Footer />
    </div>
  );
};