import {Doughnut} from 'vue-chartjs'
export default{
    extends:Doughnut,
    data: () => ({
        chartdata: {
          labels: ['Results (Out of 100%)', ],
          datasets: [

            {
                label: 'cnjdknd',
                data: [55.8, 44.2],
                backgroundColor:['#16A085','red']
              }
          ]
          
        },
        options: {

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