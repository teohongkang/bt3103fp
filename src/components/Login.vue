<template>
<body>
    <p> GroupFinder </p>
        <div class="main">
            <link rel="stylesheet" href="css/style.css">
            <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
            
            <p class="sign">Login with NUS</p>
                <form name="login" @submit.prevent="validate">
                <input class= "username" name="username" type="text" align="center" placeholder="NUS netid" v-model="username">
                <input class= "pass" name="pass" type="password" align="center" placeholder="Password" v-model="pass">
                <button value="Submit" type="submit" >Submit</button>
                </form>
            </div>
     
</body>
</template>

<script>
import database from '../firebase.js'
export default {
    data(){
        return{
            username:"",
            pass:"",
            Allusers: [] 
        }
    },
    methods: {
        validate: function() {
            database.collection("users").get().then((querySnapShot)=>{
                let user={}
                querySnapShot.forEach(doc=>{
                    user=doc.data()
                    this.Allusers.push(user)
                })
            })
            var name = document.forms["login"]["username"].value;
            var pass = document.forms["login"]["pass"].value;
            if (name == "") {
                alert("Please enter your NUS netid.");
                return false;
            } else if (pass == "") {
                alert("Please enter your password.");
                return false;
            } 

            var existUserName = false;
            var existPassword = false;
            var greetname = "" 
            for (const i of this.Allusers) {
                if (i.username == name) {
                    existUserName = true;
                    if (i.password == pass) {
                    existPassword = true;
                    greetname = i.name;
                    } 
                } 
            }

            if (existPassword && existUserName) {
                alert("Welcome Back, " + greetname + "!");
                this.$router.push(this.$route.query.redirect || '/UserProfile')
            } else if (!existUserName) {
                alert("User does not exist.");
            } else if (!existPassword && existUserName) {
                alert("Incorrect password.");
            }            
        }   
    }
}
</script>>

<style scoped>

body {
    background-image: url("/assets/login2.png");
    height: 100vh;
    background-size: 1450px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-attachment:fixed;
    color:white ;

}



.main {
    background-color: #FFFFFF;
    width: 500px;        
    height: 300px;
    margin: 6em auto;
    border-radius: 1.5em;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
}
    
.sign {
    padding-top: 40px;
    color: #16A085;
    font-family: 'Ubuntu', sans-serif;
    font-weight: bold;
    font-size: 23px;
    margin-right: 35%;
}

.username {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border-radius: 20px;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 20px;
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
}
    
form.form1 {
    padding-top: 40px;
}
    
    .pass {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 20px;
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
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
    margin-left:55%; 
}

</style>