import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InfoClien = ({ cliente }) => {
    const [productos, setProductos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedCuotas = JSON.parse(localStorage.getItem('cuotas')) || [];
        const productosCliente = storedCuotas
            .filter(cuota => cuota.clienteId === cliente.id)
            .map(cuota => {
                const storedProductos = JSON.parse(localStorage.getItem('productos')) || [];
                const producto = storedProductos.find(p => p.id === cuota.productoId);
                if (producto) {
                    return {
                        ...producto,
                        cuotasTotales: cuota.cantidadCuotas,
                        cuotasPendientes: cuota.cantidadCuotas - (cuota.pagadas || 0) // Suponiendo que hay un campo "pagadas" que contiene las cuotas pagadas
                    };
                }
                return null;
            })
            .filter(producto => producto); // Remove undefined values
        setProductos(productosCliente);
    }, [cliente]);

    if (!cliente) return <p>Selecciona un cliente para ver su información.</p>;

    const handlePagoClick = (producto) => {
        const clienteData = {
            id: cliente.id,
            nombre: cliente.nombre,
            producto,
        };
        navigate('/formulario-pago', { state: clienteData });
    };

    const filteredProductos = productos.filter(producto =>
        producto.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Información del Cliente</h2>
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block font-semibold">Carnet de Identidad</label>
                    <p className="border p-2 rounded">{cliente.carnet}</p>
                </div>
                <div>
                    <label className="block font-semibold">Nombre</label>
                    <p className="border p-2 rounded">{cliente.nombre}</p>
                </div>
                <div>
                    <label className="block font-semibold">Apellidos</label>
                    <p className="border p-2 rounded">{cliente.apellidos}</p>
                </div>
                <div>
                    <label className="block font-semibold">Email</label>
                    <p className="border p-2 rounded">{cliente.email}</p>
                </div>
                <div>
                    <label className="block font-semibold">Celular</label>
                    <p className="border p-2 rounded">{cliente.celular}</p>
                </div>
                <div>
                    <label className="block font-semibold">Dirección</label>
                    <p className="border p-2 rounded">{cliente.direccion}</p>
                </div>
                <div>
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2">Producto</th>
                                <th className="py-2">Cuotas Totales</th>
                                <th className="py-2">Cuotas Pendientes</th>
                                <th className="py-2">Acciones</th>
                            </tr>
                            <tr>
                                <th colSpan="4">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="border p-2 rounded w-full"
                                        placeholder="Buscar Producto"
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProductos.map((producto, index) => (
                                <tr key={index} className="text-center">
                                    <td className="py-2 border">{producto.Nombre}</td>
                                    <td className="py-2 border">{producto.cuotasTotales}</td>
                                    <td className="py-2 border">{producto.cuotasPendientes}</td>
                                    <td className="py-2 border">
                                        <button
                                            onClick={() => handlePagoClick(producto)}
                                            className="bg-blue-500 text-white px-4 py-2 rounded"
                                        >
                                            Ir a Pago
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InfoClien;