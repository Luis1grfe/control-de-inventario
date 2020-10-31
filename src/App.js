import React, { Suspense }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'jquery'; import 'popper.js'; import 'bootstrap';
import './app.css'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './view/home';
import Cotizante from "./view/cotizante";
import Footer from './components/Footer';
import injectContext from "./store/appContext"
import Control from './view/Control';
import Inventario from './view/controlInventario';
import Login from './view/login';
import { useFirebaseApp } from 'reactfire';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/rutacotizante" component={Cotizante} />
          {/* <Route exact path="/controlinventario" component={Inventario} /> */}
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/contacto" component={Contacto} /> */}

        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
