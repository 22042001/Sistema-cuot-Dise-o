import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FormuPago = () => {
    const location = useLocation();
    const [cliente, setCliente] = useState(location.state || {});
    const [cuotas, setCuotas] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [numCuotas, setNumCuotas] = useState(1);

    useEffect(() => {
        const storedCuotas = JSON.parse(localStorage.getItem('cuotas')) || [];
        const clienteCuotas = storedCuotas.filter(cuota => cuota.clienteId === cliente.id);
        setCuotas(clienteCuotas);
    }, [cliente]);

    const totalPagar = cuotas.reduce((sum, cuota) => sum + parseFloat(cuota.montoTotal), 0).toFixed(2);
    const cuotasPendientes = cuotas.reduce((sum, cuota) => sum + parseInt(cuota.cantidadCuotas, 10), 0);
    const montoCuotaPendiente = cuotasPendientes > 0 ? (totalPagar / cuotasPendientes).toFixed(2) : 0;

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCuotasChange = (event) => {
        setNumCuotas(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Pago realizado:', {
            cliente,
            selectedOption,
            totalPagar,
            montoCuotaPendiente,
            numCuotas: selectedOption === 'cuota' ? numCuotas : cuotasPendientes
        });
    };

    return (
        <div className="p-8 bg-white flex flex-col justify-center min-h-screen">
            <div className="w-full max-w-screen-lg mx-auto">
                <h1 className="text-4xl font-bold text-gray-700 mb-4">TOTAL A PAGAR</h1>
                <p className="text-2xl mb-4 text-center">Bs {parseFloat(totalPagar)}</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-semibold">Nombre Cliente</label>
                        <p className="border p-2 rounded">{cliente.nombre}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">Cuotas pendientes</label>
                        <p className="border p-2 rounded">{cuotasPendientes}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">Monto cuota pendiente (más antigua)</label>
                        <p className="border p-2 rounded">Bs {parseFloat(montoCuotaPendiente)}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">Opciones de pago</label>
                        <div className="mb-2 flex items-center">
                            <input
                                type="radio"
                                value="total"
                                checked={selectedOption === 'total'}
                                onChange={handleOptionChange}
                            />
                            <label className="ml-2">
                                Pagar su deuda total (Bs {parseFloat(totalPagar)})
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                value="cuota"
                                checked={selectedOption === 'cuota'}
                                onChange={handleOptionChange}
                            />
                            <label className="ml-2">
                                Cuota antigua a pagar
                            </label>
                        </div>
                        {selectedOption === 'cuota' && (
                            <div className="mt-2">
                                <label className="block font-semibold">Seleccionar cantidad de cuotas a pagar</label>
                                <select
                                    value={numCuotas}
                                    onChange={handleCuotasChange}
                                    className="border p-2 rounded w-full"
                                >
                                    {[...Array(cuotasPendientes).keys()].map(i => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Realizar Pago
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormuPago;