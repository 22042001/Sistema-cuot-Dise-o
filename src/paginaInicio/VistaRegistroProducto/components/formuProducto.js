import React, { useState } from 'react';

const FormuProducto = () => {
    const [formData, setFormData] = useState({
        id: '',
        Nombre: '',
        Descripcion: '',
        Precio_Unitario: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const storedProductos = JSON.parse(localStorage.getItem('productos')) || [];
        formData.id = String(storedProductos.length + 1); // Asignar un ID único
        storedProductos.push(formData);
        localStorage.setItem('productos', JSON.stringify(storedProductos));
        console.log(formData);
    };

    return (
        <div className="p-8 bg-white flex flex-col justify-center min-h-screen">
            <div className="w-full max-w-screen-lg mx-auto">
                <h1 className="text-4xl font-bold text-gray-700 mb-4">Registrar Producto</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                    <div>
                        <label className="block font-semibold mb-2">Nombre</label>
                        <input
                            type="text"
                            name="Nombre"
                            value={formData.Nombre}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Descripcion</label>
                        <textarea
                            name="Descripcion"
                            value={formData.Descripcion}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Precio Unitario</label>
                        <input
                            type="number"
                            name="Precio_Unitario"
                            value={formData.Precio_Unitario}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormuProducto;
