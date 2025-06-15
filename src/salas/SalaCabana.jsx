import React, { useEffect, useState } from 'react';
import fundo from '../assets/sala1.png';
import chaveImg from '../assets/chave.png';

export default function SalaCabana({ avancarSala, inventario, setInventario }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [chaveVisivel, setChaveVisivel] = useState(false);
  const [abrindoOlhos, setAbrindoOlhos] = useState(true);


  useEffect(() => {
    const moverLanterna = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });

      const dx = x - 90;
      const dy = y - 92;
      const distancia = Math.sqrt(dx * dx + dy * dy);
      if (distancia < 10 && !chaveVisivel) {
        setChaveVisivel(true);
      }
    };

    window.addEventListener('mousemove', moverLanterna);
    return () => window.removeEventListener('mousemove', moverLanterna);
  }, [chaveVisivel]);


  useEffect(() => {
    const timer = setTimeout(() => setAbrindoOlhos(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  

  function pegarChave() {
    if (!inventario.includes('chave')) {
      setInventario([...inventario, 'chave']);
      avancarSala();
    }
  }

  return (
    <div className="sala" style={{ backgroundImage: `url(${fundo})` }}>

    {abrindoOlhos && (
      <>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50%',
          backgroundColor: 'black',
          zIndex: 9999,
          animation: 'abrirCima 2.5s forwards'
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50%',
          backgroundColor: 'black',
          zIndex: 9999,
          animation: 'abrirBaixo 2.5s forwards'
        }} />
      </>
    )}

      <div
        className="lanterna"
        style={{ top: `${mousePos.y}%`, left: `${mousePos.x}%` }}
      />

      {chaveVisivel && (
        <img
          src={chaveImg}
          alt="chave"
          style={{
            position: 'absolute',
            top: '80%',
            left: '92%',
            width: '40px',
            height: 'auto',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
            cursor: 'pointer'
          }}
          onClick={pegarChave}
        />
      )}

      {/* Rodapé com visual padrão */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0,0,0,0.6)',
          color: '#e2c275',
          padding: '1rem 2rem',
          borderRadius: '10px',
          fontSize: '1rem',
          fontFamily: "'Courier New', Courier, monospace",
          textAlign: 'center',
          textShadow: '1px 1px 2px black',
          border: '2px solid #5c4a2c',
          zIndex: 5
        }}
      >
        Explore a sala com a lanterna.<br />
        Algo está escondido aqui.
      </div>
    </div>
  );
}
