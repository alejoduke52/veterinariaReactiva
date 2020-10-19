import uuid from 'uuid/v4';

export const MascotaReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MASCOTA':
      return [...state, {
        nombre: action.mascota.nombre, 
        sexo: action.mascota.sexo,
        edad: action.mascota.edad,
        tipo: action.mascota.tipo,
        servicio: action.mascota.servicio,
        id: uuid()}
      ]
    case 'REMOVE_MASCOTA':
      return state.filter(mascota => mascota.id !== action.id);
    default:
      return state;
  }
} 