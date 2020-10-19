import React, { useContext } from 'react';
import MascotaDetails from './MascotaDetails';
import { MascotaContext } from '../contexts/MascotaContext';

const MascotaList = () => {
  const { mascotas } = useContext(MascotaContext);
  return mascotas.length ? (
    <div className="mascota-list">
      <ul>
        {mascotas.map(mascota => {
          return ( <MascotaDetails mascota={mascota} key={mascota.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No hay mascotas todavía, agrega algunas</div>
  );
}

export default MascotaList;