<template>
    <div id="main">
        <app-header></app-header>
        <h1> What is GroupFinder? </h1>
		<p> GroupFinder is a website that aims to allow students to find and join study groups with other NUS students staying in specific regions outside of school. We cater to students who want to join study groups according to their preferences. 
		Students can select and filter study groups according to their preferred region, specific study venues and modules needed. They can then either join an existing study group or request to form another study group.</p>

		<br>

		<h1> Who are we? </h1>
		<img v-bind:src="image"/>
		<p> The team behind GroupFinder are a group of NUS students who saw that there was a lack of service to help students not living on campus find a study group and we decided that we would like to create a platform where these students can also find a study group as easily as their peers who live in halls and RCs. </p>

		<br>

		<h2> Additional Resources </h2>
		<h3> 
            <ul>
			<li><a href="http://www.nus.edu.sg/">NUS Website</a> <br></li>
			<li><a href="https://luminus.nus.edu.sg/">LumiNUS</a> <br></li>
			<li><a href="https://myedurec.nus.edu.sg/psp/cs90prd/?cmd=login">EduRec</a> <br></li>
			<li><a href="https://nusmods.com/">NUSMods</a> <br></li>
			<li><a href="https://www.instagram.com/groupfinderasdfg/">GroupFinder Instagram</a> <br></li>
            </ul>
		</h3>

		<br>

		<h2> Contact Us </h2>
		
		Your Preferred Email: <br>
		<input type="text" name="email" v-model="email"/><br>
		<br>

		Your Concern: <br>
		<select id="concerns" name="concern" v-model="concernTopic">
            <option value="feedback">Feedback</option>
            <option value="work">Work with Us</option>
            <option value="report">Report a User</option>
            <option value="Others">Others</option>
        </select>
        <br>
        <br>

		Your comments: <br>
		<textarea name="comments" rows="15" cols="100" v-model="comments"></textarea>

		<br><br>

		<button v-on:click = "validate()">Submit <i class="fa fa-envelope-o"></i></button>
        <br><br>
    </div>
</template>

<script>
import store from '../store.js';
import database from "../firebase.js";
import Header from "./Header.vue"

    export default {
        data(){
            return {
                image:"https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                realName:store.state.user.name,
                email:'',
                comments:"",
                concernTopic:"",
                count:"",
                
            }
        },

        methods:{
            validate:function(){
                if (this.email == "") {
                    alert("Please enter your email.");
                    return false;
                } else if (this.comments == "") {
                    alert("Please enter your comments.");
                    return false;
                } else {
                this.count++;             
                database.collection('testfeedback').doc('testfeedbacknum'+this.count)
                .set({Topic: this.concernTopic, name:this.realName, email:this.email, comment:this.comments}, { merge: true });

                this.email="";
                this.comments="";
                this.concernTopic=""; 
                    alert("Thank you for getting in touch with us. A team member will get back to you soon.");
                }
            },

            fetchItems: function() {
                database.collection('testfeedback').get().then(snap => {
                this.count = snap.size
                });
             }

        },

        created() {
            this.fetchItems();
  },      
        components: {
            "app-header": Header
        },
    }
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
#main {
    font-size: small;

}

image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
}

button {
    cursor: pointer;
    color: #fff;
    background: #16A085;
    border-radius: 5em;
    border: 1px solid #555555;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 13px;

}

input {
	padding: 5px 10px;
	border-radius: 2px;
	border: 1px solid #555555;
}

select {
	padding: 2px;
	border-radius: 1px;
	border: 1px solid #555555;
}

h3 {
	line-height: 200%;
}
ul { list-style-type:none; }
p{
    padding: 2px 250px 30px;
    text-align:justify;
    font-size: 15px;
}
</style>