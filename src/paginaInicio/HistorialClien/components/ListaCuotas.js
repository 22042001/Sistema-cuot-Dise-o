import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardCuota from './CardCuota';

const ListaCuotas = () => {
    const [clientes, setClientes] = useState([]);
    const [cuotas, setCuotas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Clientes y cuotas predefinidos para demostración
        const predefinidosClientes = [
            { id: '1', nombre: 'Juan', apellidos: 'Perez', email: 'juan@example.com', telefono: '123456789' },
            { id: '2', nombre: 'Maria', apellidos: 'Lopez', email: 'maria@example.com', telefono: '987654321' },
            { id: '3', nombre: 'Carlos', apellidos: 'Martinez', email: 'carlos@example.com', telefono: '456789012' },
        ];
        const predefinidosCuotas = [
            { id: '1', clienteId: '1', montoTotal: 1200, producto: 'Celular', cuotasTotales: 12, cuotasPagadas: 6 },
            { id: '2', clienteId: '2', montoTotal: 800, producto: 'Laptop', cuotasTotales: 8, cuotasPagadas: 3 },
            { id: '3', clienteId: '3', montoTotal: 1000, producto: 'Tablet', cuotasTotales: 10, cuotasPagadas: 5 },
        ];
        setClientes(predefinidosClientes);
        setCuotas(predefinidosCuotas);
    }, []);

    const handleMoreInfo = (cuotaId) => {
        navigate(`/detalle-cuota/${cuotaId}`);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen flex flex-col">
            <h1 className="text-4xl font-bold text-gray-700 mb-8">Historial de Cuotas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cuotas.map((cuota) => {
                    const cliente = clientes.find(c => c.id === cuota.clienteId);
                    return (
                        <CardCuota 
                            key={cuota.id}
                            cuota={cuota}
                            cliente={cliente}
                            onMoreInfo={handleMoreInfo}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ListaCuotas;
