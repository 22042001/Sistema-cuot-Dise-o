import React, { useState, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme CSS file
import Select from 'react-select';

const FormuCuotas = () => {
    const [clientes, setClientes] = useState([
        { id: '1', nombre: 'Juan Perez' },
        { id: '2', nombre: 'Maria Lopez' },
        { id: '3', nombre: 'Carlos Martinez' }
    ]);
    const [productos, setProductos] = useState([]);
    const [formData, setFormData] = useState({
        clienteId: '',
        productos: [], // Cambiado a array para múltiples productos
        montoTotal: '',
        cantidadCuotas: '',
        fechasPago: {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    });
    const [showDateRange, setShowDateRange] = useState(false);

    useEffect(() => {
        const storedProductos = JSON.parse(localStorage.getItem('productos')) || [];
        setProductos(storedProductos);
    }, []);

    useEffect(() => {
        const selectedProducts = productos.filter(p => formData.productos.includes(p.id));
        const totalMonto = selectedProducts.reduce((sum, p) => sum + parseFloat(p.Precio_Unitario), 0);
        setFormData(prevData => ({
            ...prevData,
            montoTotal: totalMonto
        }));
    }, [formData.productos, productos]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleClienteChange = (selectedOption) => {
        setFormData(prevData => ({
            ...prevData,
            clienteId: selectedOption ? selectedOption.value : ''
        }));
    };

    const handleProductoChange = (selectedOptions) => {
        const selectedProductIds = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setFormData(prevData => ({
            ...prevData,
            productos: selectedProductIds
        }));
    };

    const handleDateRangeChange = (ranges) => {
        setFormData(prevData => ({
            ...prevData,
            fechasPago: ranges.selection
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const storedCuotas = JSON.parse(localStorage.getItem('cuotas')) || [];
        storedCuotas.push(formData);
        localStorage.setItem('cuotas', JSON.stringify(storedCuotas));
        console.log(formData);
    };

    const clienteOptions = clientes.map(cliente => ({
        value: cliente.id,
        label: cliente.nombre
    }));

    const productoOptions = productos.map(producto => ({
        value: producto.id,
        label: producto.Nombre
    }));

    return (
        <div className="p-8 bg-white flex flex-col justify-center min-h-screen">
            <div className="w-full max-w-screen-lg mx-auto">
                <h1 className="text-4xl font-bold text-gray-700 mb-4">Registrar Cuotas</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                    <div>
                        <label className="block font-semibold mb-2">Cliente</label>
                        <Select
                            options={clienteOptions}
                            onChange={handleClienteChange}
                            className="basic-single"
                            classNamePrefix="select"
                            isClearable
                            isSearchable
                            name="cliente"
                            placeholder="Buscar Cliente"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Productos</label>
                        <Select
                            options={productoOptions}
                            onChange={handleProductoChange}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            isClearable
                            isSearchable
                            isMulti
                            name="productos"
                            placeholder="Seleccionar Productos"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Monto Total</label>
                        <input
                            type="text"
                            name="montoTotal"
                            value={formData.montoTotal}
                            readOnly
                            className="border p-2 rounded w-full bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Cantidad de Cuotas</label>
                        <input
                            type="number"
                            name="cantidadCuotas"
                            value={formData.cantidadCuotas}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Fechas de Pago</label>
                        <div
                            onClick={() => setShowDateRange(!showDateRange)}
                            className="border p-2 rounded cursor-pointer"
                        >
                            {`${formData.fechasPago.startDate.toLocaleDateString()} - ${formData.fechasPago.endDate.toLocaleDateString()}`}
                        </div>
                        {showDateRange && (
                            <DateRange
                                ranges={[formData.fechasPago]}
                                onChange={handleDateRangeChange}
                                className="mt-2"
                            />
                        )}
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

export default FormuCuotas;