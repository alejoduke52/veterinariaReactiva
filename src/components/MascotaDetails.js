import React, { useContext } from 'react';
import { MascotaContext } from '../contexts/MascotaContext';

const MascotaDetails = ({ mascota }) => {
  const { dispatch } = useContext(MascotaContext);
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_MASCOTA', id: mascota.id })}>
      <div className="nombre">{mascota.nombre}</div>
      <div className="sexo">{mascota.sexo}</div>
      <div className="edad">{mascota.edad}</div>
      <div className="tipo">{mascota.tipo}</div>
      <div className="servicio">{mascota.servicio}</div>
    </li>
  );
}

export default MascotaDetails;