// src/evento/EventoComponente.js
import React, { useState } from 'react';
import './EventoComponente.css';

const EventoComponente = () => {
  const [imagenActual, setImagenActual] = useState(1);

  const cambiarImagen = () => {
    // Lógica para cambiar a la siguiente imagen
    const nuevaImagen = (imagenActual % 8) + 1;
    setImagenActual(nuevaImagen);
  };

  const obtenerTextoEncabezado = () => {
    if (imagenActual === 1) {
      return "La triste historia tras la evolución de Charmeleon 😓";
    } else if (imagenActual === 8) {
      return "Evolucionó para padrear a un Aerodactyl 🥹";
    } else {
      return "";
    }
  };

  const obtenerTextoBoton = () => {
    return imagenActual === 8 ? "Ver de nuevo" : "Cambiar Imagen";
  };

  return (
    <div className="centrado">
      <h1>{obtenerTextoEncabezado()}</h1>
      <img
        src={`/poke/${imagenActual}.jpeg`}
        alt={`Pokémon ${imagenActual}`}
      />
      <input type="button" value={obtenerTextoBoton()} onClick={cambiarImagen} />
    </div>
  );
};

export default EventoComponente;
