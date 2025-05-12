export default function PersonaList({ personas, onEditar, onEliminar }) {
  return (
    <div>
      <h2>Lista de Personas</h2>
      <ul>
        {personas.map((p) => (
          <li key={p.id}>
            {p.nombre} {p.apellido}, {p.edad} años
            <button onClick={() => onEditar(p)}>Editar</button>
            <button onClick={() => onEliminar(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
