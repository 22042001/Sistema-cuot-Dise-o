import React from 'react';
import Inicio from './components/inicio';

const PaginaInicio = () => {
    const [usuario, setUsuario] = React.useState('');
    return (
        <div className="pagina-inicio">
            <Inicio usuario={usuario} />
        </div>
    );
};

export default PaginaInicio;