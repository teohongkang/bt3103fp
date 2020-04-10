import {Line} from 'vue-chartjs'

export default{
    extends:Line,
    data: () => ({
        chartdata: {
          labels: ['January', 'February','March','April'],
          datasets: [
            {
              label: 'Number of Users',
              
              data: [50, 200, 500, 970],
              backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"#000",
              fill:false
            },
            /*{
                label: 'Sales2',
                data: [40, 30,10,15],
                
                
              }*/
          ]
          
        },
        options: {
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            },
            title:{
              display:true,
              text:'Number of Users',
              fontColor:'Black',
              fontSize:15
  
          }
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}