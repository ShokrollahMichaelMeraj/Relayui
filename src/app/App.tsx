import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './components/HomePage';
import Contact from './components/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
