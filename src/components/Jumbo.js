import React from 'react';

const Jumbo = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Control de Inventario PET</h1>
            <p className="lead">Aplicacion para cuantificar la cadena de suministro de agua embotellada PET.</p>
            <hr className="my-4"></hr>
            <p>Realizacion de cotizacion, control de pedidos, visualizacion de materia prima, control de inventario, 
                actualizacion de precios, cantidad de stock y produccion. Menos desabastecimiento y mayor ganancias.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Cotizardor</a>
            </p>
        </div>
    );
}

export default Jumbo;