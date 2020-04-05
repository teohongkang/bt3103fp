<template>
    <div id="main">
        <h1>Can't find a group? Create one now!</h1>
        <form id="fm1">
            Choose Region: 
            <select v-model="group.chooseRegion" name="chooseRegion" id = "dropdown">
                <option value="All">All Regions</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="East">East</option>            	
                <option value="West">West</option>
                <option value="Central">Central</option>
                <option value="Neither">Neither</option>
            </select>
            <br>
            <br>
            Choose Venue:
            <select v-model="group.chooseVenue" name="chooseVenue" id = "dropdown">
                <option value="Venue">All Venues</option>
                <option value="Cafe">Cafe</option>
                <option value="Library">Library</option>
            </select>
            <br>
            <label>Module preference 1: </label>
            <input type="text" v-model="group.module1">
            <label>Module preference 2: </label>
            <input type="text" v-model="group.module2">
            <label>Module preference 3: </label>
            <input type="text" v-model="group.module3">
            <label>Remarks: </label>
            <input type="text" v-model="group.remark">
            <br>
            <br>
            <button v-on:click.prevent="addGroup">Submit</button>
        </form>
    </div>
</template>

<script>
import database from '../firebase.js'
export default {
    data(){
        return{
            group: {
                chooseRegion: "",
                chooseVenue:"",
                module1:"",
                module2:"",
                module3:"",
                remark:"",
                name:"",
                phone:"",
                email:"",
                course:""
            }
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
            },

            addGroup:  function () {
                //Save item to database
                database.collection('groups').doc().set(this.group);
                this.group.chooseRegion="";
                this.group.chooseVenue="";
                this.group.module1="";
                this.group.module2="";
                this.group.module3="";
                this.group.remark="";
                alert("Group created successfully")
            
            }
        }
}
</script>

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

select{
    
}

button {
    cursor: pointer;
    border-radius: 5em;
    color: #fff;
    background: #16A085;
    border: 0;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 13px;
    margin-left:0%; 
    }
</style>