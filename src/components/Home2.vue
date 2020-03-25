<template>
<body>
  <div class="main">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    
    <p class="sign">Login with NUS</p>
        <form name="login" @submit.prevent="validate">
        <input class= "email" name="email" type="text" align="center" placeholder="NUS email" v-model="email">
        <input class= "pass" name="pass" type="text" align="center" placeholder="Password" v-model="pass">
        <button value="Submit" type="submit" >Submit</button>
        </form>
                
    </div>
     
</body>
</template>

<script>
export default {
    data(){
        return{
            name:"",
            pass:"",
            Allusers: [{name: "Sam", email:"e0525169@u.nus.edu",password:"1234"},
            {name: "Tom", email:"e0876234@u.nus.edu",password:"hello"},
            {name: "Jess", email:"e0876234@u.nus.edu",password:"hello453"}] 
        }
    },
    methods: {
        validate: function() {
            var name = document.forms["login"]["email"].value;
            var pass = document.forms["login"]["pass"].value;
            if (name == "") {
                alert("Please enter your NUS email.");
                return false;
            } else if (pass == "") {
                alert("Please enter your password.");
                return false;
            } 

            var existUserName = false;
            var existPassword = false;
            var userName = "" 
            for (const i of this.Allusers) {
                if (i.email == name) {
                    existUserName = true;
                    if (i.password == pass) {
                    existPassword = true;
                    userName = i.name;
                    } 
                } 
            }

            if (existPassword && existUserName) {
                alert("Welcome Back, " + userName + " !");
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

.email {
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