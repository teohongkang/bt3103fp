<template>
    <div id="main">
        <h1>Create Group page</h1>
        <form id="fm1">
            <label>Choose Region</label>
            <select v-model="chooseRegion" name="chooseRegion" id = "dropdown">
                <option value="All">All Regions</option>
            	<option value="North">North</option>
            	<option value="South">South</option>
            	<option value="East">East</option>
            	<option value="West">West</option>
            	<option value="Central">Central</option>
            	<option value="Neither">Neither</option>
        	</select>
            <label>Choose Venue</label>
            <select v-model="chooseVenue" name="chooseVenue" id = "dropdown">
            	<option value="Venue">All Venues</option>
            	<option value="Cafe">Cafe</option>
            	<option value="Library">Library</option>
        	</select>
            <input type="text" v-model.lazy="item.category"/>
            <button value="Submit" type="submit">Submit<i class="fa fa-envelope-o"></i></button>
        </form>
    </div>
</template>

<script>
//import database from '../firebase.js'
    export default {
        data(){
            return{
                chooseRegion:"",
                chooseVenue:""
            }
        },
        methods:{
            validate: function(){
                if (this.chooseRegion == ""){
                    alert("Please choose a region");
                }
                else if (this.chooseVenue == ""){
                    alert("Please choose a venue");
                }
                else{
                    alert("Group created!");
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content: flex-start;

}
input[type="text"]{
    display: inline-block;
    width:50%;
}
</style>