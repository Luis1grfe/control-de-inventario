import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext'
import { Bar, Line, Pie } from 'react-chartjs-2'; 

const Graficoe = () => {
    const { store, actions } = useContext(Context)
    const {inventario} = store
    const datosGraficos = inventario.filter(data => (data.skuinventario === "ETIQ-3" || data.skuinventario === "ETIQ-6" || data.skuinventario === "ETIQ-10"))
    console.log(datosGraficos,inventario)
    useEffect(() => {
        datosGraficos.map(item => {
          setBarData({ ...barData },
            barData.labels.push(item.skuinventario),
            barData.datasets[0].data.push(item.cantidadinventario),
            barData.datasets[0].backgroundColor = [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)'
            ],
            barData.datasets[0].borderWidth = 2,
          )
        })
      }, []);
      const [barData, setBarData] = useState({
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [
            ],
            borderWidth: 0,
          }
        ]
      });
      // set options
      const [barOptions, setBarOptions] = useState({
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          title: {
            display: true,
            text: 'Cantidad de Etiquetas',
            fontSize: 25
          },
          legend: {
            display: false,
            position: 'top'
          }
        }
      });
    return(
<Bar data={barData} options={barOptions.options}/>
    )
}

export default Graficoe;