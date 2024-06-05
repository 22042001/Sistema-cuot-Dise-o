import React, { useState } from 'react';
import axios from 'axios';

const FormularioLogin = () => {
    const [formData, setFormData] = useState({
        Nombre: '',
        Contrasena: '',
        Nombres: '',
        Apellidos: '',
        Email: '',
        Telefono: '',
        Direccion: '',
        Genero: '',
        Avatar: ''  
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isRegister, setIsRegister] = useState(false); 

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAvatarChange = (avatar) => {
        setFormData({
            ...formData,
            Avatar: avatar
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        const url = isRegister ? 'http://localhost:3001/api/users/register' : 'http://localhost:3001/api/users/login';
        try {
            const response = await axios.post(url, formData);
            console.log(response.data);
        } catch (error) {
            if (error.response) {
                setError(`Error: ${error.response.data.message}`);
            } else if (error.request) {
                setError('No response from the server. Please try again later.');
            } else {
                setError('Error: Network Error');
            }
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-4">
                    <img
                        src={formData.Avatar ? `/${formData.Avatar}` : '/avatar.png'}
                        alt="User Avatar"
                        className="rounded-full w-24 h-24"
                    />
                </div>
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">{isRegister ? 'Registrar Maestro' : 'Iniciar Sesión'}</h2>
                <form onSubmit={handleSubmit}>
                    {isRegister ? (
                        <>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="Nombres"
                                    value={formData.Nombres}
                                    placeholder="Nombres"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="Apellidos"
                                    value={formData.Apellidos}
                                    placeholder="Apellidos"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="Nombre"
                                    value={formData.Nombre}
                                    placeholder="Username"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    name="Contrasena"
                                    value={formData.Contrasena}
                                    placeholder="Password"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="Email"
                                    value={formData.Email}
                                    placeholder="Correo Electrónico"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="tel"
                                    name="Telefono"
                                    value={formData.Telefono}
                                    placeholder="Teléfono"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="Direccion"
                                    value={formData.Direccion}
                                    placeholder="Dirección"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <select
                                    name="Genero"
                                    value={formData.Genero}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    required
                                >
                                    <option value="" disabled>Seleccionar Género</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-700">Seleccionar Avatar</label>
                                <div className="flex space-x-2">
                                    {avatars.map((avatar) => (
                                        <img
                                            key={avatar}
                                            src={`/${avatar}`}
                                            alt={avatar}
                                            className={`w-12 h-12 rounded-full cursor-pointer ${formData.Avatar === avatar ? 'ring-2 ring-lime-500' : ''}`}
                                            onClick={() => handleAvatarChange(avatar)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="Nombre"
                                    value={formData.Nombre}
                                    placeholder="Usuario"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    name="Contrasena"
                                    value={formData.Contrasena}
                                    placeholder="Contraseña"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    required
                                />
                            </div>
                        </>
                    )}
                    {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                    <button
                        type="submit"
                        className={`w-full px-4 py-2 rounded-lg text-white ${loading ? 'bg-lime-400' : 'bg-lime-500 hover:bg-lime-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500`}
                        disabled={loading}
                    >
                        {loading ? 'Cargando...' : (isRegister ? 'Registrar' : 'Iniciar Sesión')}
                    </button>
                    <div className="text-center mt-4">
                        <a
                            href="#"
                            className="text-sm text-gray-600 hover:underline"
                            onClick={() => setIsRegister(!isRegister)}
                        >
                            {isRegister ? '¿Ya tienes una cuenta? Inicia Sesión' : '¿No tienes una cuenta? Regístrate'}
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormularioLogin;
