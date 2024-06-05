import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PaginaInicio from './paginaInicio';
import VistaRegistroClien from './paginaInicio/VistaRegistroClien';
import FormuClien from './paginaInicio/VistaRegistroClien/components/formuClien';
import FormuProducto from './paginaInicio/VistaRegistroProducto/components/formuProducto';
import VistaRegistroProducto from './paginaInicio/VistaRegistroProducto';
import FormuPago from './paginaInicio/VistaRegistroPagos/components/formuPagos';
import InfoClienPage from './paginaInicio/VistaRegistroClien/infoClienPagina';
import VistaRegistroCuotas from './paginaInicio/VistaRegistroCuotas';
import Sidebar from './paginaInicio/components/sidebar';
import ListaCuotas from './paginaInicio/HistorialClien/components/ListaCuotas';
import DetalleCuota from './paginaInicio/HistorialClien/components/DetalleCuota';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex-1 transition-transform transform ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          {!isSidebarOpen && (
            <button 
              onClick={toggleSidebar} 
              className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          )}
          <Routes>
            <Route path="/" element={<PaginaInicio />} />
            <Route path="/registrar-cliente" element={<VistaRegistroClien />} />
            <Route path="/registrar-cliente-formulario" element={<FormuClien />} />
            <Route path="/lista-clientes" element={<VistaRegistroClien />} />
            <Route path="/registrar-producto-formulario" element={<FormuProducto />} />
            <Route path="/lista-productos" element={<VistaRegistroProducto />} />
            <Route path="/formulario-pago" element={<FormuPago />} />
            <Route path="/informacion-cliente/:clienteId" element={<InfoClienPage />} />
            <Route path="/registrar-cuotas" element={<VistaRegistroCuotas />} />
            <Route path="/historial-pagos" element={<ListaCuotas />} />
            <Route path="/detalle-cuota/:cuotaId" element={<DetalleCuota />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

