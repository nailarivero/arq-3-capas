import { useState, useEffect } from 'react';

export default function ProductoForm({ productoSeleccionado, onGuardar }) {
const [producto, setProducto] = useState({ nombre: '', descripcion: '', precio: '' });

useEffect(() => {
if (productoSeleccionado) setProducto(productoSeleccionado);
}, [productoSeleccionado]);

const handleChange = (e) => {
const { name, value } = e.target;
setProducto({ ...producto, [name]: value });
};

const handleSubmit = (e) => {
e.preventDefault();
onGuardar(producto);
setProducto({ nombre: '', descripcion: '', precio: '' });
};

return (
<form onSubmit={handleSubmit}>
<h2>{productoSeleccionado ? 'Editar' : 'Agregar'} Producto</h2>
<input name="nombre" placeholder="Nombre" value={producto.nombre} onChange={handleChange} required />
<input name="descripcion" placeholder="Descripción" value={producto.descripcion} onChange={handleChange} required />
<input name="precio" type="number" step="0.01" placeholder="Precio" value={producto.precio} onChange={handleChange} required />
<button type="submit">Guardar</button>
</form>
);
}