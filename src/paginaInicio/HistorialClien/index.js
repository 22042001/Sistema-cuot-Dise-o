import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListaCuotas from './components/ListaCuotas';
import DetalleCuota from './components/DetalleCuota';

const HistorialClien = () => {
    return (
        <Routes>
            <Route path="/" element={<ListaCuotas />} />
            <Route path="/detalle-cuota/:cuotaId" element={<DetalleCuota />} />
        </Routes>
    );
};

export default HistorialClien;
