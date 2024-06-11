import React, { useEffect } from 'react';
import { Obtenerproductos } from '../../../Servicios/servicio.productos';

const CardProducto = ({ nombre, descripcion, precio }) => {
    const [producto, setProductos] = React.useState([]);
    const productos= async ()=>{
        const productos = await Obtenerproductos();
        return productos
    }
    useEffect( ()=>{
        productos().then((productos)=>{
            setProductos(productos.productos)
        })

    }, []);
    console.log(producto)
    
    return (
        producto.map((producto) => (    
         <div key={producto.id} className="bg-white shadow-md rounded-lg p-6 mb-4 flex flex-col">
        <h2 className="text-xl font-bold mb-2">{producto.nombreProducto}</h2>
        <p className="mb-2"><strong>Descripcion:</strong> {producto.descripcion}</p>
        <p><strong>Precio Unitario:</strong> {producto.precio}</p>
    </div>
    )))
}

export default CardProducto;