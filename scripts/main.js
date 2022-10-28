/* Generate Random Numbers */
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Change Title when user is away on another tab */
const titles = ["We have new Courses!", "Come Back!", "Your future is waiting!"];
const userAwayWorket = setInterval(()=>{
	if(!(document.visibilityState === 'visible')) {
		document.title = titles[randInt(0,titles.length-1)] + " | NoorTech";
	} 
}, 5000);



