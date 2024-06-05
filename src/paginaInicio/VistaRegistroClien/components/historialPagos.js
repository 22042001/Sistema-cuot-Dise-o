import React, { useState, useEffect } from 'react';

const HistorialPagos = () => {
    const [clientes, setClientes] = useState([]);
    const [pagos, setPagos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCliente, setSelectedCliente] = useState(null);

    useEffect(() => {
        const storedClientes = [
            { id: '1', carnet: '12345678', nombre: 'Juan Perez', apellidos: 'Perez', email: 'juan@example.com', celular: '123456789', direccion: 'Calle Falsa 123', productos: 'Producto 1, Producto 2' },
            { id: '2', carnet: '87654321', nombre: 'Maria Lopez', apellidos: 'Lopez', email: 'maria@example.com', celular: '987654321', direccion: 'Calle Verdadera 456', productos: 'Producto 3, Producto 4' },
            { id: '3', carnet: '45678901', nombre: 'Carlos Martinez', apellidos: 'Martinez', email: 'carlos@example.com', celular: '456789012', direccion: 'Calle Inventada 789', productos: 'Producto 5, Producto 6' },
            // Agrega más clientes según sea necesario
        ];
        setClientes(storedClientes);
    }, []);

    useEffect(() => {
        if (selectedCliente) {
            const storedCuotas = JSON.parse(localStorage.getItem('cuotas')) || [];
            const clientePagos = storedCuotas.filter(cuota => cuota.clienteId === selectedCliente.id);
            setPagos(clientePagos);
        }
    }, [selectedCliente]);

    const handleSearch = () => {
        const cliente = clientes.find(cliente =>
            cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cliente.carnet.includes(searchTerm)
        );
        setSelectedCliente(cliente);
    };

    return (
        <div className="p-8 bg-white shadow-md rounded-lg min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Historial de Pagos</h2>
            <div className="mb-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded w-full"
                    placeholder="Buscar Cliente por Nombre o Carnet"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                >
                    Buscar
                </button>
            </div>
            {selectedCliente ? (
                <>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">{selectedCliente.nombre}</h3>
                        <p>Carnet de Identidad: {selectedCliente.carnet}</p>
                    </div>
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2">Mes</th>
                                <th className="py-2">Monto</th>
                                <th className="py-2">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pagos.map((pago, index) => (
                                <tr key={index} className="text-center">
                                    <td className="py-2 border">{pago.mes}</td>
                                    <td className="py-2 border">{pago.monto}</td>
                                    <td className="py-2 border">
                                        {pago.pagado ? (
                                            <span className="text-green-500">Pagado</span>
                                        ) : (
                                            <span className="text-red-500">Pendiente</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <p>Ingresa un nombre o carnet de identidad para buscar el historial de pagos.</p>
            )}
        </div>
    );
};

export default HistorialPagos;