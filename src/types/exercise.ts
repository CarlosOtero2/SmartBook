export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  category: string;
  problem: string;
  solution: string;
  hints: string[];
}