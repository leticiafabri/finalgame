import React, { useState } from 'react';
import SalaCabana from './salas/SalaCabana';
import SalaCozinha from './salas/SalaCozinha';
import SalaPorao from './salas/SalaPorao';

export default function Jogo() {
  const [salaAtual, setSalaAtual] = useState(1);
  const [inventario, setInventario] = useState([]);

  const avancarSala = () => {
    setSalaAtual(prev => prev + 1);
  };

  return (
    <div>
      <Inventario inventario={inventario} />
      {salaAtual === 1 && (
        <SalaCabana
          avancarSala={avancarSala}
          inventario={inventario}
          setInventario={setInventario}
        />
      )}
      {salaAtual === 2 && (
        <SalaCozinha
          avancarSala={avancarSala}
          inventario={inventario}
          setInventario={setInventario}
        />
      )}
      {salaAtual === 3 && (
        <SalaPorao
          inventario={inventario}
          setInventario={setInventario}
        />
      )}
    </div>
  );
}

function Inventario({ inventario }) {
  return (
    <div className="inventario">
      <h3>Inventário:</h3>
      <ul>
        {inventario.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
