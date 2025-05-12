import React, { useState, useEffect } from 'react';
import ProductoForm from './components/ProductoForm';
import ProductoList from './components/ProductoList';

const API_URL = 'http://localhost:5001/api/producto';

function App() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setProductos(data);
  };

  const guardarProducto = async (producto) => {
    const metodo = producto.id ? 'PUT' : 'POST';
    const url = producto.id ? `${API_URL}/${producto.id}` : API_URL;

    await fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto),
    });

    setProductoSeleccionado(null);
    fetchProductos();
  };

  const eliminarProducto = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchProductos();
  };

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <ProductoForm productoSeleccionado={productoSeleccionado} onGuardar={guardarProducto} />
      <ProductoList productos={productos} onEditar={setProductoSeleccionado} onEliminar={eliminarProducto} />
    </div>
  );
}

export default App;

