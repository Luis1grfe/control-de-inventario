import React, { useContext, useState } from 'react'
import { Context } from "../store/appContext"
import '@fortawesome/fontawesome-free/css/all.css';




const Cotizante = () => {
    const { store, actions } = useContext(Context)
    //const [state, setState]= useState({}) se quita el setState porque lo cambie a global
    // console.log(state) esto era con el store que cambie a flux
    console.log(store)
    let f = new Date();
    console.log(f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());

    console.log(store.producto)
    const [state, setState] = useState({
        descripcion: "",
        cantidaddebotellas: "",
        sku: "",

    })
    const limpiaGeneral = (capturaEvento) => {
        setState("")
        actions.alertaLimpiar(capturaEvento)
    }

    const verificarSeleccion = (capturaEventos) => {
        const { producto } = store
        for (let i = 0; i < store.producto.length; i++) {
            if (capturaEventos.target.value === store.producto[i].name) {
                setState({ descripcion: producto[i].descripcion, sku: producto[i].sku, cantidaddebotellas: producto[i].cantidaddebotellas })
            }
        }
        console.log(producto)
        
        
    }

    return (<>

        <div className="container">
            <div className="row pt-4">
                <div className="col-md-6 offset-3">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Cotizante</h1>
                        </div>
                        <div className="col-md-6">
                            <h3>{f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}</h3>
                        </div>
                    </div>
                    <h1></h1>
                </div>
                <form onSubmit={capturaEvento => actions.enviarFormulario(capturaEvento)}>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label for="validationServer01">Primer Nombre</label>
                            <input type="text" value={store.nombre} name="nombre" className={"form-control " + (store.nombre !== "" ? "is-valid" : "is-invalid")} id="validationServer01" required onChange={capturaEventos => actions.capturaCampos(capturaEventos)} />
                            <div className="valid-feedback">
                                Aceptado!
                                </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="validationServer02">Primer Apellido</label>
                            <input type="text" value={store.apellido} name="apellido" className={"form-control " + (store.apellido !== "" ? "is-valid" : "is-invalid")} id="validationServer02" required onChange={capturaEventos => actions.capturaCampos(capturaEventos)} />
                            <div className="valid-feedback">
                                Aceptado!
                                </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label for="validationServer03">Empresa</label>
                            <input type="text" value={store.empresa} name="empresa" className={"form-control " + (store.empresa !== "" ? "is-valid" : "is-invalid")} id="validationServer03" aria-describedby="validationServer03Feedback" required onChange={capturaEventos => actions.capturaCampos(capturaEventos)} />
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
                                <input type="email" value={store.email} name="email" className={"form-control " + (store.email !== "" ? "is-valid" : "is-invalid")} aria-describedby="validatedInputGroupPrepend" required onChange={capturaEventos => actions.capturaCampos(capturaEventos)} />

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
                                <input type="number" value={store.telefono} name="telefono" className={"form-control " + (store.telefono !== "" ? "is-valid" : "is-invalid")} aria-describedby="validatedInputGroupPrepend" required onChange={capturaEventos => actions.capturaCampos(capturaEventos)} />
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
                                        <th scope="col"><i class="fas fa-plus fa-2x"></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">

                                            <select id="validationServer04" aria-describedby="validationServer04Feedback" name="producto" className={"form-control " + (state !== "" ? "is-valid" : "is-invalid")} required onChange={(capturaEventos) => verificarSeleccion(capturaEventos)}>
                                                <option selected disabled value="" >Producto</option>
                                                {
                                                    store.producto.map((producto, i) => {
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

                                            {state.descripcion}


                                        </td>
                                        <td>




                                            <div className="input-group is-invalid">
                                                <input type="number" placeholder="Cantidad de paletas" step="1" min="1" max="999" value={store.paleta} name="paleta" className={"form-control " + (store.paleta !== "" ? "is-valid" : "is-invalid")} id="validationServer01" required onChange={capturaEventos => actions.capturaCampos(capturaEventos)} />
                                                <div className="invalid-feedback">
                                                    Ingrese cantidad de paletas a cotizar.
                                    </div>
                                            </div>


                                        </td>
                                        <td>
                                            {/* Cantidad. */}
                                            {state.cantidaddebotellas*store.paleta}
                                        </td>
                                        <td>
                                            {/* sku    */}
                                            {state.sku}</td>
                                        <td><i class="fas fa-trash"></i></td>
                                    </tr>
                                   
                                    

                                </tbody>
                            </table>
                        </div>


                    </div>






                    <div className="pb-5">
                        <button className="btn btn-primary" type="button" onClick={(capturaEvento) => limpiaGeneral(capturaEvento)}>Limpiar</button>
                        <button className="btn btn-primary offset-6" type="submit">Enviar</button>
                    </div>
                </form>





            </div>

        </div>

    </>)


}



export default Cotizante;