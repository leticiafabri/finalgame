import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fundo from '../assets/sala4.png';

export default function SalaEstudo() {
  const navigate = useNavigate();

  const senhaCorreta = ['2', '5', '0', '3', '1', '2'];
  const [entrada, setEntrada] = useState(Array(6).fill(''));
  const [erro, setErro] = useState(false);
  const [acertou, setAcertou] = useState(false);

  const handleInputChange = (index, valor) => {
    const novaEntrada = [...entrada];
    novaEntrada[index] = valor;
    setEntrada(novaEntrada);
    setErro(false);
  };

  const verificarSenha = () => {
    if (JSON.stringify(entrada) === JSON.stringify(senhaCorreta)) {
      setAcertou(true);
      setTimeout(() => navigate('/SalaFormas'), 2000);
    } else {
      setErro(true);
    }
  };

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
        flexDirection: 'column'
      }}
    >
      {/* Painel central */}
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          padding: '1.5rem 2.5rem',
          borderRadius: '16px',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          boxShadow: '0 0 20px rgba(0,0,0,0.8)',
          marginBottom: '2rem'
        }}
      >
        {entrada.map((valor, i) => (
          <input
            key={i}
            type="text"
            maxLength="1"
            value={valor}
            onChange={(e) => handleInputChange(i, e.target.value.replace(/[^0-9]/g, ''))}
            style={{
              fontSize: '2.2rem',
              backgroundColor: '#2b2b2b',
              color: '#e2c275',
              padding: '0.6rem 1.2rem',
              borderRadius: '12px',
              margin: '0.5rem 0',
              border: erro ? '2px solid red' : '2px solid #5c4a2c',
              fontFamily: "'Courier New', Courier, monospace",
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.7)',
              textShadow: '1px 1px 2px black',
              width: '30px',
              height: '40px',
              textAlign: 'center'
            }}
          />
        ))}
        <button
          onClick={verificarSenha}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#3a3a3a')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2b2b2b')}
          style={{
            fontSize: '1.2rem',
            backgroundColor: '#2b2b2b',
            color: '#e2c275',
            padding: '0.6rem 1.5rem',
            borderRadius: '12px',
            marginLeft: '1rem',
            border: '2px solid #5c4a2c',
            fontFamily: "'Courier New', Courier, monospace",
            boxShadow: '0 0 10px rgba(0,0,0,0.7)',
            textShadow: '1px 1px 2px black',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
        >
          OK
        </button>
      </div>

      {/* Rodapé com dica e mensagem */}
      <div
        style={{
          position: 'absolute',
          bottom: '4%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0,0,0,0.6)',
          color: '#e2c275',
          padding: '1rem 2rem',
          borderRadius: '10px',
          fontSize: '1rem',
          textAlign: 'center',
          fontFamily: "'Courier New', Courier, monospace",
          textShadow: '1px 1px 2px black',
          border: '2px solid #5c4a2c'
        }}
      >
        <div>
          Um tic, um rosto, um grão, uma chama.<br />
          Contar o tempo é ver além dele.
        </div>
        {erro && <div style={{ color: 'tomato', marginTop: '0.5rem' }}>Combinação incorreta.</div>}
        {acertou && <div style={{ color: '#2ecc71', marginTop: '0.5rem' }}>A porta se abriu...</div>}
      </div>
    </div>
  );
}
