<template>
<div id="main">
  <app-header></app-header>
  <h1 style="font-size:65px">Find Your Group</h1>
  <h3>Enter your particulars</h3>Your name:
  <br />
  <input type="text" v-model="name"/>
  <br />
  <br />Your Course:
  <br />
  <input type="text" name="email" v-model="course" />
  <br />
  <br />NUS Email:
  <br />
  <input type="text" v-model="email"/>
  <br />
  <br />Contact Number:
  <br />
  <input type="text" v-model="number"/>
  <br />
  <br />Filter by Region:
  <br />
  <select id="filterByRegion" name="filterByRegion" @change="onChange(event)">
    <option value="allRegions">All Regions</option>
    <option value="north">North</option>
    <option value="south">South</option>
    <option value="east">East</option>
    <option value="west">West</option>
    <option value="central">Central</option>
    <option value="neither">Neither</option>
  </select>
  <br />
  <br />Filter by Venue:
  <br />
  <select id="filterByVenue" name="filterByVenue" @change="onChohange(event)">
    <option value="allVenues">All Venues</option>
    <option value="cafe">Cafe</option>
    <option value="library">Library</option>
  </select>

  <br />
  <h1 style="font-size:30px">Available Groups:</h1>
  <br />
  <body>
    <div id="app">
      <ul>
        <li v-for="item in itemList" v-bind:key="item.id">
          
          <div style="white-space: pre-line;">Region: {{item.chooseRegion}}</div>
          <div style="white-space: pre-line;">Venue: {{item.chooseVenue}}</div>
          <div style="white-space: pre-line;">Course: {{item.course}}</div>          
          <div style="white-space: pre-line;">Email: {{item.email}}</div>
          <div style="white-space: pre-line;">Module 1: {{item.module1}}</div>
          <div style="white-space: pre-line;">Module 2: {{item.module2}}</div>
          <div style="white-space: pre-line;">Module 3: {{item.module3}}</div>
          <div style="white-space: pre-line;">Name(s): {{item.name}}</div>
          <div style="white-space: pre-line;">Phone Number: {{item.phone}}</div>
          <div style="white-space: pre-line;">Remarks: {{item.remark}}</div>
          <button v-bind:id="item.id" v-on:click="joinGroup(item)" > Submit <i class="fas fa-user-plus"></i>
          </button>
          <div style="white-space: pre-line;"> ------------------------------- </div>
          
        </li>
      </ul>

      <br />
      <br />

      <br />
      <br />
    </div>
  </body>
</div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>

<script >
import database from "../firebase.js";
import Header from "./Header.vue";
export default {
  data() {
    return {
      itemList:[],
      name:"",
      course:"",
      email:"",
      number:"",
      count:1,
 
    };
  },

  components: {
        "app-header": Header
    },

  methods: {
joinGroup:function(item){
 // UPDATE AND ADD DATA TO DATABASE, NOT REPLACE CURRENT DATA
  //  database.collection('groups').doc(item.id).set({Nextname:this.name}, { merge: true });
  //  alert("you have successfully been added!")
 
  database.collection('groups').doc(item.id).collection('studentInfo').doc('NewStudentInfo'+this.count)
  .set({name:this.name}, { merge: true });
  database.collection('groups').doc(item.id).collection('studentInfo').doc('NewStudentInfo'+this.count)
  .set({course:this.course}, { merge: true });
  database.collection('groups').doc(item.id).collection('studentInfo').doc('NewStudentInfo'+this.count)
  .set({email:this.email}, { merge: true });
  database.collection('groups').doc(item.id).collection('studentInfo').doc('NewStudentInfo'+this.count)
  .set({number:this.number}, { merge: true });
 
  //this.studentName=database.collection('groups').doc(item.id).collection('studentInfo').doc('NewStudentInfo'+this.count).name;
  item.name=item.name+', '+this.name;
  item.course=item.course+', '+this.course;
  this.count++;
  this.name="";
  this.course="";
  this.email="";
  this.number="";
  alert("you have successfully been added!")
  
},  
fetchItems:function(){
    database.collection('groups').get().then((querySnapShot)=>{
    let item={}
    querySnapShot.forEach(doc=>{
    item=doc.data()
   // item.show=false
    item.id=doc.id
    this.itemList.push(item)
}) }) }
},
created(){
  this.fetchItems() }
};


// var membersA = ["Member 1", "Member 2"];
// var membersB = ["Member 1", "Member 2", "Member 3"];
// var membersC = ["Member 1", "Member 2", "Member 3", "Member 4", "Member 5"];
// var membersD = ["Member 1", "Member 2"];
// var membersE = ["Member 1"];
// var membersF = ["Member 1", "Member 2", "Member 3"];
// var membersG = ["Member 1", "Member 2", "Member 3", "Member 4"];
// var membersH = ["Member 1", "Member 2"];
// var membersI = ["Member 1", "Member 2"];
// var membersJ = ["Member 1", "Member 2", "Member 3", "Member 4"];
// var membersK = ["Member 1"];

// itemsListInput: [
//   {
//     title: "Study Group A",
//     type: "study group",
//     venue: "Cafe",
//     region: "North",
//     currMembers: membersA.length,
//     modules: "BT3103, CS2040"
//   },
//   {
//     title: "Study Group B",
//     type: "study group",
//     venue: "Library",
//     region: "North",
//     currMembers: membersB.length,
//     modules: "GEQ1000, ST3200"
//   },
//   {
//     title: "Study Group C",
//     type: "study group",
//     venue: "Cafe",
//     region: "South",
//     modules: "GES3450",
//     currMembers: membersC.length
//   },
//   {
//     title: "Study Group D",
//     type: "study group",
//     venue: "Library",
//     region: "South",
//     currMembers: membersD.length,
//     modules: "No Preference"
//   },
//   {
//     title: "Study Group E",
//     type: "study group",
//     venue: "Cafe",
//     region: "East",
//     currMembers: membersE.length,
//     modules: "ACC1701, GET2302"
//   },
//   {
//     title: "Study Group F",
//     type: "study group",
//     venue: "Library",
//     region: "East",
//     currMembers: membersF.length,
//     modules: "No Preference"
//   },
//   {
//     title: "Study Group G",
//     type: "study group",
//     venue: "Cafe",
//     region: "West",
//     currMembers: membersG.length,
//     modules: "BT3102, CS2030"
//   },
//   {
//     title: "Study Group H",
//     type: "study group",
//     venue: "Library",
//     region: "West",
//     currMembers: membersH.length,
//     modules: "GEH1071, IS2101"
//   },
//   {
//     title: "Study Group I",
//     type: "study group",
//     venue: "Library",
//     region: "Central",
//     currMembers: membersI.length,
//     modules: "No Preference"
//   },
//   {
//     title: "Study Group K",
//     type: "study group",
//     venue: "Cafe",
//     region: "Central",
//     currMembers: membersK.length,
//     modules: "IS3421"
//   },
//   {
//     title: "Study Group J",
//     type: "study group",
//     venue: "Cafe",
//     region: "Central",
//     currMembers: membersJ.length,
//     modules: "CS4032"
//   }
// ];
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  margin: 20px auto;
  max-width: 500px;

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
</style>
