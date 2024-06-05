import React from 'react';

const CardProducto = ({ nombre, descripcion, precio }) => (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 flex flex-col">
        <h2 className="text-xl font-bold mb-2">{nombre}</h2>
        <p className="mb-2"><strong>Descripcion:</strong> {descripcion}</p>
        <p><strong>Precio Unitario:</strong> {precio}</p>
    </div>
);

export default CardProducto;