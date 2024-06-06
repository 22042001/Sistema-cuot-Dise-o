import React, { useEffect, useState } from 'react';
import FechayHora from '../../components/fechayHora';

const Inicio = ({ usuario }) => {
    

    return (
        <div className="p-8 bg-white flex flex-col justify-center">
        <div className="w-full max-w-screen-lg mx-auto flex justify-between items-center mb-4">
            <div className="text-gray-700 text-xl font-bold">
                {usuario}
            </div>
            <FechayHora />
        </div>
        <div className="w-full max-w-screen-lg overflow-hidden break-words">
            <h1 className="text-4xl font-bold text-gray-700 break-words">
                Bienvenido
            </h1>
            <p className="mt-4 break-words justify-center">
                hola
            </p>
        </div>
    </div>
    );
};

export default Inicio;



