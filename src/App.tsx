import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Books } from './pages/Books';
import { Exercises } from './pages/Exercises';
import { Forum } from './pages/Forum';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/books" element={<Books />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
}

export default App;