//your JS code here. If required.
const time =document.getelementbyId("timer");

setInterval(() =>{
	let d= new Date();
	time.innerText=d.getSeconds();
},1000)