import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const DetallePago = () => {
    const location = useLocation();
    const { usuario, producto, monto } = location.state || {};

    const [formaPago, setFormaPago] = useState('');

    const handleFormaPagoChange = (forma) => {
        setFormaPago(forma);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-gray-700 mb-8">Detalle de Pago</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <p><strong>Usuario:</strong> {usuario}</p>
                <p><strong>Monto a Pagar:</strong> {monto} Bs</p>
                <p><strong>Producto:</strong> {producto}</p>

                <h3 className="text-xl font-bold mt-6 mb-2">Selecciona tu forma de pago</h3>
                <div className="flex items-center justify-around">
                    <img 
                        src="/qr2.jpg"
                        alt="QR" 
                        className={`cursor-pointer p-4 border ${formaPago === 'qr' ? 'border-blue-500' : 'border-gray-300'} rounded-lg`} 
                        onClick={() => handleFormaPagoChange('qr')} 
                        style={{ maxWidth: '150px' }}
                    />
                </div>
                

                {/* Aquí puedes agregar más lógica para manejar el proceso de pago basado en la forma de pago seleccionada */}
            </div>
        </div>
    );
};

export default DetallePago;
