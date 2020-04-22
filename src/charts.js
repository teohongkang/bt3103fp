import {Bar} from 'vue-chartjs'
export default{
    extends:Bar,
    data: () => ({
        chartdata: {
          labels: ['North', 'South','East','West', 'Central'],
          datasets: [
            {
              label: 'Region',
              data: [200, 150,250,100, 500],
              backgroundColor:'#AA6',
            }
          ]
          
        },
        
        options: {
            title:{
                display:true,
                text:'Users by Region',
                fontColor:'Black',
                fontSize:15

            },
            legend:{
                position:'bottom'
            },
            layout:{
                padding:{
                    left: 5,
                    right: 0,
                    top: 0,
                    bottom: 5
                }
            },
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}