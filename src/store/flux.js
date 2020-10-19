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
            pedidos: []
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

            enviarFormulario: (e) => {
                const store = getStore();
                e.preventDefault()


                if (store.datos.length === 0) {
                    swal("Por favor,", "agregue a la lista con + productos a cotizar!", "error");
                }

                else {
                    swal("Perfecto!", "Cotización en proceso!", "success");
                    setStore([...store.pedidos], store.pedidos.push({
                        nombre: store.nombre,
                        apellido: store.apellido,
                        empresa: store.empresa,
                        email: store.email,
                        telefono: store.email,
                        datos: store.datos
                    }))
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
                //console.log(producto)  
            },

            agregarProducto: (e) => {
                const store = getStore()
                e.preventDefault()
                let bandera = 0
                for (let i = 0; i < store.datos.length; i++) {

                    if (store.nameSelec === store.datos[i].name) {
                        swal("Error,", "ya tiene este producto agregado!", "error");
                       // setStore([...store.datos], store.datos[i].paleta= store.datos[i]+store.paleta, store.datos[i].cantidaddebotellas=store.datos[i].cantidaddebotellas+store.cantidaddebotellasSelec)
                        bandera= 1
                    }
                }
                if (store.paleta == 0) {
                    swal("Faltan datos!", "Agregue cantidad de paletas a cotizar!", "error");
                }

                else if (bandera === 0){
                    setStore([...store.datos], store.datos.push({
                        name: store.nameSelec,
                        descripcion: store.descripcionSelec,
                        paleta: store.paleta,
                        cantidaddebotellas: store.cantidaddebotellasSelec,
                        sku: store.skuSelec
                    }))
                }
                // else {
                //     swal("Perfecto!", "Producto agregado!", "success");
                // }


            },
            //console.log(datos)
            borra: (i) => {
                const store = getStore()
                store.datos.splice(i, 1);
                setStore([...store.datos]);
            }
        }
    }
};
export default getState;
