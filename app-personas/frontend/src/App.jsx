import { useEffect, useState } from 'react';
import PersonaForm from './components/PersonaForm';
import PersonaList from './components/PersonaList';

const API_URL = 'http://localhost:5001/api/persona';

export default function App() {
  const [personas, setPersonas] = useState([]);
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);

  useEffect(() => {
    fetchPersonas();
  }, []);

  const fetchPersonas = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setPersonas(data);
  };

  const guardarPersona = async (persona) => {
    if (persona.id) {
      await fetch(`${API_URL}/${persona.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(persona),
      });
    } else {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(persona),
      });
    }
    setPersonaSeleccionada(null);
    fetchPersonas();
  };

  const eliminarPersona = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchPersonas();
  };

  return (
    <div>
      <h1>Gestión de Personas</h1>
      <PersonaForm personaSeleccionada={personaSeleccionada} onGuardar={guardarPersona} />
      <PersonaList personas={personas} onEditar={setPersonaSeleccionada} onEliminar={eliminarPersona} />
    </div>
  );
}

