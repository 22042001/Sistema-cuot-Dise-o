import React from 'react';

const DetalleCuota = () => {
    // Datos estáticos para mostrar el diseño
    const cuota = {
        producto: 'Celular',
        montoTotal: 1200,
        cuotasTotales: 12,
        cuotasPagadas: 6,
    };


    const cuotasPendientes = cuota.cuotasTotales - cuota.cuotasPagadas;

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-gray-700 mb-8">Detalle de Cuota</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{cuota.producto}</h2>
                
                <h3 className="text-xl font-bold mt-6 mb-2">Tabla de Cuotas</h3>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2">Fecha Límite de Pago</th>
                            <th className="py-2">Monto Mes</th>
                            <th className="py-2">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: cuota.cuotasTotales }, (_, i) => (
                            <tr key={i}>
                                <td className="py-2 border">{new Date().toLocaleDateString()}</td>
                                <td className="py-2 border">{(cuota.montoTotal / cuota.cuotasTotales).toFixed(2)} Bs</td>
                                <td className="py-2 border">{i < cuota.cuotasPagadas ? 'Pagado' : 'Pendiente'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3 className="text-xl font-bold mt-6 mb-2">Resumen</h3>
                <p><strong>Total a Pagar:</strong> {(cuotasPendientes * (cuota.montoTotal / cuota.cuotasTotales)).toFixed(2)} Bs</p>
            </div>
        </div>
    );
};

export default DetalleCuota;
