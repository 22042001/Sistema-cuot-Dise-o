import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DetalleCuota = () => {
    const navigate = useNavigate();

    const cuota = {
        producto: 'Celular',
        montoTotal: 1200,
        cuotasTotales: 12,
        cuotasPagadas: 6,
    };

    const cuotasPendientes = cuota.cuotasTotales - cuota.cuotasPagadas;
    const [selectedCuotas, setSelectedCuotas] = useState([]);

    const handleCheckboxChange = (index) => {
        setSelectedCuotas(prevSelected => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter(i => i !== index);
            } else {
                return [...prevSelected, index];
            }
        });
    };

    const handlePagar = () => {
        navigate('/historial-de-pagos/detalle-pago', {
            state: {
                usuario: 'Usuario Ejemplo',
                producto: cuota.producto,
                monto: (selectedCuotas.length * (cuota.montoTotal / cuota.cuotasTotales)).toFixed(2),
                cuotasSeleccionadas: selectedCuotas
            }
        });
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold text-gray-700">Detalle de Cuota</h1>
                <button
                    onClick={handlePagar}
                    className="bg-lime-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition duration-300"
                >
                    Pagar
                </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{cuota.producto}</h2>

                <h3 className="text-xl font-bold mt-6 mb-2">Tabla de Cuotas</h3>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2">Seleccionar</th>
                            <th className="py-2">Fecha Límite de Pago</th>
                            <th className="py-2">Monto a Pagar</th>
                            <th className="py-2">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: cuotasPendientes }, (_, i) => (
                            <tr key={i}>
                                <td className="py-2 border">
                                    <input
                                        type="checkbox"
                                        checked={selectedCuotas.includes(i)}
                                        onChange={() => handleCheckboxChange(i)}
                                    />
                                </td>
                                <td className="py-2 border">{new Date().toLocaleDateString()}</td>
                                <td className="py-2 border">{(cuota.montoTotal / cuota.cuotasTotales).toFixed(2)} Bs</td>
                                <td className="py-2 border">Pendiente</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3 className="text-xl font-bold mt-6 mb-2">Resumen</h3>
                <p><strong>Total a Pagar:</strong> {(selectedCuotas.length * (cuota.montoTotal / cuota.cuotasTotales)).toFixed(2)} Bs</p>
            </div>
        </div>
    );
};

export default DetalleCuota;
