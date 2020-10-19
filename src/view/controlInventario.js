import React, { useContext, useState } from 'react'
import TablaPeq from '../components/tablaPeq'
import { Context } from "../store/appContext"


const Inventario = () => {
    const { store, actions } = useContext(Context)
    return (
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
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">"Inventario"</a>
                            </div>
                        </nav>
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                            <div className="row pt-4">
                                <div className="col-12">

                                    <h1>Pedidos</h1>





                                    <table class="table table-bordered">
                                        <thead>





                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Pedido</th>
                                                <th scope="col">Respuesta</th>
                                            </tr>

                                        </thead>
                                        <tbody>

                                            {
                                                store.pedidos.map((pedido, i) => {
                                                    return (
                                                        <>
                                                            <h5  key={i}>{pedido.nombre}</h5>
                                                            <tr>
                                                                <th scope="row">{i + 1}</th>
                                                                <td>9/10/2020</td>
                                                                <td>
                                                                    <table class="table table-sm">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col">SKU</th>
                                                                                <th scope="col">Producto</th>
                                                                                <th scope="col">Paleta</th>
                                                                                <th scope="col">Cantidad</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <TablaPeq pedido={pedido}/>
                                                                        </tbody>
                                                                    </table>
                                                                </td>

                                                                <td>
                                                                    <i class="far fa-check-circle fa-2x"></i>
                                                                    <i class="far fa-times-circle fa-2x"></i>
                                                                </td>

                                                            </tr>
                                                        </>
                                                    )

                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                            <div className="row pt-4">
                                <div className="col-12">
                                    <h1>Materia Prima</h1>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">SKU</th>
                                                <th scope="col">Producto</th>
                                                <th scope="col">Cantidad</th>
                                                <th scope="col">Precio</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>abc</td>
                                                <td>Tapas</td>
                                                <td>abc</td>
                                                <td>abc</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>abc</td>
                                                <td>Botellas de PET 330ml</td>
                                                <td>abc</td>
                                                <td>abc</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>abc</td>
                                                <td>Botellas de PET 660ml</td>
                                                <td>abc</td>
                                                <td>abc</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>abc</td>
                                                <td>Botellas de PET 1,5L</td>
                                                <td>abc</td>
                                                <td>abc</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>abc</td>
                                                <td>Agua mineral</td>
                                                <td>abc</td>
                                                <td>abc</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>abc</td>
                                                <td>Etiqueta 330ml</td>
                                                <td>abc</td>
                                                <td>abc</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">7</th>
                                                <td>abc</td>
                                                <td>Etiqueta 660ml</td>
                                                <td>abc</td>
                                                <td>abc</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">8</th>
                                                <td>abc</td>
                                                <td>Etiqueta 1,5L</td>
                                                <td>abc</td>
                                                <td>abc</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">9</th>
                                                <td>abc</td>
                                                <td>Envoltura 1</td>
                                                <td>abc</td>
                                                <td>abc</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">10</th>
                                                <td>abc</td>
                                                <td>Envoltura 2</td>
                                                <td>abc</td>
                                                <td>abc</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">11</th>
                                                <td>abc</td>
                                                <td>Paletas</td>
                                                <td>abc</td>
                                                <td>abc</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <i class="fas fa-pencil-alt fa-2x float-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"> <div className="row pt-4">
                            <div className="col-12"><h1>Inventario</h1>
                                <table class="table table-bordered">
                                    <thead>

                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">SKU</th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Precio</th>


                                            <th scope="col">Fecha</th>
                                            <th scope="col">Editar</th>
                                            <th scope="col">Borrar</th>

                                            <th scope="col"><i class="fas fa-plus fa-2x"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <th scope="row">1</th>
                                            <td>abc</td>
                                            <td>Tapas</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td><i class="fas fa-pencil-alt fa-2x"></i></td>
                                            <td><i class="fas fa-trash fa-2x"></i></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>abc</td>
                                            <td>Botellas de PET 330ml</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td><i class="fas fa-pencil-alt fa-2x"></i></td>
                                            <td><i class="fas fa-trash fa-2x"></i></td> </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>abc</td>
                                            <td>Botellas de PET 660ml</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td><i class="fas fa-pencil-alt fa-2x"></i></td>
                                            <td><i class="fas fa-trash fa-2x"></i></td>  </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>abc</td>
                                            <td>Botellas de PET 1,5L</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td><i class="fas fa-pencil-alt fa-2x"></i></td>
                                            <td><i class="fas fa-trash fa-2x"></i></td>  </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>abc</td>
                                            <td>Agua mineral</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td><i class="fas fa-pencil-alt fa-2x"></i></td>
                                            <td><i class="fas fa-trash fa-2x"></i></td> </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>abc</td>
                                            <td>Etiqueta 330ml</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td><i class="fas fa-pencil-alt fa-2x"></i></td>
                                            <td><i class="fas fa-trash fa-2x"></i></td> </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>abc</td>
                                            <td>Etiqueta 660ml</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td><i class="fas fa-pencil-alt fa-2x"></i></td>
                                            <td><i class="fas fa-trash fa-2x"></i></td>  </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>abc</td>
                                            <td>Etiqueta 1,5L</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td><i class="fas fa-pencil-alt fa-2x"></i></td>
                                            <td><i class="fas fa-trash fa-2x"></i></td>  </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>abc</td>
                                            <td>Envoltura 1</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td><i class="fas fa-pencil-alt fa-2x"></i></td>
                                            <td><i class="fas fa-trash fa-2x"></i></td>  </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>abc</td>
                                            <td>Envoltura 2</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td><i class="fas fa-pencil-alt fa-2x"></i></td>
                                            <td><i class="fas fa-trash fa-2x"></i></td>  </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>abc</td>
                                            <td>Paletas</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td>abc</td>
                                            <td><i class="fas fa-pencil-alt fa-2x"></i></td>
                                            <td><i class="fas fa-trash fa-2x"></i></td>  </tr>
                                        {/* <td><i class="fas fa-pencil-alt fa-2x"></i><i class="fas fa-trash fa-2x"></i></td> */}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Inventario;