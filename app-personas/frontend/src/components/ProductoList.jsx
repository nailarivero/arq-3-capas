export default function ProductoList({ productos, onEditar, onEliminar }) {
return (
<div>
<h2>Lista de Productos</h2>
<ul>
{productos.map((p) => (
<li key={p.id}>
{p.nombre} - {p.descripcion} - ${p.precio}
<button onClick={() => onEditar(p)}>Editar</button>
<button onClick={() => onEliminar(p.id)}>Eliminar</button>
</li>
))}
</ul>
</div>
);
}