import mailgun from "mailgun-js";
import swal from 'sweetalert';



const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            cotizante: null,
            nombre: "",
            apellido: "",
            empresa: "",
            email: "",
            telefono: "",
            productos: [
                {
                    name: "Botella 330 ml",
                    sku: "BAMP-3",
                    descripcion: "Agua de manantial en botella PET de 330 ml, con tapa y etiqueta.",
                    cantidaddebotellas: 1152
                },
                {
                    name: "Botella 660 ml",
                    sku: "BAMM-6",
                    descripcion: "Agua de manantial en botella PET de 600 ml, con tapa y etiqueta.",
                    cantidaddebotellas: 864
                },
                {
                    name: "Botella 1.5 L",
                    sku: "BAMG-10",
                    descripcion: "Agua de manantial en botella PET de 1.5L, con tapa y etiqueta.",
                    cantidaddebotellas: 216
                },
            ],
            paleta: 0,
            nameSelec: "",
            descripcionSelec: "",
            paletaSelec: 0,
            cantidaddebotellasSelec: 0,
            skuSelec: "",
            datos: [],
            pedidos: [],
            skuinventario: "",
            productoinventario: "",
            paletainventario: "",
            cantidadinventario: "",
            precioinventario: "",
            fechainventario: "",
            inventario: [],
            skuinventarioedi: "",
            productoinventarioedi: "",
            paletainventarioedi: "",
            cantidadinventarioedi: "",
            precioinventarioedi: "",
            fechainventarioedi: "",


        },


        actions: {
            // son funciones, no tiene const y usa :, es separado por comas... Ademas, debo llamarlas con actions.funcion

            alertaLimpiar: (e) => {
                e.preventDefault()
                swal({
                    title: "Alerta?",
                    text: "Estas seguro que quieres borrar tu cotizacion?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            swal("Poof! Cotizacion borrada!", {
                                icon: "success",
                            });
                            setStore({ nombre: "", apellido: "", empresa: "", email: "", telefono: "", paleta: "" })
                        } else {
                            swal("Continua realizando tu cotizacion!");
                        }
                    });
            },

            // onClick={e => actions.alerta(e)}

            enviarFormulario: (e, history) => {

                const store = getStore();
                e.preventDefault()


                if (store.datos.length === 0) {
                    swal("Por favor,", "agregue a la lista con + productos a cotizar!", "error");
                }
                else {
                    const store = getStore();
                    setStore({
                        ...store, pedidos: [...store.pedidos, {
                            nombre: store.nombre,
                            apellido: store.apellido,
                            empresa: store.empresa,
                            email: store.email,
                            telefono: store.email,
                            datos: store.datos
                        }], datos: []
                    })

                    swal("Perfecto!", "Cotización en proceso!", "success");
                    const DOMAIN = process.env.REACT_APP_MAILGUN_API_DOMAIN;
                    const mg = mailgun({ apiKey: process.env.REACT_APP_MAILGUN_API_KEY, domain: DOMAIN });
                    const data = {
                        from: 'andrequera@gmail.com',
                        to: store.email,
                        subject: 'Informacion sobre su cotizacion',
                        text: "Su cotizacion se encuentra en proceso"
                    };
                    mg.messages().send(data, function (error, body) {
                        console.log(body);
                    });
                    history.push("/")

                    //    aca logre borrar
                    setStore(store.nombre = "",
                        store.apellido = "",
                        store.empresa = "",
                        store.email = "",
                        store.telefono = "",
                        store.paleta = "",
                        store.skuSelec = "",
                        store.descripcionSelec = "",


                    )


                }
            },
            capturaCampos: (e) => {
                const store = getStore();
                // e es lo que recibe, lo que ingresa el usuario en el formulario, lo asocio abajo... onChange={e => capturaCampos(e)}
                // "todos los eventos que yo realizo los captura campos", por eso los hago en cada input... onChange={e => capturaCampos(e)
                console.log(e.target.value)

                setStore({ ...store, [e.target.name]: e.target.value })
                // ....state, para que clone todos los valores que he ingresado; cambio a setStore y Store porque ahora es global, antes era setState y state; colocar const store = getStore();
            },

            verificarSeleccion: (e) => {
                const { productos } = getStore()
                const store = getStore()

                console.log(e.target.value)
                for (let i = 0; i < store.productos.length; i++) {
                    if (e.target.value === store.productos[i].name) {
                        setStore({
                            nameSelec: productos[i].name,
                            descripcionSelec: productos[i].descripcion,
                            skuSelec: productos[i].sku,
                            paletaSelec: store.paleta,
                            cantidaddebotellasSelec: productos[i].cantidaddebotellas
                        })
                    }
                }
            },
            aceptarCotizacion: (i) => {
                const store = getStore()
                swal("Perfecto!", "Cotización aceptada!", "success");
                const DOMAIN = process.env.REACT_APP_MAILGUN_API_DOMAIN;
                    const mg = mailgun({ apiKey: process.env.REACT_APP_MAILGUN_API_KEY, domain: DOMAIN });
                    const data = {
                        from: 'andrequera@gmail.com',
                        to: store.pedidos[i].email,
                        subject: 'Informacion sobre su cotizacion',
                        text: "Su cotizacion ha sido procesada con exito"
                    };
                    mg.messages().send(data, function (error, body) {
                        console.log(body);
                    });

                store.pedidos[i].datos.map(item2 => {
                    console.log(item2)
                    const producBuscado = store.inventario.find(prodEnc => prodEnc.skuinventario === item2.sku)
                    store.inventario.map((item, i) => {
                        item.skuinventario === producBuscado.skuinventario &&
                            (
                                setStore(
                                    ...store.inventario, store.inventario[i] = {
                                        skuinventario: item.skuinventario,
                                        productoinventario: item.productoinventario,
                                        paletainventario: parseInt(item.paletainventario) - parseInt(item2.paleta),
                                        cantidadinventario: parseInt(item.cantidadinventario) - parseInt(item2.cantidaddebotellas),
                                        precioinventario: item.precioinventario,
                                        fechainventario: item.fechainventario,
                                    },
                                    store.pedidos = []
                                )
                            )
                    })
                })
            },
            rechazarCotizacion: (i) => {
                const store = getStore()
                swal("Lo sentimos,", "cotizacion no procesada!", "error");
                const DOMAIN = process.env.REACT_APP_MAILGUN_API_DOMAIN;
                    const mg = mailgun({ apiKey: process.env.REACT_APP_MAILGUN_API_KEY, domain: DOMAIN });
                    const data = {
                        from: 'andrequera@gmail.com',
                        to: store.pedidos[i].email,
                        subject: 'Informacion sobre su cotizacion',
                        text: "Su cotizacion ha sido cancelada, lo sentimos"
                    };
                    mg.messages().send(data, function (error, body) {
                        console.log(body);
                    });
                    setStore(store.pedidos=[])
                console.log(i)
            },

            agregarProducto: (e) => {
                const store = getStore()
                e.preventDefault()

                // let bandera = 0

                if (store.paleta === 0 || store.nameSelec === "") {
                    swal("Faltan datos!", "Agregue cantidad de paletas o producto a cotizar!", "error");
                    return;
                }

                if (store.datos.some((item) => item.name === store.nameSelec)) {
                    swal("Error,", "ya tiene este producto agregado!", "error");
                    return;
                }

                // for (let i = 0; i < store.datos.length; i++) {
                //     if (store.nameSelec === store.datos[i].name) {
                //         swal("Error,", "ya tiene este producto agregado!", "error");
                //         // setStore([...store.datos], 
                //              store.datos[i].paleta= store.datos[i]+store.paleta, 
                //              store.datos[i].cantidaddebotellas=store.datos[i].cantidaddebotellas+store.cantidaddebotellasSelec)
                //         bandera = 1
                //     }
                // }
                // else if (bandera === 0) {
                setStore([...store.datos], store.datos.push({
                    name: store.nameSelec,
                    descripcion: store.descripcionSelec,
                    paleta: store.paleta,
                    cantidaddebotellas: store.cantidaddebotellasSelec,
                    sku: store.skuSelec
                }))





                // }
                //
            },
            //console.log(datos)
            borra: (i) => {
                const store = getStore()
                store.datos.splice(i, 1);
                setStore([...store.datos]);
                store.inventario.splice(i, 1);
                setStore([...store.inventario]);
                localStorage.setItem("Inventario", JSON.stringify(store.inventario))
            },

            //         editarMateria: (e) => {
            // <a  href="#nav-contact" ></a>
            //         }

            // agregarProdInventario: (e) => {
            //     const store = getStore()
            //     const { skuinventario, productoinventario, cantidadinventario, precioinventario } = getStore()
            //     e.preventDefault()
            //     if (store.cantidadinventario === "" || store.precioinventario === "" || store.productoinventario === "" || store.skuinventario === "") {
            //         swal("Faltan datos!", "Complete los campos para ingresar el producto a inventario!", "error");
            //         return;
            //     }
            //     if (store.inventario !== null) {
            //         if (store.inventario.some((item) => item.skuinventario === store.skuinventario)) {
            //             swal("Error,", "ya tiene este producto agregado!", "error");
            //             return;
            //         }
            //     }





            //     // setStore([...store.inventario], store.inventario.push({
            //     //     skuinventario: store.skuinventario,
            //     //     productoinventario: store.productoinventario,
            //     //     cantidadinventario: store.cantidadinventario,
            //     //     precioinventario: store.precioinventario,
            //     // }))



            //     setStore({
            //         ...store, inventario: [...store.inventario,
            //         {
            //             skuinventario: skuinventario,
            //             productoinventario: productoinventario,
            //             cantidadinventario: cantidadinventario,
            //             precioinventario: precioinventario
            //         }
            //         ],
            //         skuinventario: "",
            //         productoinventario: "",
            //         cantidadinventario: "",
            //         precioinventario: ""

            //     })
            //     localStorage.setItem("Inventario", JSON.stringify(store.inventario))
            // },


            agregarProdInventario: (e) => {
                const store = getStore()
                const { skuinventario, productoinventario, paletainventario, cantidadinventario, precioinventario, fechainventario } = getStore()
                e.preventDefault()
                if (store.cantidadinventario === "" || store.precioinventario === "" || store.productoinventario === "" || store.skuinventario === "" || store.paletainventario === "" || store.fechainventario === "") {
                    swal("Faltan datos!", "Complete los campos para ingresar el producto a inventario!", "error");
                    return;
                }
                if (store.inventario !== null) {
                    if (store.inventario.some((item) => item.skuinventario === store.skuinventario)) {
                        swal("Error,", "ya tiene este producto agregado!", "error");
                        return;
                    }
                }
                // setStore([...store.inventario], store.inventario.push({
                //     skuinventario: store.skuinventario,
                //     productoinventario: store.productoinventario,
                //     cantidadinventario: store.cantidadinventario,
                //     precioinventario: store.precioinventario,
                // }))
                setStore({
                    ...store, inventario: [...store.inventario,
                    {
                        skuinventario: skuinventario,
                        productoinventario: productoinventario,
                        paletainventario: paletainventario,
                        cantidadinventario: cantidadinventario,
                        precioinventario: precioinventario,
                        fechainventario: fechainventario,
                    }
                    ],
                    skuinventario: "",
                    productoinventario: "",
                    paletainventario: "",
                    cantidadinventario: "",
                    precioinventario: "",
                    fechainventario: "",
                })
                localStorage.setItem("Inventario", JSON.stringify(store.inventario))
            },


            // obtenerinventario: () => {
            //     const store = getStore()
            //     const datainventario = localStorage.getItem("Inventario")
            //     const datajs = JSON.parse(datainventario)
            //     setStore({ ...store, inventario: datajs })

            // },



            obtenerinventario: () => {
                const store = getStore()
                const datainvetario = localStorage.getItem("Inventario")
                const datajs = JSON.parse(datainvetario)

                datajs !== null ? setStore({ ...store, inventario: datajs }) : setStore({ ...store, inventario: [] })
                // console.log(typeof datainvetario, typeof  dataparse)
            },


            editarProInventario: (posicion) => {
                const store = getStore()
                const { skuinventarioedi, productoinventarioedi, paletainventarioedi, cantidadinventarioedi, precioinventarioedi, fechainventarioedi } = getStore()

                // if (store.inventario.some((item) => item.skuinventario === store.skuinventarioedi)) {
                //     swal("Error,", "ya tiene este SKU agregado!", "error");
                //     return;
                // }

                if (store.skuinventarioedi === "" || store.productoinventarioedi === "" || store.cantidadinventarioedi === "" || store.precioinventarioedi === "" || store.paletainventarioedi === "" || store.fechainventarioedi === "") {
                    swal("Faltan datos!", "Complete los campos para ingresar el producto a inventario!", "error");
                    return;
                }
                console.log(typeof paletainventarioedi,typeof store.inventario[posicion].paletainventario)

                setStore(
                    ...store.inventario, store.inventario[posicion] = {
                        skuinventario: skuinventarioedi,
                        productoinventario: productoinventarioedi,
                        paletainventario: parseInt(paletainventarioedi) + parseInt(store.inventario[posicion].paletainventario),
                        cantidadinventario: parseInt(cantidadinventarioedi) + parseInt(store.inventario[posicion].cantidadinventario),
                        precioinventario: precioinventarioedi,
                        fechainventario: fechainventarioedi,
                    }
                )
                localStorage.setItem("Inventario", JSON.stringify(store.inventario))
                setStore(
                    store.skuinventarioedi = "",
                    store.productoinventarioedi = "",
                    store.paletainventarioedi = "",
                    store.cantidadinventarioedi = "",
                    store.precioinventarioedi = "",
                    store.fechainventarioedi = "",
                )



                // else{
                //     const store = getStore();
                //                 setStore({...store, inventario: [...store.inventario[posicion], {
                //                 skuinventario: store.skuinventario,
                //                 productoinventario: store.productoinventario,
                //                 cantidadinventario: store.cantidadinventario,
                //                 precioinventario: store.precioinventario
                //                 }], skuinventario: "",
                //                 productoinventario: "",
                //                 cantidadinventario: "",
                //                 precioinventario: ""
                //                 })


                //                 // setStore(
                //                 //     store.skuinventario = "",
                //                 //     store.productoinventario = "",
                //                 //     store.cantidadinventario = "",
                //                 //     store.precioinventario = ""
                //                 // )

                //             }





            }


        }
    }
};
export default getState;
