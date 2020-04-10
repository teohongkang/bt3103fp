<template>
    <body bgcolor = "#fff3e6">
	<div class = "container">
        <app-header></app-header>
        <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <img src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt = "Discussion" style = "width: 100%;">
		<div class = "content">
			<h1>Hello! <br> Welcome to GroupFinder! Click to join a group now.</h1>
			<button value = "Find Group" onclick="document.location = 'grpfinder.html'"><i class="fa fa-group"></i> Find Group</button>
			<button value = "Create Group" id = "continue" onclick="document.location = 'creategroup.html'"><i class="fa fa-pencil-square-o"></i> Create Group</button>
			<button value = "About Us" id = "continue" onclick="document.location = 'aboutus.html'"><i class="fa fa-info-circle"></i> About Us</button>
		</div>
	</div>
    </body>

</template>

<script>
import Header from "./Header.vue";
export default {
    components: {
        "app-header": Header
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
} 


body {
    position: fixed;
    margin: 0;
}


.container {
    position: fixed;
    margin: 0 auto;
    height: 80%;
    width: 100%;
}

.container img {
	margin-bottom: -5px;
}

.container .content {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Black background with transparency */
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
}


button {
	font-size: large;
	border-radius: 4px;
	border: 3px solid #ff91af;
	padding: 10px;
    cursor: pointer;
    background-color: #ff91af;
    color: white;
}

button:hover {
    background-color: white;
    color: black;
    border: 3px solid #ff91af;
}

#continue {
	margin-left: 1em;
}

.credits {
	position: absolute;
    bottom: 6px;
    right: 10px;
    color: white;
    font-size: 8px;
}

</style>
