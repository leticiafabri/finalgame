import React from 'react';
import fundo from '../assets/telaInicio.png';
import { useNavigate } from 'react-router-dom';

export default function TelaSobre() {
  const navigate = useNavigate();

  return (
    <div
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
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '600px',
          boxShadow: '0 0 10px rgba(0,0,0,0.6)',
          border: '2px solid #5c4a2c'
        }}
      >
        <h1 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Sobre o Jogo</h1>
        <p style={{ fontSize: '1.1rem' }}>
          Este jogo foi desenvolvido por Letícia Fabri e Bruno Mazetto como parte do projeto final da disciplina de Canvas e Games.
          Inspirado nos jogos da série Rusty Lake, ele combina lógica, ambientação misteriosa e enigmas simbólicos.
        </p>
        <p style={{ marginTop: '1.5rem', fontStyle: 'italic' }}>
          “Alguns mistérios não querem ser resolvidos.”
        </p>

        <button
          onClick={() => navigate('/')}
          style={estiloBotao}
        >
          Voltar ao início
        </button>
      </div>
    </div>
  );
}

const estiloBotao = {
  marginTop: '2rem',
  padding: '0.6rem 1.5rem',
  backgroundColor: '#2b2b2b',
  color: '#e2c275',
  border: '2px solid #5c4a2c',
  borderRadius: '12px',
  fontSize: '1rem',
  fontFamily: "'Courier New', Courier, monospace",
  boxShadow: 'inset 0 0 10px rgba(0,0,0,0.7)',
  cursor: 'pointer',
  textShadow: '1px 1px 2px black',
  transition: 'all 0.3s ease'
};
