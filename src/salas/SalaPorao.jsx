import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fundo from '../assets/sala3.png';

import iconeFogo from '../assets/iconeFogo.png';
import iconeOlho from '../assets/iconeOlho.png';
import iconeGota from '../assets/iconeGota.png';
import iconeEngrenagem from '../assets/iconeEngrenagem.png';

export default function SalaPorao() {
  const [rotacoes, setRotacoes] = useState([0, 0, 0, 0]);
  const [aberto, setAberto] = useState(false);
  const navigate = useNavigate();

  const solucao = [90, 180, 270, 90];
  const icones = [iconeFogo, iconeOlho, iconeGota, iconeEngrenagem];
  const coresFundo = [
    'rgba(168, 44, 44, 0.6)',   // vermelho
    'rgba(60, 145, 60, 0.6)',   // verde
    'rgba(44, 97, 168, 0.6)',   // azul
    'rgba(168, 155, 44, 0.6)'   // amarelo
  ];

  const girarBotao = (index) => {
    const novasRotacoes = [...rotacoes];
    novasRotacoes[index] = (novasRotacoes[index] + 90) % 360;
    setRotacoes(novasRotacoes);

    if (JSON.stringify(novasRotacoes) === JSON.stringify(solucao)) {
      setAberto(true);
    }
  };

  return (
    <div
      className="sala"
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
        flexDirection: 'column'
      }}
    >
      <div style={{ display: 'flex', gap: '3rem', marginBottom: '2rem' }}>
        {icones.map((icone, i) => {
          const estaCerto = rotacoes[i] === solucao[i];
          return (
            <img
              key={i}
              src={icone}
              alt={`Ícone ${i}`}
              onClick={() => {
                if (!estaCerto) girarBotao(i);
              }}
              style={{
                width: '60px',
                height: '60px',
                transform: `rotate(${rotacoes[i]}deg)`,
                transition: 'transform 0.3s ease',
                cursor: estaCerto ? 'default' : 'pointer',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(0,0,0,0.6)',
                border: estaCerto ? '3px solid #2ecc71' : '2px solid #222',
                backgroundColor: coresFundo[i],
                padding: '5px',
                opacity: estaCerto ? 1 : 0.9,
                pointerEvents: estaCerto ? 'none' : 'auto'
              }}
            />
          );
        })}
      </div>

      {/* Rodapé com mensagem ou botão */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0,0,0,0.6)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '10px',
          fontSize: '1rem',
          textAlign: 'center',
          fontFamily: "'Courier New', Courier, monospace",
          textShadow: '1px 1px 2px black',
          border: '2px solid #5c4a2c'
        }}
      >
        {aberto ? (
          <>
            A porta se abriu.<br />
            <button
              style={{
                marginTop: '0.8rem',
                padding: '0.6rem 1.2rem',
                backgroundColor: '#2b2b2b',
                color: '#e2c275',
                border: '2px solid #5c4a2c',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: '1rem',
                textShadow: '1px 1px 2px black'
              }}
              onClick={() => navigate('/final')}
            >
              Seguir em frente
            </button>
          </>
        ) : (
          <>Gire os símbolos até que todos fiquem na posição correta.</>
        )}
      </div>
    </div>
  );
}
