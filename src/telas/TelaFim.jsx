import React from 'react';
import { useNavigate } from 'react-router-dom';
import fundo from '../assets/telaFim.png';

export default function CenaFinal() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          padding: '2rem 2.5rem',
          borderRadius: '16px',
          boxShadow: '0 0 20px rgba(0,0,0,0.8)',
          fontSize: '1.6rem',
          fontFamily: "'Courier New', Courier, monospace",
          color: '#e2c275',
          textAlign: 'center',
          textShadow: '1px 1px 2px black',
          border: '2px solid #5c4a2c',
          maxWidth: '85%'
        }}
      >
        Você não pode fugir do que aconteceu.
      </div>

      <button
        onClick={() => navigate('/')}
        style={{
          fontSize: '1.1rem',
          backgroundColor: '#2b2b2b',
          color: '#e2c275',
          padding: '0.8rem 1.8rem',
          borderRadius: '12px',
          border: '2px solid #5c4a2c',
          fontFamily: "'Courier New', Courier, monospace",
          boxShadow: '0 0 10px rgba(0,0,0,0.7)',
          textShadow: '1px 1px 2px black',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#3a3a3a')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#2b2b2b')}
      >
        Voltar ao início
      </button>
    </div>
  );
}
