import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterButton from './boton';

const FormuClien = () => {
    const [formData, setFormData] = React.useState({
        id: '',
        Nombre: '',
        Apellidos: '',
        Contrasena: '',
        Email: '',
        Telefono: '',
        Direccion: '',
        Genero: '',
        CarnetIdentidad: '' // Nuevo campo
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const storedClientes = JSON.parse(localStorage.getItem('clientes')) || [];
        formData.id = String(storedClientes.length + 1); // Asignar un ID único
        storedClientes.push(formData);
        localStorage.setItem('clientes', JSON.stringify(storedClientes));
        console.log(formData);
        navigate('/lista-clientes'); // Navegar a la lista de clientes después del registro
    };

    return (
        <div className="p-8 bg-white flex flex-col justify-center min-h-screen">
        <div className="w-full max-w-screen-lg mx-auto">
            <h1 className="text-4xl font-bold text-gray-700 mb-4">Registro de Cliente</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <label className="block font-semibold mb-2">Carnet de Identidad</label>
                    <input
                        type="text"
                        name="CarnetIdentidad"
                        value={formData.CarnetIdentidad}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="flex flex-col">
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
                <div className="flex flex-col">
                    <label className="block font-semibold mb-2">Apellidos</label>
                    <input
                        type="text"
                        name="Apellidos"
                        value={formData.Apellidos}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="block font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="block font-semibold mb-2">Contrasena</label>
                    <input
                        type="password"
                        name="Contrasena"
                        value={formData.Contrasena}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="block font-semibold mb-2">Telefono</label>
                    <input
                        type="text"
                        name="Telefono"
                        value={formData.Telefono}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="block font-semibold mb-2">Direccion</label>
                    <input
                        type="text"
                        name="Direccion"
                        value={formData.Direccion}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="block font-semibold mb-2">Genero</label>
                    <select
                        name="Genero"
                        value={formData.Genero}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    >
                        <option value="">Selecciona</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </div>
                <div className="col-span-2 flex justify-end mt-4">
                    <RegisterButton onClick={handleSubmit} />
                </div>
            </form>
        </div>
    </div>
    );
};

export default FormuClien;
