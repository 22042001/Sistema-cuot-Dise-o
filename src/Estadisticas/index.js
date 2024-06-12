import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const Estadisticas = () => {
    // Datos aleatorios para cuotas pendientes y pagadas
    const cuotasData = {
        labels: ['Cuotas Pendientes', 'Cuotas Pagadas'],
        datasets: [
            {
                label: 'Cuotas',
                data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB'],
            },
        ],
    };

    // Datos aleatorios para ingresos totales por mes
    const ingresosData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: 'Ingresos Totales (Bs)',
                data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 10000)),
                borderColor: '#36A2EB',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="w-full max-w-screen-lg mx-auto mb-8">
                <h1 className="text-4xl font-bold text-gray-700">Estadísticas</h1>
                <p className="text-gray-500">Visualiza las estadísticas clave del sistema de cobranzas.</p>
            </div>
            <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 gap-6">
                <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Cuotas Pendientes vs. Cuotas Pagadas</h2>
                    <Bar data={cuotasData} />
                </div>
                <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Cuotas Pendientes vs. Cuotas Pagadas (Pastel)</h2>
                    <Pie data={cuotasData} />
                </div>
                <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Ingresos Totales por Mes</h2>
                    <Line data={ingresosData} />
                </div>
            </div>
        </div>
    );
};

export default Estadisticas;
