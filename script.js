// to target theHTML elements by ID
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval

var lengthOfPomodoro = 1500;
console.log(lengthOfPomodoro);
var timeLeft = lengthOfPomodoro
var minutes
var seconds

function timerUpdate(){
    // setInterval(function(), time in ms) is a built-in JS function that executes the 'function inside the parameter' in the given 'time in ms'
    interval = setInterval(function(){
        timeLeft--;
        //Math.floor() rounds the integer to the nearest number
        minutes = Math.floor(timeLeft / 60);
        seconds = timeLeft % 60;
        // innerHTML changes the element contents
        // padStart() is used to format the time. e.g. 1:9 to 01:09
        // toString() converts the given number into string
        timerEl.innerHTML = minutes.toString().padStart(2,"0") +":"+ seconds.toString().padStart(2,"0");

        // stops the countdown after reaching 00:00
        if (timeLeft <= 0) {
           
            // clear interval stops the execution of setInterval()
            clearInterval(interval)
             // alert() Gives a Popup alert message in strings
             alert(" Time's Up!")
             // resets the time to not let it go Negative after 00:00
             timeLeft = 1500;
            
        }
        console.log(seconds);
        
    }, 1000)
}


function timerStart(){
        timerUpdate();
        var lengthOfPomodoro = 10;  
        
}
function timerStop(){
    clearInterval(interval);
    console.log("stop");
}
function timerReset(){
    timeLeft= lengthOfPomodoro;
    clearInterval(interval); 
    console.log("reset");
}

// addEventListener() executes a function upon an interaction with an element.
// in this case, timerStart() function executes upon click of start button as referenced by startEl.
startEl.addEventListener("click", timerStart);
stopEl.addEventListener("click", timerStop);
resetEl.addEventListener("click", timerReset);