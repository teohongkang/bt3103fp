  
<template>
<div id="main">
  <app-header></app-header>
  <h1 style="font-size:65px">Find Your Group</h1>
  <!-- <h3>Enter your particulars</h3>Your name:
  <br />
  <input type="text" v-model="name" />
  <br />
  <br />Your Course:
  <br />
  <input type="text" name="email" v-model="course" />
  <br />
  <br />NUS Email:
  <br />
  <input type="text" v-model="email" />
  <br />
  <br />Contact Number:
  <br />
  <input type="text" v-model="number" /> -->
  <br />
  <br />Filter by Region:
  <br />
  <select v-model="selectedRegion" id="filterByRegion" name="filterByRegion">
    <option value="All Regions">All Regions</option>
    <option value="North">North</option>
    <option value="South">South</option>
    <option value="East">East</option>
    <option value="West">West</option>
    <option value="Central">Central</option>
    <option value="Neither">Neither</option>
  </select>
  <!-- <span>{{ this.selectedRegion }}</span> -->

  <br />
  <br />Filter by Venue:
  <br />
  <select v-model="selectedVenue" id="filterByVenue" name="filterByVenue">
    <option value="All Venues" selected >All Venues</option>
    <option value="Cafe">Cafe</option>
    <option value="Library">Library</option>
    <option value="Zoom">Zoom</option>
  </select>
  <!-- <span>{{ this.selectedVenue }}</span> -->

  <br />
  <h1 style="font-size:30px">Available Groups:</h1>
  <br />
  <body>
    <div id="app">
      <ul>
        <li v-for="item in filterRegion" v-bind:key="item.id">
          <div style="white-space: pre-line;"><b>Region:</b> {{item.chooseRegion}}</div>
          <div style="white-space: pre-line;"><b>Venue:</b> {{item.chooseVenue}}</div>
          <div style="white-space: pre-line;"><b>Group Creator's Email:</b> {{item.email}}</div>
          <div style="white-space: pre-line;"><b>Group Creator's Phone Number:</b> {{item.phone}}</div>
          <div style="white-space: pre-line;"><b>Student's Course:</b> {{item.course}}</div>          
          <div style="white-space: pre-line;"><b>Module 1:</b> {{item.module1}}</div>
          <div style="white-space: pre-line;"><b>Module 2:</b> {{item.module2}}</div>
          <div style="white-space: pre-line;"><b>Module 3:</b> {{item.module3}}</div>
          <div style="white-space: pre-line;"><b>Group Creator:</b> {{item.name}}</div>
          <div style="white-space: pre-line;"><b>Group Members:</b> {{item.members}}</div>
          <div style="white-space: pre-line;"><b>Remarks:</b> {{item.remark}}</div>
          <br>
          <button v-bind:id="item.id" v-on:click="joinGroup(item)">
            Submit
            <i class="fas fa-user-plus"></i>
          </button>
          
          <div style="white-space: pre-line;">--------------------------------------------------------------------------------------</div>
          <br><br/>
          <br />
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
      count: 1,
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
      database
        .collection("groups")
        .doc(item.id)
        .collection("studentInfo")
        .doc("NewStudentInfo" + this.count)
        .set({ name: this.name }, { merge: true });
      database
        .collection("groups")
        .doc(item.id)
        .collection("studentInfo")
        .doc("NewStudentInfo" + this.count)
        .set({ course: this.course }, { merge: true });
      database
        .collection("groups")
        .doc(item.id)
        .collection("studentInfo")
        .doc("NewStudentInfo" + this.count)
        .set({ email: this.email }, { merge: true });
      database
        .collection("groups")
        .doc(item.id)
        .collection("studentInfo")
        .doc("NewStudentInfo" + this.count)
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
         
      //this.studentName=database.collection('groups').doc(item.id).collection('studentInfo').doc('NewStudentInfo'+this.count).name;
      //item.name = item.name + ", " + this.name;
      item.course = item.course + ", " + this.course;
      this.count++;
      // this.name = "";
      // this.course = "";
      // this.email = "";
      // this.number = "";
      alert("you have successfully been added!");
    },
    fetchItems: function() {
      database
        .collection("groups")
        .get()
        .then(querySnapShot => {
          let item = {};
          querySnapShot.forEach(doc => {
            item = doc.data();
            // item.show=false
            item.id = doc.id;
            this.itemList.push(item);
          });
        });
    }
  },
  created() {
    this.fetchItems();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  margin: 20px auto;
  max-width: 500px;
  background: rgb(163, 220, 228);
     padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 10px;
    padding-top: 10px;
  border: 1px solid #555555;
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
</style>