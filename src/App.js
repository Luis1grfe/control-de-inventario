import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'; import 'popper.js'; import 'bootstrap';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './view/home';
import Carousel from './components/Carousel';
import Cotizante from "./view/cotizante";
import Footer from './components/Footer';
import injectContext from "./store/appContext"
import Control from './view/Control';
import Logincontrol from './view/Logincontrol';
import { useFirebaseApp } from 'reactfire';




function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/rutacotizante" component={Cotizante} />
          <Route exact path="/controlinventario" component={Logincontrol} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
