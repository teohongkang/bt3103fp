<template>
    <div id="main">
        <div id="chart">
            <charts></charts>
        
        </div>
        <div id="chart">
            <doughnut></doughnut>
        
        </div>
         <div id="chart">
            <linechart></linechart>
        </div>
    </div>
</template>

<script>
import charts from '../charts.js'
import doughnut from '../doughnut.js'
import linechart from '../linechart.js'
export default {
    components:{
        charts,doughnut,linechart
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:240px; 
  padding:30px;
  float:left;
}
</style>>