import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/inicio.css';
import fundo from '../assets/telaInicio.png'; 

export default function TelaInicio() {
  const navigate = useNavigate();

  return (
    <div
      className="tela-inicio"
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        color: '#e2c275',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: "'Courier New', Courier, monospace",
        textShadow: '1px 1px 2px black'
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '2rem',
          backgroundColor: 'rgba(0,0,0,0.6)',
          padding: '1rem 2rem',
          borderRadius: '12px',
          border: '2px solid #5c4a2c',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)'
        }}
      >
        Memórias Submersas
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button
          onClick={() => navigate('/jogo')}
          style={estiloBotao}
        >
          Iniciar Jogo
        </button>
        <button
          onClick={() => navigate('/sobre')}
          style={estiloBotao}
        >
          Sobre
        </button>
      </div>
    </div>
  );
}

const estiloBotao = {
  padding: '0.6rem 1.5rem',
  backgroundColor: '#2b2b2b',
  color: '#e2c275',
  border: '2px solid #5c4a2c',
  borderRadius: '12px',
  fontSize: '1.2rem',
  fontFamily: "'Courier New', Courier, monospace",
  boxShadow: 'inset 0 0 10px rgba(0,0,0,0.7)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textShadow: '1px 1px 2px black'
};
