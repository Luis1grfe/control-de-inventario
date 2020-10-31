import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#"><img src={"../img/logosuperior" + ".PNG"} width="65" height="65" className="img-fluid" alt="...imagen..."></img><strong>Control de Inventario</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Quienes Somos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/rutacotizante">Cotizador</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/controlinventario">Control Inventario</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Contactanos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );

}

export default Navbar;