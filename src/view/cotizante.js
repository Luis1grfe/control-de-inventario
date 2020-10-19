import React, { useContext, useState } from 'react'
import { Context } from "../store/appContext"
import '@fortawesome/fontawesome-free/css/all.css';
import swal from 'sweetalert';
import Carousel from '../components/Carousel';


const Cotizante = () => {
    const { store, actions } = useContext(Context)
    //const [store, setStore]= useState({}) se quita el setState porque lo cambie a global
    // console.log(state) esto era con el store que cambie a flux
    //console.log(store)

    let f = new Date();
    console.log(f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());

    //console.log(store.producto)

    const limpiaGeneral = (e) => {
        actions.alertaLimpiar(e)
    }


    return (<>
        <div className="container">
            <div className="row">
                <Carousel />
            </div>
            <div className="row pt-4">
                <div className="col-md-6 offset-3">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Cotizante</h1>
                        </div>
                        {/* <img src={"../img/calendario1"+".jpg"}</img> */}
                    </div>
                    <div className="float-right"> 
                        <h6>{f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}</h6>
                    </div>
                </div>
                <form onSubmit={e => actions.enviarFormulario(e)}>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label for="validationServer01">Primer Nombre</label>
                            <input type="text" value={store.nombre} name="nombre" className={"form-control " + (store.nombre !== "" ? "is-valid" : "is-invalid")} id="validationServer01" required onChange={e => actions.capturaCampos(e)} />
                            <div className="valid-feedback">
                                Aceptado!
                                </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="validationServer02">Primer Apellido</label>
                            <input type="text" value={store.apellido} name="apellido" className={"form-control " + (store.apellido !== "" ? "is-valid" : "is-invalid")} id="validationServer02" required onChange={e => actions.capturaCampos(e)} />
                            <div className="valid-feedback">
                                Aceptado!
                                </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label for="validationServer03">Empresa</label>
                            <input type="text" value={store.empresa} name="empresa" className={"form-control " + (store.empresa !== "" ? "is-valid" : "is-invalid")} id="validationServer03" aria-describedby="validationServer03Feedback" required onChange={e => actions.capturaCampos(e)} />
                            <div id="validationServer03Feedback" className="invalid-feedback">
                                Ingrese empresa.
                                </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="validationServer03">Email</label>
                            <div className="input-group is-invalid">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="validatedInputGroupPrepend"><i class="fas fa-at"></i></span>
                                </div>
                                <input type="email" value={store.email} name="email" className={"form-control " + (store.email !== "" ? "is-valid" : "is-invalid")} aria-describedby="validatedInputGroupPrepend" required onChange={e => actions.capturaCampos(e)} />
                            </div>
                            <div className="invalid-feedback">
                                Ingrese un email valido.
                                    </div>
                        </div>
                        <div className="col-md-6 mb-3 offset-6">
                            <label for="validationServer03">Telefono</label>
                            <div className="input-group is-invalid">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="validatedInputGroupPrepend"><i class="fas fa-phone-alt"></i></span>
                                </div>
                                <input type="number" value={store.telefono} name="telefono" className={"form-control " + (store.telefono !== "" ? "is-valid" : "is-invalid")} aria-describedby="validatedInputGroupPrepend" required onChange={e => actions.capturaCampos(e)} />
                            </div>
                            <div className="invalid-feedback">
                                Ingrese un telefono valido.
                                    </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Descripcion</th>
                                        <th scope="col">Paleta</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Codigo</th>
                                        <th scope="col"><i class="fas fa-plus fa-2x" onClick={(e) => actions.agregarProducto(e)}></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">
                                            <select id="validationServer04" aria-describedby="validationServer04Feedback" name="producto" className="form-control" required onChange={(e) => actions.verificarSeleccion(e)}>
                                                <option selected disabled value="" >Producto</option>
                                                {
                                                    store.productos.map((producto, i) => {
                                                        return (
                                                            <option key={i} value={producto.name}>{producto.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <div id="validationServer04Feedback" class="invalid-feedback">
                                                Seleccione producto.
      </div>
                                        </td>
                                        <td>
                                            {/* Descripcion */}
                                            {store.descripcionSelec}
                                        </td>
                                        <td>
                                            <div className="input-group is-invalid">
                                                <input type="number" placeholder="Cantidad de paletas" step="1" min="1" max="999" value={store.paleta} name="paleta" className="form-control" id="validationServer01" required onChange={(e) => actions.capturaCampos(e)} />
                                                <div className="invalid-feedback">
                                                    Ingrese cantidad de paletas a cotizar.
                                    </div>
                                            </div>
                                        </td>
                                        <td>
                                            {/* Cantidad. */}
                                            {store.cantidaddebotellasSelec * store.paleta}
                                        </td>
                                        <td>
                                            {/* sku    */}
                                            {store.skuSelec}</td>
                                        {/* <td><i  class="fas fa-trash"></i></td> */}
                                    </tr>
                                </tbody>
                            </table>

                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Descripcion</th>
                                        <th scope="col">#Paletas</th>
                                        <th scope="col">#Botellas</th>
                                        <th scope="col">SKU</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        store.datos.map((dato, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{dato.name} </td>
                                                    <td>{dato.descripcion}</td>
                                                    <td>{dato.paleta}</td>
                                                    <td>{dato.cantidaddebotellas}</td>
                                                    <td>{dato.sku}</td>
                                                    <td><i onClick={() => actions.borra(i)} class="fas fa-trash"></i></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="pb-5">
                        <button className="btn btn-primary" type="button" onClick={(e) => limpiaGeneral(e)}>Limpiar</button>
                        <button className="btn btn-primary offset-6" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </>)
}
export default Cotizante;