import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBox, faDollarSign, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const Inicio = () => {
    const [clientesRegistrados, setClientesRegistrados] = useState(0);
    const [productosDisponibles, setProductosDisponibles] = useState(0);
    const [cuotasRegistradas, setCuotasRegistradas] = useState(0);
    const [ingresosTotales, setIngresosTotales] = useState(0);

    useEffect(() => {
        // Obtener datos de localStorage
        const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        const productos = JSON.parse(localStorage.getItem('productos')) || [];
        const cuotas = JSON.parse(localStorage.getItem('cuotas')) || [];

        // Calcular ingresos totales
        const ingresos = cuotas.reduce((acc, cuota) => acc + cuota.monto_total, 0);

        // Actualizar estados
        setClientesRegistrados(clientes.length);
        setProductosDisponibles(productos.length);
        setCuotasRegistradas(cuotas.length);
        setIngresosTotales(ingresos);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="w-full max-w-screen-lg mx-auto mb-8">
                <h1 className="text-4xl font-bold text-gray-700">Gestión de Cobranzas</h1>
                <p className="text-gray-500">Controla tus clientes, productos y pagos de manera eficiente.</p>
            </div>
            <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-2">Clientes Registrados</h2>
                    <FontAwesomeIcon icon={faUsers} className="text-3xl mb-4 text-gray-500" />
                    <p className="text-4xl">{clientesRegistrados}</p>
                </div>
                <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-2">Productos Disponibles</h2>
                    <FontAwesomeIcon icon={faBox} className="text-3xl mb-4 text-gray-500" />
                    <p className="text-4xl">{productosDisponibles}</p>
                </div>
                <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-2">Cuotas Registradas</h2>
                    <FontAwesomeIcon icon={faClipboardList} className="text-3xl mb-4 text-gray-500" />
                    <p className="text-4xl">{cuotasRegistradas}</p>
                </div>
                <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-2">Ingresos Totales</h2>
                    <FontAwesomeIcon icon={faDollarSign} className="text-3xl mb-4 text-gray-500" />
                    <p className="text-4xl">{ingresosTotales.toLocaleString()} Bs</p>
                </div>
            </div>
        </div>
    );
};

export default Inicio;



