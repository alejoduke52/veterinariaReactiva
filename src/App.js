import React from 'react';
import Navbar from './components/Navbar';
import MascotaContextProvider from './contexts/MascotaContext';
import MascotaList from './components/MascotaList';
import NewMascotaForm from './components/NewMascotaForm';

function App() {
  return (
    <div className="App">
      <MascotaContextProvider>
        <Navbar />
        <MascotaList />
        <NewMascotaForm />
      </MascotaContextProvider>
    </div>
  );
}

export default App;
