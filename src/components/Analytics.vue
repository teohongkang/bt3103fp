<template>
    <div id="main">

        <app-header></app-header>
        <h1> Dashboard Generated From Our Survey and Research </h1>
        <p id="initial study">
        Based on our experience, we realized that there may be a lot of students living outside NUS who do not wish to travel all the way to school anytime they want to study in groups. Therefore, we conducted a survey among 40 NUS students to find out their opinion about finding schoolmates living near them and forming a study group that way. The results show that of all students who do not currently have a study group, most of them are open to the idea.
            <div id="chart1">
                <initialstudy></initialstudy>
            </div>
        
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        
        <div id="research study">
        <br>
        To further support our idea, we analyzed a study by Susan M. Jones from the University of Tasmania, Australia (1998) that explores the difference between in effectiveness between studying in a group and studying alone among first year students. According to this study, there was a significant difference (p-value less than 0.001) between these 2 types of students, with the students with study group scoring much higher than the rest of the class        
        <br>
        <br>
        <ul id="chart1">
            <li>
                <doughnut></doughnut>
            </li>
            <li>
                <doughnutwo></doughnutwo>
            </li>
        </ul>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <h1> Dashboard Generated From Our Database</h1>
        <br>
        <div id="user study">
        These supportive results motivate us to create our website Group Finder. With the data gathered from other pages, we decided to visualize the number of groups created per region and type of venue to get a better understanding of our customers.
        <br>

        <ul id="chart">
            <li>
                <usersbyregion></usersbyregion>
            </li>
            <li>
                <usersbyvenue></usersbyvenue>
            </li>
        </ul>
        </div>
        
    </div>
</template>

<script>
//import charts from '../charts.js'
import doughnut from '../doughnut.js'
import doughnutwo from '../doughnutwo.js'
import usersbyvenue from '../usersbyvenue.js'
import usersbyregion from '../usersbyregion.js'
import initialstudy from '../initialstudy.js'
import Header from "./Header.vue";
export default {
    components:{
        doughnut, usersbyvenue, usersbyregion, doughnutwo,initialstudy,
        "app-header": Header
    }
    
}
</script>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:390px;
  width: 70%;
  border-style: solid;
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  display: table;
  table-layout: fixed;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  float:left;
}

#chart li {
    display: table-cell;
    width: auto;
    height: 370px;
    text-align: center;
}

#chart1{
  height:370px;
  width: 70%;
  border-style: solid;
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  display: table;
  table-layout: fixed;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  float:left;
}

#chart1 li {
    display: table-cell;
    width: auto;
    height: 370px;
    text-align: center;
}

#chart2 {
    heght:390px;
    width: 370px;
    border-style: solid;
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    display: table;
    table-layout: fixed;
    border-color:rgb(155, 84, 84);
    border-width: 1px;
    float:left;
}
</style>