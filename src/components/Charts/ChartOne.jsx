import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';


const ChartOne = () => {

    const [state,setState] =useState({
        series: [{
            name: 'Fruit',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'Meat',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
          options: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },

    })

   




  return (
    <div>
        <ReactApexChart
         options={state.options} 
         series={state.series}
          type="area"
          height={350}
          width={350} />

    </div>
  )
}

export default ChartOne




