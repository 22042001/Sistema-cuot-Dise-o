import React from 'react';
import { useParams } from 'react-router-dom';
import InfoClien from './components/infoClien';

const InfoClienPage = () => {
    const { clienteId } = useParams();

    const clientes = [
        { id: '1', carnet: '12345678', nombre: 'Juan', apellidos: 'Perez', email: 'juan@example.com', telefono: '123456789', direccion: 'Calle Falsa 123', productos: 'Producto 1, Producto 2' },
        { id: '2', carnet: '87654321', nombre: 'Maria', apellidos: 'Lopez', email: 'maria@example.com', telefono: '987654321', direccion: 'Calle Verdadera 456', productos: 'Producto 3, Producto 4' },
        { id: '3', carnet: '45678901', nombre: 'Carlos', apellidos: 'Martinez', email: 'carlos@example.com', telefono: '456789012', direccion: 'Calle Inventada 789', productos: 'Producto 5, Producto 6' },
    ];

    const cliente = clientes.find(c => c.id === clienteId);

    return (
        <div className="p-8 bg-gray-100 min-h-screen flex flex-col">
            <h1 className="text-4xl font-bold text-gray-700 mb-8">Información del Cliente</h1>
            {cliente ? <InfoClien cliente={cliente} /> : <p>Cliente no encontrado</p>}
        </div>
    );
};

export default InfoClienPage;


