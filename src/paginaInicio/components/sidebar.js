import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBox, faClipboardList, faDollarSign, faChartBar } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex items-center justify-between px-4 py-3">
                <span className="text-2xl font-bold">Menú</span>
                <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none lg:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <nav className="mt-4">
                <Link to="/" className="flex items-center px-4 py-2 mt-2 text-gray-200 hover:bg-gray-700">
                    <FontAwesomeIcon icon={faHome} className="w-5 h-5 mr-2" />
                    Inicio
                </Link>
                <Link to="/registrar-cliente" className="flex items-center px-4 py-2 mt-2 text-gray-200 hover:bg-gray-700">
                    <FontAwesomeIcon icon={faUser} className="w-5 h-5 mr-2" />
                    Registrar Cliente
                </Link>
                <Link to="/lista-clientes" className="flex items-center px-4 py-2 mt-2 text-gray-200 hover:bg-gray-700">
                    <FontAwesomeIcon icon={faUser} className="w-5 h-5 mr-2" />
                    Lista de Clientes
                </Link>
                <Link to="/registrar-producto-formulario" className="flex items-center px-4 py-2 mt-2 text-gray-200 hover:bg-gray-700">
                    <FontAwesomeIcon icon={faBox} className="w-5 h-5 mr-2" />
                    Registrar Producto
                </Link>
                <Link to="/lista-productos" className="flex items-center px-4 py-2 mt-2 text-gray-200 hover:bg-gray-700">
                    <FontAwesomeIcon icon={faBox} className="w-5 h-5 mr-2" />
                    Lista de Productos
                </Link>
                <Link to="/registrar-cuotas" className="flex items-center px-4 py-2 mt-2 text-gray-200 hover:bg-gray-700">
                    <FontAwesomeIcon icon={faClipboardList} className="w-5 h-5 mr-2" />
                    Registrar Cuotas
                </Link>
                <Link to="/historial-pagos" className="flex items-center px-4 py-2 mt-2 text-gray-200 hover:bg-gray-700">
                    <FontAwesomeIcon icon={faDollarSign} className="w-5 h-5 mr-2" />
                    Historial de Pagos
                </Link>
                <Link to="/estadisticas" className="flex items-center px-4 py-2 mt-2 text-gray-200 hover:bg-gray-700">
                    <FontAwesomeIcon icon={faChartBar} className="w-5 h-5 mr-2" />
                    Estadísticas
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
