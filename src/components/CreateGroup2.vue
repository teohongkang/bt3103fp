<template>
    <div id="main">
        <app-header></app-header>
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
            <button v-on:click.prevent="addGroup()">Submit</button>
        </form>
    </div>
</template>

<script>
import Header from "./Header.vue";
import database from '../firebase.js';
import store from '../store.js'

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
                name:store.state.user.name,
                phone:store.state.user.contact,
                email:store.state.user.email,
                course:store.state.user.course
            },
            regionCount: {
                allRegions: 0,
                north: 0,
                south: 0,
                west: 0,
                east: 0,
                central:0
            },
            venueCount: {
                allVenues: 0,
                cafe: 0,
                library: 0
            }
        }
    },

    components: {
        "app-header": Header
    },
    /*
    store.state.user.username (to access username)
    store.state.user.name (person’s name)
    store.state.user.contact (contact no)
    store.state.user.course
    store.state.user.email 
    */

    methods:{
            addGroup:  function () {
                //Save item to database
                if (this.group.chooseRegion == "" || this.group.chooseVenue == ""){
                    alert("Please choose a region or venue");
                } else {

                    let tempRegion = this.group.chooseRegion;
                    let tempVenue = this.group.chooseVenue;

                    /*database.collection('region').get().then((querySnapShot)=>{
                        //Loop through each item
                        querySnapShot.forEach(doc=>{
                            if (doc.id == 'All Region'){
                                this.regionCount.allRegions = doc.data().count;
                                alert("alert message for region count in foreach loop"+ doc.data().count);
                            }
                        })
                    })*/

                    if (tempRegion=="All"){
                        this.regionCount.allRegions+=1;
                        alert("region count for all regions is: "+this.regionCount.allRegions);
                        //alert("testing to see if this method of retrieval gets anything"+database.collection('region').doc('All Region').data().count);
                        database.collection('region').doc('All Region').set({count: this.regionCount.allRegions});
                    } 
                    if (tempRegion == "North"){
                        this.regionCount.north+=1;
                        database.collection('region').doc('North').set({count: this.regionCount.north});
                    } 
                    if (tempRegion == "South"){
                        this.regionCount.south+=1;
                        database.collection('region').doc('South').set({count: this.regionCount.south});                 
                    } 
                    if (tempRegion == "East"){
                        this.regionCount.east+=1;
                        database.collection('region').doc('East').set({count: this.regionCount.east});
                    } 
                    if (tempRegion == "West"){
                        this.regionCount.west+=1;
                        database.collection('region').doc('West').set({count: this.regionCount.west});
                    } 
                    if (tempRegion == "Central") {
                        this.regionCount.central+=1;
                        database.collection('region').doc('Central').set({count: this.regionCount.central});
                    }

                    if (tempVenue=="Venue"){
                        this.venueCount.allVenues+=1;
                        database.collection('venue').doc('All Venues').set({count: this.venueCount.allVenues});
                    } 
                    if (tempVenue == "Library"){
                        this.venueCount.library+=1;
                        database.collection('venue').doc('Library').set({count: this.venueCount.library});
                    } 
                    if (tempVenue == "Cafe") {
                        this.venueCount.cafe+=1;
                        database.collection('venue').doc('Cafe').set({count: this.venueCount.cafe});
                    }

                    database.collection('groups').doc().set(this.group);
                    this.group.chooseRegion="";
                    this.group.chooseVenue="";
                    this.group.module1="";
                    this.group.module2="";
                    this.group.module3="";
                    this.group.remark="";
                    alert("Group created successfully");
                }
            } /*
            addDashboard: function () {
                let tempRegion = database.collection('dashboard').doc('region').get(this.group.chooseRegion);
                let tempVenue = database.collection('dashboard').doc('venue').get(this.group.chooseVenue);

                tempRegion+=1;
                //alert(tempRegion);
                tempVenue+=1;

                database.collection('dashboard').doc('region').get(this.group.chooseRegion).set(tempRegion);
                database.collection('dashboard').doc('venue').get(this.group.chooseVenue).set(tempVenue);
            }*/

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