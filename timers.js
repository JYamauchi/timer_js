var h1 = document.getElementsByTagName('h1')[0],
	start = document.getElementById('start'),
	stop = document.getElementById('stop'),
	reset = document.getElementById('reset'),
	sec = 0,
	min = 0,
	hour = 0;

var clock = window.setInterval("disp", 1000);
var stop = window.clearInterval(clock);

var timer;
function myTimer() {
    timer = setInterval(function(){myTimer()}, 1000);
}

document.getElementById("start").addEventListener("click", function(action) {
	// action.preventDefault();
	// var timeDigits = document.createElement("h1");
 //    document.body.appendChild(timeDigits);
 //    timeDigits.className = "timeDigits";
	// h1 = 0;

	console.log("Yay, you just typed");

});


function add() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hour++;
        }
    };

document.getElementById("stop").addEventListener("click", function(action) {
	action.preventDefault();
	h1 = 0;

	console.log("Yay, you just typed");

})

document.getElementById("reset").addEventListener("click", function(action) {
	action.preventDefault();
	sec = 0;
	min = 0;
	hour = 0;

	console.log("Yay, you just typed");

})

