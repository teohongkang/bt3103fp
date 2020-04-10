<template>
    <div id="main">
        <app-header></app-header>
        <h2> What is GroupFinder? </h2>
		<h3> GroupFinder is a website that aims to allow students to find and join study groups with other NUS students staying in specific regions outside of school. We cater to students who want to join study groups according to their preferences. 
		Students can select and filter study groups according to their preferred region, specific study venues and modules needed. They can then either join an existing study group or request to form another study group.</h3>

		<br>

		<h2> Who are we? </h2>
		<img v-bind:src="image"/>
		<h3> The team behind GroupFinder are a group of NUS students who saw that there was a lack of service to help students not living on campus find a study group and we decided that we would like to create a platform where these students can also find a study group as easily as their peers who live in halls and RCs. </h3>

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
		
		Your name: <br>
		<input type="text" name="realname" v-model="realName"/><br>
		<br>

		Your email: <br>
		<input type="text" name="email" v-model="email"/><br>
		<br>

		Your concern: <br>
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
import database from "../firebase.js";
import Header from "./Header.vue"

    export default {
        data(){
            return {
                image:"https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                realName:"",
                email:"",
                comments:"",
                concernTopic:"",
                count:1,
            }
        },

        methods:{
            validate:function(){
                if (this.realName == "") {
                    alert("Please enter your name.");
                    return false;
                } else if (this.email == "") {
                    alert("Please enter your email.");
                    return false;
                } else if (this.comments == "") {
                    alert("Please enter your comments.");
                    return false;
                } else {
                database.collection('AboutUsFeedback').doc('Bx8gIL3l0KKc2ViJOSFb').collection('Feedback')
                .doc('FeedbackNumber '+this.count).set({Topic:this.concernTopic}, { merge: true });
                database.collection('AboutUsFeedback').doc('Bx8gIL3l0KKc2ViJOSFb').collection('Feedback')
                .doc('FeedbackNumber '+this.count).set({name:this.realName}, { merge: true });
                database.collection('AboutUsFeedback').doc('Bx8gIL3l0KKc2ViJOSFb').collection('Feedback')
                .doc('FeedbackNumber '+this.count).set({email:this.email}, { merge: true });
                database.collection('AboutUsFeedback').doc('Bx8gIL3l0KKc2ViJOSFb').collection('Feedback')
                .doc('FeedbackNumber '+this.count).set({comment:this.comments}, { merge: true });
                this.count++;
                alert("this is update function")
                this.realName="";
                this.email="";
                this.comments="";
                this.concernTopic=""; 
                    alert("Thank you for getting in touch with us. A team member will get back to you soon.");
                }
            }
        },
        
        components: {
            "app-header": Header
        }
    }
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
#main {
	font-family: "Book Antiqua";
    text-align: left;
    font-size: small;
    margin-left: 48px;
}

image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
}

button {
	border-radius: 4px;
	border: 1px solid #555555;
	padding: 10px 15px;
	cursor: pointer;
	font-family: "Book Antiqua";
}

input {
	padding: 5px 10px;
	border-radius: 2px;
	border: 1px solid #555555;
	font-family: "Book Antiqua";
}

select {
	padding: 2px;
	border-radius: 1px;
	border: 1px solid #555555;
	font-family: "Book Antiqua";
}

h3 {
	line-height: 200%;
}
</style>