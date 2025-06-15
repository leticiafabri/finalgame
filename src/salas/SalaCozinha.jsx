import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import setaCima from '../assets/setaCima.png';
import setaBaixo from '../assets/setaBaixo.png';
import fundo from '../assets/sala2.png';

export default function SalaCozinha() {
  const navigate = useNavigate();
  const senhaCorreta = [2, 4, 4];
  const [digitos, setDigitos] = useState([0, 0, 0]);
  const [aberto, setAberto] = useState(false);

  // Gera valores aleatórios ao entrar na sala
  useEffect(() => {
    const aleatorios = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10));
    setDigitos(aleatorios);
  }, []);

  const mudarValor = (index, delta) => {
    const novoValor = (digitos[index] + delta + 10) % 10;
    const novosDigitos = [...digitos];
    novosDigitos[index] = novoValor;
    setDigitos(novosDigitos);

    if (JSON.stringify(novosDigitos) === JSON.stringify(senhaCorreta)) {
      setAberto(true);
      setTimeout(() => {
        navigate('/sala4');
      }, 1500);
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
      {/* Painel do Cofre */}
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '2rem 3rem',
          borderRadius: '16px',
          boxShadow: '0 0 20px rgba(0,0,0,0.8)',
          display: 'flex',
          gap: '2rem',
          zIndex: 2
        }}
      >
        {digitos.map((valor, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <img
              src={setaCima}
              alt="Seta cima"
              onClick={() => mudarValor(i, 1)}
              style={{ cursor: 'pointer', width: '28px', marginBottom: '4px' }}
            />

            <div
              style={{
                fontSize: '2.2rem',
                backgroundColor: '#2b2b2b',
                color: '#e2c275',
                padding: '0.6rem 1.2rem',
                borderRadius: '12px',
                margin: '0.5rem 0',
                border: '2px solid #5c4a2c',
                fontFamily: "'Courier New', Courier, monospace",
                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.7)',
                textShadow: '1px 1px 2px black'
              }}
            >
              {valor}
            </div>

            <img
              src={setaBaixo}
              alt="Seta baixo"
              onClick={() => mudarValor(i, -1)}
              style={{ cursor: 'pointer', width: '28px', marginTop: '4px' }}
            />
          </div>
        ))}
      </div>

      {/* Rodapé com mensagem dinâmica */}
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
          <>Porta aberta.</>
        ) : (
          <>Observe bem ao seu redor.<br />Você nunca sabe o que te rodeia.</>
        )}
      </div>
    </div>
  );
}
