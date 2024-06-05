import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Card = ({ id, title, carnet, nombre, onPay, onEdit, onDelete }) => (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 flex flex-col">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-2"><strong>Carnet de Identidad:</strong> {carnet}</p>
        <p><strong>Nombre:</strong> {nombre}</p>
        <div className="mt-4 flex justify-between">
            <button
                onClick={onPay}
                className="text-black px-4 py-2 rounded hover:bg-lime-300"
            >
                <FontAwesomeIcon icon={faDollarSign} />
            </button>
            <Link to={`/info-cliente/${id}`} className="text-black px-4 py-2 rounded hover:bg-lime-300">
                <FontAwesomeIcon icon={faPlus} />
            </Link>
            <button
                onClick={onEdit}
                className="text-black px-4 py-2 rounded hover:bg-lime-300"
            >
                <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
                onClick={onDelete}
                className="text-black px-4 py-2 rounded hover:bg-lime-300"
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    </div>
);

export default Card;