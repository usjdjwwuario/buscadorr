import React, { useState } from 'react';

const Buscador = ({ onBuscar }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const handleInputChange = (event) => {
    const nuevoTermino = event.target.value;
    setTerminoBusqueda(nuevoTermino);
    onBuscar(nuevoTermino);
  };

  return (
    <div>
      <label>Buscar:</label>
      <input
        type="text"
        value={terminoBusqueda}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Buscador;