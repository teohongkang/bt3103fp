<template>
	<div class = "container">
        <app-header></app-header>
        <!-- Page Container -->
        <div class="w3-container w3-content" style="max-width:1400px;margin-top:80px">    
        <!-- The Grid -->
        <div class="w3-row">
            <!-- Left Column -->
            <div class="w3-col m3">
            <!-- Profile -->
            <div class="w3-card w3-round w3-white">
                <div class="w3-container">
                <h4 class="w3-center">My Profile</h4>
                <p class="w3-center"><img src="/assets/Avatar.webp" class="w3-circle" style="height:106px;width:106px" alt="Avatar"></p>
                <hr>
                <p><i class="fa fa-address-card fa-fw w3-margin-right w3-text-theme"></i> {{name}}</p>
                <p><i class="fa fa-institution fa-fw w3-margin-right w3-text-theme"></i> {{course}}</p>
                <p><i class="fa fa-envelope fa-fw w3-margin-right w3-text-theme"></i> {{email}}</p>
                </div>
            </div>
            <br>
            
            <!-- Accordion -->
            <div class="w3-card w3-round">
                <div class="w3-white">
                <button class="w3-button w3-block w3-theme-l1 center"><strong>Academic Calendar</strong></button>
                <button class="w3-button w3-block w3-theme-l1 center"><i class="fa fa-bank fa-fw w3-margin-right"></i> Start of Semester: 13 Jan 2020</button>
                <button class="w3-button w3-block w3-theme-l1 center"><i class="fa fa-book fa-fw w3-margin-right"></i> Recess Week: 22 Feb - 1 Mar 2020</button>
                <button class="w3-button w3-block w3-theme-l1 center"><i class="fa fa-book fa-fw w3-margin-right"></i> Reading Week: 11 Apr - 24 Apr 2020</button>
                <button class="w3-button w3-block w3-theme-l1 center"><i class="fa fa-graduation-cap fa-fw w3-margin-right"></i> Examination Week: 25 Apr - 9 May 2020</button>
                </div>      
            </div>
            <br>          
            <!-- End Left Column -->
            </div>
            
            <!-- Middle Column -->
            <div class="w3-col m7">
            <div class="w3-row-padding">
                <div class="w3-col m12">
                <div class="w3-card w3-round w3-white">
                    <br>
                    <h1 class=center>Created Groups</h1>
                    <hr class="w3-clear">
                    <div class="w3-container w3-padding">
                            <div id="app">
                            <ul>
                                <li v-for="item in itemList" v-bind:key="item.id">
                                    <div style="white-space: pre-line;">Region: {{item.chooseRegion}}</div>
                                    <div style="white-space: pre-line;">Venue: {{item.chooseVenue}}</div>       
                                    <div style="white-space: pre-line;">Modules Preferred: {{item.module1}} {{item.module2}} {{item.module3}}</div>
                                    <div style="white-space: pre-line;">Group Creator: {{item.name}}</div>
                                    <div style="white-space: pre-line;">Group Members: {{item.members}}</div>
                                    <div style="white-space: pre-line;">Remarks: {{item.remark}}</div>
                                    <hr class="w3-clear">
                                </li>
                            </ul>
                            </div>
                    </div>
                
                <div class="w3-col m12">
                <br>
                <div class="w3-card w3-round w3-white">
                    <br>
                    <h1 class=center>Joined Groups</h1>
                    <hr class="w3-clear">
                    <div class="w3-container w3-padding">
                            <div id="app">
                            <ul>
                                <li v-for="user in userGroups" v-bind:key="user.id">
                                    <div style="white-space: pre-line;">Region: {{user.chooseRegion}}</div>
                                    <div style="white-space: pre-line;">Venue: {{user.chooseVenue}}</div>       
                                    <div style="white-space: pre-line;">Modules Preferred: {{user.module1}} {{user.module2}} {{user.module3}}</div>
                                    <div style="white-space: pre-line;">Group Creator: {{user.name}}</div>
                                    <div style="white-space: pre-line;">Group Creator's Email: {{user.email}}</div>
                                    <div style="white-space: pre-line;">Group Creator's Phone Number: {{user.phone}}</div>
                                    <div style="white-space: pre-line;">Group Members: {{user.members}}</div>
                                    <div style="white-space: pre-line;">Remarks: {{user.remark}}</div>
                                    <hr class="w3-clear">
                                </li>
                            </ul>
                            </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>

            <!-- End Middle Column -->
            </div>

            <!-- Right Column -->
            <div class="w3-col m2">
            <!-- Modules --> 
            <div class="w3-card w3-round w3-white w3-hide-small">
                <div class="w3-container">
                <p>Modules Enrolled</p>
                <p>
                    <span class="w3-tag w3-small w3-theme-d5">{{module1}}</span>
                    <span class="w3-tag w3-small w3-theme-d4">{{module2}}</span>
                    <span class="w3-tag w3-small w3-theme-d3">{{module3}}</span>
                    <span class="w3-tag w3-small w3-theme-d2">{{module4}}</span>
                    <span class="w3-tag w3-small w3-theme-d1">{{module5}}</span>
                </p>
                </div>
            </div>
            <br>
            
            <!-- Alert Box -->
            <div class="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
                <span onclick="this.parentElement.style.display='none'" class="w3-button w3-theme-l3 w3-display-topright">
                <i class="fa fa-remove"></i>
                </span>
                <p><strong>Hey!</strong></p>
                <p>Exams week is approaching. Better start preparing with your study buddies now!</p>
            </div>
            <div class="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
                <span onclick="this.parentElement.style.display='none'" class="w3-button w3-theme-l3 w3-display-topright">
                <i class="fa fa-remove"></i>
                </span>
                <p><strong>Covid19 Alert!</strong></p>
                <p>In light of the current situation, all study sessions should be restricted to online meetups. Stay safe and take care!</p>
            </div>
            <!-- End Right Column -->
            </div>    
        <!-- End Grid -->
        </div>
        <!-- End Page Container -->
        </div>
        <br>
	</div>
</template>

<script>
import Header from "./Header.vue";
import store from '../store.js';
import database from '../firebase.js'

export default {
    data() {
        return {
            name: store.state.user.name,
            course: store.state.user.course,
            email: store.state.user.email,
            module1: store.state.user.module1,
            module2: store.state.user.module2,
            module3: store.state.user.module3,
            module4: store.state.user.module4,
            module5: store.state.user.module5,
            itemList: [],
            userGroups: []
        }
    },
    methods: {
        fetchItems:function(){
            database.collection('groups').get().then((querySnapShot)=>{
                let item={}
                querySnapShot.forEach(doc=>{
                    item=doc.data()
                    item.id=doc.id
                    if (item.name == this.name) {
                        this.itemList.push(item) 
                    } 
                }) 
            }) 
        },
        fetchGroups:function(){
            database.collection('groups').get().then((querySnapShot)=>{
                let user={}
                querySnapShot.forEach(doc=>{
                    user=doc.data()
                    user.id=doc.id
                    if (user.members.indexOf(this.name) != -1) {
                        this.userGroups.push(user)
                    }
                })
            })
        }
    },
    components: {
        "app-header": Header
    },
    created() {
        this.fetchItems(),
        this.fetchGroups()
    },
}
</script>

<style scoped>
.w3-text-theme {color:#16A085 !important}
ul { list-style-type:none; }
.center {text-align: center;}

@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://www.w3schools.com/w3css/4/w3.css");
@import url("https://www.w3schools.com/lib/w3-theme-blue-grey.css");
</style>
