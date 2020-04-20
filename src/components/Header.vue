<template>
  <div class="headerStyle">
    <link rel="stylesheet" href="css/style.css">
            <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">

        <nav>
          <meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <h1>{{ msg }}</h1>
          <ul>
            <li><router-link tag="li" to="/UserProfile" exact>My Profile <i class="fa fa-user-circle-o"></i></router-link></li>
            <li><router-link tag="li" to="/GrpFinder" exact>Find Your Group	<i class="fa fa-search"></i></router-link></li>
            <li><router-link tag="li" to="/CreateGroup" exact>Create Group <i class="fa fa-pencil"></i></router-link></li>
            <li><router-link tag="li" to="/visuals" exact>Analytics <i class="fa fa-line-chart"></i></router-link></li>
            <li><router-link tag="li" to="/AboutUs" exact>About Us <i class="fa fa-envelope-o"></i></router-link></li>

          </ul>
        </nav>
  </div>
</template>

<script>
export default {
  
  data(){
    return{
        msg: 'GroupFinder'
        }
  },
  props:{
    title:{
      type:String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://kit.fontawesome.com/a076d05399.js");
header{
    background:#16A085;
    padding:6px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
h1{
    color:ivory;
    background:#16A085;
    font-size: 50px;
    font-family: 'Ubuntu', sans-serif;

}
nav{
    background: #16A085;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: ivory;
    color: #444;
}
ul{
    list-style-type: none;
    text-align: center;
    margin: 10;
    color:ivory;
}
li{
    
    display: inline;
    margin: 0 30px;
}
li a{
  
  font-size: 18px;
  color:ivory;
    
}
</style>