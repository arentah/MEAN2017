const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//var hr = document.getElementById("hour");

var date = new Date();
	//console.log(date);

	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	console.log(hr +" "+min+" "+sec);
	let hrPosition = ((hr%12)*30)+(min/60*30);
	//let hrPosition = ((hr%12)*30)+(min*.5);
	let mnPosition = (min*6)+(sec*.1);
	let scPosition = sec*6;

	
function runTheClock(){

	scPosition += 6;
	mnPosition += .1;
	hrPosition += (3/360);

	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND.style.transform = "rotate(" + mnPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + scPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);



/*var counter = 1;
for(counter; counter <10000;counter++){
	if(counter % 1000 == 0){
		console.log(counter);
		runTheClock();
	}
}*/
/*while(true){

	//console.log(counter);
	counter++;
	if(counter % 1000 == 0){
		runTheClock();	
	}
}*/