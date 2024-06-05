import React, { useState, useEffect } from 'react';
import CardProducto from './components/cardProducto';

const VistaRegistroProducto = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const storedProductos = JSON.parse(localStorage.getItem('productos')) || [];
        setProductos(storedProductos);
    }, []);

    return (
        <div className="p-8 bg-gray-100 min-h-screen flex flex-col">
            <h1 className="text-4xl font-bold text-gray-700 mb-8">Lista de Productos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productos.map((producto, index) => (
                    <CardProducto 
                        key={index}
                        nombre={producto.Nombre} // Asegúrate de que el nombre del producto esté en la propiedad correcta
                        descripcion={producto.Descripcion}
                        precio={producto.Precio_Unitario}
                    />
                ))}
            </div>
        </div>
    );
};

export default VistaRegistroProducto;
