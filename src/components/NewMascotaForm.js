import React, { useContext, useState } from 'react';
import { MascotaContext } from '../contexts/MascotaContext';

const NewMascotaForm = () => {
  const { dispatch } = useContext(MascotaContext);
  const [nombre, setNombre] = useState('');
  const [sexo, setSexo] = useState('');
  const [edad, setEdad] = useState('');
  const [tipo, setTipo] = useState('');
  const [servicio, setServicio] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_MASCOTA', mascota: { nombre, sexo, edad, tipo, servicio }});
    setNombre('');
    setSexo('');
    setEdad('');
    setTipo('');
    setServicio('');
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre de la Mascota" value={nombre}
        onChange={(e) => setNombre(e.target.value)} required />
      
      <legend>Género de la Mascota</legend>
          <label>
            Macho
            <input
              type="radio"
              name="sexo"
              value={"macho"}
              onChange={(e) => setSexo(e.target.value) } 
            />
          </label>
          <label>
            Hembra
            <input
              type="radio"
              name="sexo"
              value={"hembra"}
              onChange={(e) => setSexo(e.target.value)}
            />
          </label>

        <input type="text" placeholder="Edad de la Mascota" value={edad}
        onChange={(e) => setEdad(e.target.value)} required />

        <div>

          <label htmlFor="tipo">¿Cual es el tipo de Mascota que tienes?</label>
            <select
                name="tipo"
                onChange={(e) => setTipo(e.target.value)}
            >

              <option value={""}>- Selecciona el Tipo -</option>
              <option value={"Perro"}>Perro</option>
              <option value={"Gato"}>Gato</option>
              <option value={"Hámster"}>Hámster</option>
              <option value={"Ave"}>Ave</option>

            </select>
        
          </div>
        
        <div>
          <label htmlFor="servicio">¿Cuál es el servicio que Requiere tu Mascota?</label>

            <select
                name="servicio"
                onChange={(e) => setServicio(e.target.value)}
            >

                <option value={""}>- Selecciona el Servicio -</option>
                <option value={"Valoración"}>Valoración</option>
                <option value={"Urgencias"}>Urgencias</option>
                <option value={"Hospitalización"}>Hospitalización</option>
              
              
            </select>
          </div>
          <input type="submit" value="Agregar Nueva Mascota" />




    </form>
  );
}
 
export default NewMascotaForm;