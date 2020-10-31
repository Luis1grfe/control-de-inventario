import React from 'react';

const Card = () => {
    return (
        <div className="row">
            <div className="col-4">
                <div className="card">
                    <img className="card-img-top" src={"../img/inicio2" + ".jpg"} width="200" height="200" className="mx-auto d-block" alt="...imagen..."></img>
  
                    <div className="card-body">
                        <h5 className="card-title">Botellas PET</h5>
                        <p className="card-text">Disponible en tres presentaciones.</p>
                        <a href="#" className="btn btn-primary">Productos</a>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                <img className="card-img-top" src={"../img/pedido5" + ".jpg"} width="200" height="200" className="mx-auto d-block" alt="...imagen..."></img>
                    
                    <div className="card-body">
                        <h5 className="card-title">Cotizar</h5>
                        <p className="card-text">Cotización de pedidos.</p>
                        <a href="#" className="btn btn-primary">Cotizador</a>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                <img className="card-img-top" src={"../img/inventario2" + ".jpg"} width="178" height="178" className="mx-auto d-block" alt="...imagen..."></img>
                
                    <div className="card-body">
                        <h5 className="card-title">Control de inventario</h5>
                        <p className="card-text">Control de inventario para aprobación de cotización y proceso de producción.</p>
                        <a href="#" className="btn btn-primary">Contactanos</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Card;