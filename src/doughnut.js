import {Doughnut} from 'vue-chartjs'
export default{
    extends:Doughnut,
    data: () => ({
        chartdata: {
          labels: ['Results (Out of 100%)',],
          datasets: [
            {
              label: 'Benefits of Study Groups',
              data: [61.7, 38.3],
              backgroundColor:['#16A085','orange'],
              // borderWidth:0.5,
              // borderColor:"#000"
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
                  bottom: 10
              }
          },
          title:{
            display:true,
            text:'Mean Final Results of Students in Study Groups',
            fontColor:'Black',
            fontSize:15

        }
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}