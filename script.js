//your JS code here. If required.
const time =document.getelementbyId("time");

setInterval(() =>{
	let d= new Date();
	time.innerText=d.getSeconds();
},1000)