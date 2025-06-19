import React, { useState } from 'react';
import musica from './assets/suspensegame.mp3';
import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaInicio from './telas/TelaInicio';
import TelaSobre from './telas/TelaSobre';
import Jogo from './Jogo';
import CenaFinal from './telas/TelaFim';
import SalaEstudo from './salas/SalaEstudo';
import SalaPorao from './salas/SalaPorao';
import SalaFormas from './salas/SalaFormas';

export default function App() {

  const audioRef = useRef(new Audio(musica));

useEffect(() => {
  const audio = audioRef.current;
  audio.loop = true;
  audio.volume = 0.4;

  const iniciarSom = () => {
    audio.play().catch(() => {
      
    });
    window.removeEventListener('click', iniciarSom);
  };

  window.addEventListener('click', iniciarSom);

  return () => {
    audio.pause();
    audio.currentTime = 0;
  };
}, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicio />} />
        <Route path="/sobre" element={<TelaSobre />} />
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/final" element={<CenaFinal />} />
        <Route path="/sala4" element={<SalaEstudo />} />
        <Route path="/SalaPorao" element={<SalaPorao />} />
        <Route path="/SalaFormas" element={<SalaFormas />} />
      </Routes>
    </Router>
  );
}
