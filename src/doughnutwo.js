import {Doughnut} from 'vue-chartjs'
export default{
    extends:Doughnut,
    data: () => ({
        chartdata: {
          labels: ['Results (Out of 100%)', ],
          datasets: [
            /*{
              label: 'Benefits of Study Groups',
              data: [61.7, 38.3],
              backgroundColor:['aqua','orange'],
              borderWidth:0.5,
              borderColor:"#000"
            }*/
            {
                label: 'cnjdknd',
                data: [55.8, 44.2],
                backgroundColor:['aqua','red']
              }
          ]
          
        },
        options: {
            // scales:{
            //     yAxes:[{
            //         ticks:{
            //             min:0
            //         }

            //     }]
            // },
            layout:{
              padding:{
                  left: 5,
                  right: 0,
                  top: 0,
                  bottom: 0
              }
          },
          title:{
            display:true,
            text:'Mean Final Results of Entire Class',
            fontColor:'Black',
            fontSize:15

        }
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}