<template>
    <div id="main">
        <app-header></app-header>
        <div id="chart">
            <charts></charts>
        
        </div>
        <div id="chart">
            <doughnut></doughnut>
        </div>
    </div>
</template>

<script>
import charts from '../charts.js'
import doughnut from '../doughnut.js'
import Header from "./Header.vue"

export default {
    components:{
        charts,doughnut,
        "app-header": Header
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
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
}
</style>>