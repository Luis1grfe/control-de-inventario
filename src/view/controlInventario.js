import React, { useContext, useState, useEffect } from 'react'
import TablaPeq from '../components/tablaPeq'
import { Context } from "../store/appContext"

const Inventario = () => {
    const [prima, setPrima] = useState([])

    useEffect(() => {
    fetch('https://3000-a6db94ad-7f6f-46cd-a7b7-f9a7f1df8d51.ws-us02.gitpod.io/list')
      .then((resp) => resp.json())
      .then(datos =>
        setPrima(datos))
    }, [])

    const { store, actions } = useContext(Context)
    const [state, setState] = useState(false)

    const sumarInventario = () => {
        setState(true)
    }
    const cerrarInventario = () => {
        setState(false)
    }

    const ClickEditar = () => {
        setState(true)
    }

    const [posicion, setPosicion] = useState(0)

    const f = new Date();


    return (<>

        <div className="container">
            <div className="row">
                <div className="col-md-12">

                </div>
                <div>
                    <div>
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="talist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Pedidos</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Materia Prima</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Inventario</a>
                            </div>
                        </nav>
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                            <div className="row pt-4">
                                <div className="col-12">
                                    <div className="carousel mycarousel">
                                        <img src={"../img/pedido" + ".png"} className="img-fluid w-100" alt="imagen"></img>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1><strong>Pedidos</strong></h1>
                                        </div>
                                    </div>

                                    {/* <h1>Pedidos</h1> */}

                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col"><img src={"../img/ped" + ".png"} width="35" height="35" className="mx-auto d-block" alt="...imagen..."></img>
                                                </th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Pedido</th>
                                                <th scope="col" className="text-center">Respuesta</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                store.pedidos.map((pedido, i) => {
                                                    return (
                                                        <>
                                                            <div>
                                                                <h5 key={i}><img src={"../img/iconopedido" + ".png"} width="35" height="35" alt="...imagen..."></img>
                                                                    <strong>{pedido.nombre} {pedido.apellido}</strong></h5>
                                                            </div>
                                                            <tr>
                                                                <th scope="row" className="text-center">{i + 1}</th>
                                                                <td>{f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}</td>
                                                                <td>
                                                                    <table className="table table-sm">
                                                                        <thead>
                                                                            <tr className="table-success">
                                                                                <th scope="col">SKU</th>
                                                                                <th scope="col">Producto</th>
                                                                                <th scope="col">Paleta</th>
                                                                                <th scope="col">Cantidad</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <TablaPeq pedido={pedido} />
                                                                        </tbody>
                                                                    </table>
                                                                </td>

                                                                <td>
                                                                    <img src={"../img/siprocesada" + ".jpg"} width="35" height="35" className="mx-auto d-block" onClick={()=>actions.aceptarCotizacion(i)}></img>
                                                                    <img src={"../img/noprocesada" + ".jpg"} width="35" height="35" className="mx-auto d-block" onClick={()=>actions.rechazarCotizacion(i)}></img>

                                                                </td>

                                                            </tr>
                                                        </>
                                                    )

                                                })
                                            }
                                        </tbody>
                                    </table>

                                    <div>
                                        <img className="d-block w-100" src={"../img/pedidos1" + ".png"} className="rounded mx-auto d-block img-fluid" alt="...imagen..."></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                            <div className="row pt-4">
                                <div className="col-12">

                                    <div className="carousel mycarousel">
                                        <img src={"../img/materiaprima" + ".png"} className="img-fluid w-100" alt="imagen"></img>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1><strong>Materia Prima</strong></h1>
                                        </div>
                                    </div>

                                    {/* <h1>Materia Prima</h1> */}

                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col"><img src={"../img/mp" + ".png"} width="40" height="40" className="mx-auto d-block" alt="...imagen..."></img>
                                                </th>
                                                <th scope="col">SKU</th>
                                                <th scope="col">Producto</th>
                                                <th scope="col">Cajas</th>
                                                <th scope="col">Cantidades</th>
                                                <th scope="col">Precio</th>
                                            </tr>
                                        </thead>



                                        <tbody>
                                            {
                                                store.prima !== null &&
                                                store.prima.map((prod, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <th scope="row" className="text-center">{i + 1}</th>
                                                            <td>{prod.sku} </td>
                                                            <td>{prod.name}</td>
                                                            <td>{prod.cajas}</td>
                                                            <td>{prod.cantidad}</td>
                                                            <td>{prod.precio}</td>


                                                        </tr>
                                                    )
                                                })


                                            }


                                        </tbody>

                                    </table>
                                    {/* L... <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact"  aria-controls="nav-contact" aria-selected="false"><i className="fas fa-pencil-alt fa-2x float-right"></i></a> */}

                                    <div>
                                        <img className="d-block w-100" src={"../img/proceso1" + ".jpg"} className="rounded mx-auto d-block img-fluid" alt="...imagen..."></img>
                                    </div>



                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"> <div className="row pt-4">
                            <div className="col-12">

                                <div className="carousel mycarousel">
                                    <img src={"../img/inventario" + ".png"} className="img-fluid w-100" alt="imagen"></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1><strong>Inventario</strong></h1>
                                    </div>
                                </div>

                                {/* <h1>Inventario</h1> */}



                                <table className="table table-bordered">
                                    <thead>

                                        <tr>
                                            <th scope="col"><img src={"../img/inv" + ".png"} width="40" height="40" className="mx-auto d-block" alt="...imagen..."></img>
                                            </th>
                                            <th scope="col">SKU</th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Caja</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Editar</th>
                                            <th scope="col">Borrar</th>

                                            <th scope="col"> <img src={"../img/agregarinv" + ".jpg"} width="40" height="40" className="mx-auto d-block" alt="...imagen..." onClick={() => sumarInventario()}></img>
                                            </th>







                                        </tr>
                                    </thead>
                                    <tbody >
                                        {state !== false && (
                                            <tr>
                                                <th scope="row"><img src={"../img/mas" + ".png"} width="50" height="50" alt="...imagen..."></img>
                                                </th>
                                                <td>
                                                    <form>
                                                        <div className="form-group">
                                                            <input className="form-control" value={store.sku} name="sku" type="text" placeholder="SKU" onChange={(e) => actions.capturaCampos(e)} />
                                                        </div>
                                                    </form>
                                                </td>
                                                <td>
                                                    <form>
                                                        <div className="form-group">
                                                            <input className="form-control" value={store.producto} name="producto" type="text" placeholder="Producto" onChange={(e) => actions.capturaCampos(e)} />
                                                        </div>
                                                    </form>
                                                </td>

                                                {/* <td>
                                                    <form>
                                                        <div className="form-group">
                                                            <input className="form-control" value={store.paletainventario} name="paletainventario" type="text" placeholder="Paleta" onChange={(e) => actions.capturaCampos(e)} />
                                                        </div>
                                                    </form>

                                                </td> */}



                                                <td>
                                                    <div className="input-group is-invalid">
                                                        <input type="number" placeholder="Paleta" step="1" min="1" max="999" value={store.caja} name="caja" className="form-control" id="validationServer01" onChange={(e) => actions.capturaCampos(e)} />

                                                    </div>
                                                </td>


                                                <td>
                                                    <form>
                                                        <div className="form-group">
                                                            <input className="form-control" value={store.cantidad} name="cantidad" type="text" placeholder="Cantidad" onChange={(e) => actions.capturaCampos(e)} />
                                                        </div>
                                                    </form>

                                                </td>




                                                <td>

                                                    <form>
                                                        <div className="form-group">
                                                            <input className="form-control" value={store.precio} name="precio" type="text" placeholder="Precio" onChange={(e) => actions.capturaCampos(e)} />
                                                        </div>
                                                    </form>
                                                </td>

                                                <td> <form>
                                                        <div className="form-group">
                                                            <input className="form-control" value={store.fecha} name="fecha" type="text" placeholder="Fecha" onChange={(e) => actions.capturaCampos(e)} />
                                                        </div>
                                                    </form></td>

                                                <td> <img src={"../img/siprocesada" + ".jpg"} width="35" height="35" alt="...imagen..." onClick={(e) => actions.agregarProdInventario(e)}></img>
                                                </td>
                                                <td><img src={"../img/noprocesada" + ".jpg"} width="35" height="35" alt="...imagen..." onClick={() => cerrarInventario()}></img>
                                                </td>
                                            </tr>
                                        )}

                                        {
                                            store.inventario !== null &&
                                            store.inventario.map((prod, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <th scope="row" className="text-center">{i + 1}</th>
                                                        <td>{prod.sku} </td>
                                                        <td>{prod.producto}</td>
                                                        <td>{prod.caja}</td>
                                                        <td>{prod.cantidad}</td>
                                                        <td>{prod.precio}</td>
                                                        <td>{prod.fecha}</td>
                                                        <td><img src={"../img/editar1" + ".jpg"} width="35" height="35" alt="...imagen..." data-toggle="modal" data-target="#exampleModal" onClick={() => setPosicion(i)}></img></td>
                                                        <td><img src={"../img/borrar" + ".jpg"} width="35" height="35" alt="...imagen..." onClick={(e) => actions.deleteInventario(e,i)}></img></td>

                                                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div className="modal-dialog" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title" id="exampleModalLabel">Editar inventario</h5>
                                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <form>
                                                                            <div className="form-row">
                                                                                <div className="col">

                                                                                    <th scope="col">SKU</th>





                                                                                    <input type="text" name="skuinventarioedi" className="form-control" value={store.skuinventarioedi} placeholder={store.inventario[posicion].skuinventario} onChange={(e) => actions.capturaCampos(e)}></input>
                                                                                </div>
                                                                                <div className="col">

                                                                                    <th scope="col">Producto</th>

                                                                                    <input type="text" name="productoinventarioedi" className="form-control" value={store.productoinventarioedi} placeholder={store.inventario[posicion].productoinventario} onChange={(e) => actions.capturaCampos(e)}></input>
                                                                                </div>

                                                                                {/* <div className="col">
                                                                                    <th scope="col">Paletas</th>

                                                                                    <input type="text" name="paletainventarioedi" className="form-control" value={store.paletainventarioedi} placeholder={store.inventario[posicion].paletainventario} onChange={(e) => actions.capturaCampos(e)}></input>
                                                                                </div> */}



                                                                                <div className="col">
                                                                                    <th scope="col">Caja</th>
                                                                                    <input type="number" name="paletainventarioedi" placeholder={store.inventario[posicion].paletainventario} step="1" min="1" max="999" value={store.paletainventarioedi} className="form-control" id="validationServer01" onChange={(e) => actions.capturaCampos(e)} />

                                                                                </div>

                                                                                <div className="col">
                                                                                    <th scope="col">Cantidad</th>

                                                                                    <input type="text" name="cantidadinventarioedi" className="form-control" value={store.cantidadinventarioedi} placeholder={store.inventario[posicion].cantidadinventario} onChange={(e) => actions.capturaCampos(e)}></input>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <th scope="col">Precio</th>

                                                                                    <input type="text" name="precioinventarioedi" className="form-control" placeholder={store.inventario[posicion].precioinventario} value={store.precioinventarioedi} type="text" placeholder="Precio" onChange={(e) => actions.capturaCampos(e)}></input>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <th scope="col">Fecha</th>
                                                                                    <input type="text" name="fechainventarioedi" className="form-control" placeholder={store.inventario[posicion].fechainventario} onChange={(e) => actions.capturaCampos(e)}></input>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => actions.editarProInventario(posicion)}>Save changes</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>

                            </div>
                        </div>
                            <div>
                                <img className="d-block w-100" src={"../img/inventario3" + ".png"} className="rounded mx-auto d-block img-fluid" alt="...imagen..."></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>)
}
export default Inventario;