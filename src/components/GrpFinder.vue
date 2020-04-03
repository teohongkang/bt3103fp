<template>
<div id="main">
  <h1 style="font-size:65px">Find Your Group</h1>
  <h3>Enter your particulars</h3>Your name:
  <br />
  <input type="text" name="name" v-model="information.name" />
  <br />
  <br />Your Course:
  <br />
  <input type="text" name="course" v-model="information.course" />
  <br />
  <br />NUS Email:
  <br />
  <input type="text" name="email" v-model="information.email" />
  <br />
  <br />Contact Number:
  <br />
  <input type="text" name="contactNumber" v-model="information.contactNumber" />
  <br />
  <br />Filter by Region:
  <br />
  <select id="filterByRegion" name="filterByRegion" v-model="information.filterByRegion">
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
  <select id="filterByVenue" name="filterByVenue" v-model="information.filterByVenue">
    <option value="allVenues">All Venues</option>
    <option value="cafe">Cafe</option>
    <option value="library">Library</option>
  </select>

  <br />
  <h1 style="font-size:30px">Available Groups:</h1>
  <br />
  <body>
    <div id="app">
      <!-- <ul>
        <li
          v-for="(title, type, venue, region, currMembers, modules) in itemsListInput"
          v-bind:key="type"
        >
          {{ title}}
          {{type}}
          {{venue}}
          {{region}}
          {{currMembers}}
          {{modules}}
        </li>
      </ul>-->
      <button v-on:click.prevent="joinGroup">
        Submit
        <i class="fas fa-user-plus"></i>
      </button>
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
export default {
  data() {
    return {
      //msg:"Add Item",
      information: {
        name: "",
        course: "",
        email: "",
        contactNumber: "",
        filterByRegion: "",
        filterByVenue: ""
      },
      methods: {
        joinGroup: function() {
          database.collection("information").add(this.information);
        }
      }
    };
  }
};
</script>

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
