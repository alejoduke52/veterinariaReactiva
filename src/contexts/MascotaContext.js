import React, { createContext, useReducer, useEffect } from 'react';
import { MascotaReducer } from '../reducers/MascotaReducer';

export const MascotaContext = createContext();

const MascotaContextProvider = (props) => {
  const [mascotas, dispatch] = useReducer(MascotaReducer, [], () => {
    const localData = localStorage.getItem('mascotas');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('mascotas', JSON.stringify(mascotas));
  }, [mascotas]);
  return (
    <MascotaContext.Provider value={{ mascotas, dispatch }}>
      {props.children}
    </MascotaContext.Provider>
  );
}
 
export default MascotaContextProvider;