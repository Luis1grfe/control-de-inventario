import React from 'react'


const TablaPeq = (props) => {
    return (
        <>
            {
                props.pedido.datos.map((dato, j) => {
                    return (
                        <tr key={j}>
                            <td>{dato.sku}</td>
                            <td>{dato.name}</td>
                            <td>{dato.paleta}</td>
                            <td>{dato.cantidaddebotellas}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}
export default TablaPeq;