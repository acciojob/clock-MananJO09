//your JS code here. If required.
const time =document.getElementById("timer");

setInterval(() =>{
	let d= new Date();
	// let hours = d.getHours().toString().padStart(2, "0");
 //  let minutes = d.getMinutes().toString().padStart(2, "0");
 //  let seconds = d.getSeconds().toString().padStart(2, "0");
	// time.innerText= hours +":"+ minutes+":"+seconds+" "
	time.innerText = d.toLocaleString();
},1000)