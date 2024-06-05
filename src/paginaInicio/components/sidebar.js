import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken'); 
        navigate('/login'); 
    };

    return (
        <div className={`h-full w-64 bg-gray-900 text-white fixed top-0 left-0 flex flex-col p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold mr-4">SIS_COBRANZA</h2>
                <button onClick={toggleSidebar} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <ul>
                <li className="mb-2">
                    <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">INICIO</Link>
                </li>
                <li className="mb-2">
                    <Link to="/registrar-cliente-formulario" className="text-gray-400 hover:text-white transition-colors duration-200">REGISTRAR CLIENTE</Link>
                </li>
                <li className="mb-2">
                    <Link to="/lista-clientes" className="text-gray-400 hover:text-white transition-colors duration-200">LISTA CLIENTES</Link>
                </li>
                <li className="mb-2">
                    <Link to="/registrar-producto-formulario" className="text-gray-400 hover:text-white transition-colors duration-200">REGISTRAR PRODUCTO</Link>
                </li>
                <li className="mb-2">
                    <Link to="/lista-productos" className="text-gray-400 hover:text-white transition-colors duration-200">LISTA PRODUCTOS</Link>
                </li>
                <li className="mb-2">
                    <Link to="/formulario-pago" className="text-gray-400 hover:text-white transition-colors duration-200">FORMULARIO PAGO</Link>
                </li>
                <li className="mb-2">
                    <Link to="/registrar-cuotas" className="text-gray-400 hover:text-white transition-colors duration-200">REGISTRAR CUOTAS</Link>
                </li>
                <li className="mb-2">
                    <Link to="/historial-pagos" className="text-gray-400 hover:text-white transition-colors duration-200">HISTORIAL DE PAGOS</Link>
                </li>
               
            </ul>
            <button
                onClick={handleLogout}
                className="mt-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Cerrar Sesión
            </button>
        </div>
    );
};

export default Sidebar;


