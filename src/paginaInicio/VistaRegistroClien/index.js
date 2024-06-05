import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './components/cards';

const VistaRegistroClien = () => {
    const navigate = useNavigate();

    const handlePay = (cliente) => {
        alert(`Pay for: ${cliente.nombre}\nCarnet: ${cliente.carnet}`);
    };

    const handleAdd = (cliente) => {
        alert(`Add for: ${cliente.nombre}\nCarnet: ${cliente.carnet}`);
    };

    const handleEdit = (cliente) => {
        alert(`Edit: ${cliente.nombre}\nCarnet: ${cliente.carnet}`);
    };

    const handleDelete = (cliente) => {
        alert(`Delete: ${cliente.nombre}\nCarnet: ${cliente.carnet}`);
    };

    const clientes = [
        { id: '1', carnet: '12345678', nombre: 'Juan Perez', apellidos: 'Perez', email: 'juan@example.com', celular: '123456789', direccion: 'Calle Falsa 123', productos: 'Producto 1, Producto 2' },
        { id: '2', carnet: '87654321', nombre: 'Maria Lopez', apellidos: 'Lopez', email: 'maria@example.com', celular: '987654321', direccion: 'Calle Verdadera 456', productos: 'Producto 3, Producto 4' },
        { id: '3', carnet: '45678901', nombre: 'Carlos Martinez', apellidos: 'Martinez', email: 'carlos@example.com', celular: '456789012', direccion: 'Calle Inventada 789', productos: 'Producto 5, Producto 6' },
        // Agrega más clientes según sea necesario
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen flex flex-col">
            <h1 className="text-4xl font-bold text-gray-700 mb-8">Lista de Clientes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clientes.map((cliente, index) => (
                    <Card 
                        key={index}
                        id={cliente.id}
                        title={`Cliente ${index + 1}`}
                        carnet={cliente.carnet}
                        nombre={cliente.nombre}
                        onPay={() => handlePay(cliente)}
                        onEdit={() => handleEdit(cliente)}
                        onDelete={() => handleDelete(cliente)}
                    />
                ))}
            </div>
        </div>
    );
};

export default VistaRegistroClien;
