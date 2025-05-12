import { useState, useEffect } from 'react';

export default function PersonaForm({ personaSeleccionada, onGuardar }) {
  const [persona, setPersona] = useState({ nombre: '', apellido: '', edad: '' });

  useEffect(() => {
    if (personaSeleccionada) setPersona(personaSeleccionada);
  }, [personaSeleccionada]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona({ ...persona, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar(persona);
    setPersona({ nombre: '', apellido: '', edad: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{personaSeleccionada ? 'Editar' : 'Agregar'} Persona</h2>
      <input name="nombre" placeholder="Nombre" value={persona.nombre} onChange={handleChange} required />
      <input name="apellido" placeholder="Apellido" value={persona.apellido} onChange={handleChange} required />
      <input name="edad" type="number" placeholder="Edad" value={persona.edad} onChange={handleChange} required />
      <button type="submit">Guardar</button>
    </form>
  );
}
