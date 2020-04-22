
<template>
<div id="main">
  <app-header></app-header>
  <h1 >Find Your Group</h1><br>
<ul id="filters">
    <li>
        Filter by Region:
        <select v-model="selectedRegion" id="filterByRegion" name="filterByRegion">
          <option value="All Regions">All Regions</option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
          <option value="Central">Central</option>
          <option value="Neither">Neither</option>
        </select>
    </li>
    <li>
        Filter by Venue:
        <select v-model="selectedVenue" id="filterByVenue" name="filterByVenue">
          <option value="All Venues" selected >All Venues</option>
          <option value="Cafe">Cafe</option>
          <option value="Library">Library</option>
          <option value="Zoom">Zoom</option>
        </select>
    </li>
  </ul>

<br>
  <br />
  <h1>Available Groups</h1>
  <br />
  <body>
    <div id="app">
                  <div class="w3-col m7">
            <div class="w3-row-padding">
                <div class="w3-col m12">
                <div class="w3-card w3-round w3-white">
     <br> 
     <ul>
        <li v-for="item in filterRegion" v-bind:key="item.id">
          
          <div style="white-space: pre-line;"><b>Region:</b> {{item.chooseRegion}}</div>
          <div style="white-space: pre-line;"><b>Venue:</b> {{item.chooseVenue}}</div>
          <div style="white-space: pre-line;"><b>Student's Course:</b> {{item.course}}</div>          
          <div style="white-space: pre-line;"><b>Module 1:</b> {{item.module1}}</div>
          <div style="white-space: pre-line;"><b>Module 2:</b> {{item.module2}}</div>
          <div style="white-space: pre-line;"><b>Module 3:</b> {{item.module3}}</div>
          <div style="white-space: pre-line;"><b>Group Creator:</b> {{item.name}}</div>
          <div style="white-space: pre-line;"><b>Group Members:</b> {{item.members}}</div>
          <div style="white-space: pre-line;"><b>Remarks:</b> {{item.remark}}</div>
          <br>
          <button v-bind:id="item.id" v-on:click="joinGroup(item)">
            Join
          </button>
          
          <hr class="w3-clear">
           <br><br/>
          <br />
        </li>
      </ul>
      

      </div></div></div><h3>Can't find a group? Create one now!</h3><br><br></div>
    
    </div>
    
  </body>
</div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>

<script >
import store from '../store.js';
import database from "../firebase.js";
import Header from "./Header.vue";
export default {
  data() {
    return {
      itemList: [],
      name: store.state.user.name,
      course: store.state.user.course,
      email: store.state.user.email,
      number: store.state.user.contact,
      counter: "",
      selectedRegion: "All Regions",
      selectedVenue: "All Venues"
    };
  },

  components: {
    "app-header": Header
  },

  computed: {
    filterRegion: function() {
      return this.itemList
        .filter(
          this.selectedRegion == "All Regions"
            ? () => true
            : i => i.chooseRegion == this.selectedRegion
        )
        .filter(
          this.selectedVenue == "All Venues"
            ? () => true
            : i => i.chooseVenue == this.selectedVenue
        );

    }

  },

  methods: {
    joinGroup: function(item) {
      this.counter=item.count;
      this.counter++;
      if (item.name==this.name){
        alert("You are the creator of this group.")
      }
      else if (item.members.indexOf(this.name) != -1){
        alert("You have already joined this group.")
      }
      else{
      database
        .collection("groups")
        .doc(item.id)
        .collection("studentInfo")
        .doc("NewStudentInfo" + this.counter)
        .set({ name: this.name }, { merge: true });
      database
        .collection("groups")
        .doc(item.id)
        .collection("studentInfo")
        .doc("NewStudentInfo" + this.counter)
        .set({ course: this.course }, { merge: true });
      database
        .collection("groups")
        .doc(item.id)
        .collection("studentInfo")
        .doc("NewStudentInfo" + this.counter)
        .set({ email: this.email }, { merge: true });
      database
        .collection("groups")
        .doc(item.id)
        .collection("studentInfo")
        .doc("NewStudentInfo" + this.counter)
        .set({ number: this.number }, { merge: true });

      if (item.members == " ") {
        database
        .collection("groups")
        .doc(item.id)
        .set({ members: item.members + this.name }, { merge: true });
      } else {
        database
        .collection("groups")
        .doc(item.id)
        .set({ members: item.members + ", " + this.name }, { merge: true });
      }

      item.course = item.course + ", " + this.course;
      alert("after operation count"+this.counter);

      alert("you have successfully been added!");
    }},
    fetchItems:  function() {
      database
        .collection("groups")
        .get()
        .then(querySnapShot => {
          querySnapShot.forEach(async doc => {
            let item;
            item = doc.data();
            item.id = doc.id;
            item.count=await this.fetchItem(item) || 0;
            this.itemList.push(item);
          });
        }); 
    },
    fetchItem: function(item) {  
      return database.collection('groups').doc(item.id).get().then((document)=>{
          return document.ref.collection('studentInfo').get().then((querySnapShot)=>{  
            console.log(querySnapShot.size);
            return querySnapShot.size;
        
          });});      
      

             }
  },
  created() {
    this.fetchItems();
  }
};


</script>


<style scoped>
@import url("https://www.w3schools.com/w3css/4/w3.css");
@import url("https://www.w3schools.com/lib/w3-theme-blue-grey.css");

#app {
  text-align: center;
  transform: translatex(20%);
  font-size: 13px;
 
  
}

p {
  align-content: center;
  color: ivory;
  
}
label {
  display: inline-block;
  margin: 20px 0 10px;
  width: 50%;
  align-content: flex-start;
}
input[type="text"] {
  display: inline-block;
  width: 50%;
}
button{
    cursor: pointer;
    border-radius: 5em;
    color: #fff;
    background: #16A085;
    border: 1px solid #555555;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 13px;
     
}
ul { list-style-type:none; }


#filters{
  display: table;
  width: 30%;
  height: 20px;
  table-layout: fixed;
  float: center;
    transform: translatex(110%);
}

#filters li{
  display: table-cell;
  width: 25%;
  text-align: center;  
}

</style>

