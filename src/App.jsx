import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaInicio from './telas/TelaInicio';
import TelaSobre from './telas/TelaSobre';
import Jogo from './Jogo';
import CenaFinal from './telas/TelaFim';
import SalaEstudo from './salas/SalaEstudo';
import SalaPorao from './salas/SalaPorao';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicio />} />
        <Route path="/sobre" element={<TelaSobre />} />
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/final" element={<CenaFinal />} />
        <Route path="/sala4" element={<SalaEstudo />} />
        <Route path="/SalaPorao" element={<SalaPorao />} />
      </Routes>
    </Router>
  );
}
