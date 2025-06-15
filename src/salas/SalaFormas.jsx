import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fundo from '../assets/salaFormas.png';
import circulo from '../assets/circulo.png';
import triangulo from '../assets/triangulo.png';
import quadrado from '../assets/quadrado.png';

export default function SalaFormas() {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [descobertas, setDescobertas] = useState([]);
  const [pegando, setPegando] = useState(null);
  const [encaixadas, setEncaixadas] = useState([]);
  const [posicoesFixas, setPosicoesFixas] = useState({});
  const formas = ['circulo', 'triangulo', 'quadrado'];

  // Coordenadas de onde as formas aparecem — aleatorizadas a cada render
  const [coordenadasDescoberta] = useState(() => {
    const gerar = () => ({
      x: Math.floor(Math.random() * 60 + 20), 
      y: Math.floor(Math.random() * 40 + 50) 
    });
    return {
      circulo: gerar(),
      triangulo: gerar(),
      quadrado: gerar()
    };
  });

  // Locais fixos para encaixar
  const posicoesAlvo = {
    pos1: { x: 26.9, y: 25.5 }, // Triângulo
    pos2: { x: 41.2, y: 25 }, // Círculo
    pos3: { x: 55.8, y: 25.5 }  // Quadrado
  };

  // Qual forma pertence a qual posição
  const ordemCorreta = {
    triangulo: 'pos1',
    circulo: 'pos2',
    quadrado: 'pos3'
  };

  useEffect(() => {
    const moverLanterna = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });

      formas.forEach((forma) => {
        const { x: fx, y: fy } = coordenadasDescoberta[forma];
        const dx = x - fx;
        const dy = y - fy;
        const distancia = Math.sqrt(dx * dx + dy * dy);
        if (distancia < 6 && !descobertas.includes(forma)) {
          setDescobertas((prev) => [...prev, forma]);
        }
      });
    };

    window.addEventListener('mousemove', moverLanterna);
    return () => window.removeEventListener('mousemove', moverLanterna);
  }, [descobertas, coordenadasDescoberta]);

  const handleClickForma = (forma) => {
    if (encaixadas.includes(forma)) return;

    if (!pegando) {
      setPegando(forma);
    } else if (pegando === forma) {
      setPegando(null);
    } else {
      setPegando(forma);
    }
  };

  useEffect(() => {
    if (encaixadas.length === formas.length) {
      setTimeout(() => navigate('/SalaPorao'), 1500);
    }
  }, [encaixadas]);

  const imagens = { circulo, triangulo, quadrado };

  return (
    <div
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Lanterna */}
      <div
        className="lanterna"
        style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,200,0.6) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          top: `${mousePos.y}%`,
          left: `${mousePos.x}%`,
          zIndex: 2
        }}
      />

      {/* Formas descobertas */}
      {descobertas.map((forma) => {
        const estaEncaixada = encaixadas.includes(forma);
        const pos = estaEncaixada
          ? posicoesAlvo[ordemCorreta[forma]]
          : coordenadasDescoberta[forma];

        return (
          <img
            key={forma}
            src={imagens[forma]}
            alt={forma}
            onClick={() => handleClickForma(forma)}
            style={{
              position: 'absolute',
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              width: '75px',
              cursor: estaEncaixada ? 'default' : 'pointer',
              opacity: pegando === forma ? 0.8 : 1,
              zIndex: 3,
              transition: 'all 0.3s ease'
            }}
          />
        );
      })}

      
      {Object.entries(posicoesAlvo).map(([posKey, pos]) => (
        <div
          key={posKey}
          onClick={() => {
            const formaEsperada = Object.entries(ordemCorreta).find(
              ([_, valor]) => valor === posKey
            )?.[0];

            if (
              pegando === formaEsperada &&
              !encaixadas.includes(pegando)
            ) {
              setPosicoesFixas((prev) => ({ ...prev, [pegando]: pos }));
              setEncaixadas((prev) => [...prev, pegando]);
              setPegando(null);
            }
          }}
          style={{
            position: 'absolute',
            top: `${pos.y}%`,
            left: `${pos.x}%`,
            width: '60px',
            height: '60px',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            pointerEvents: 'auto',
            backgroundColor: 'transparent'
          }}
        />
      ))}

      {/* Rodapé com dica */}
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
        {encaixadas.length === formas.length
          ? 'A forma revela o caminho...'
          : pegando
            ? 'O que fazer com isso?'
            : 'Algo está escondido aqui.'}
      </div>
    </div>
  );
}
