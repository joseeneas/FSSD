
let start = document.getElementById("start");
let stopTime = document.getElementById("stop");
let resetTime = document.getElementById("reset");
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let flag;

start.addEventListener("click", timer);
stopTime.addEventListener("click",stop);
resetTime.addEventListener("click",reset);

var currSec;
function timer() {
    currSec = parseInt(sec.textContent);
    flag=true;
    incrementSec();
}

function incrementSec() {
    if(flag==false)
        return;
    currSec++;
    sec.innerHTML = `${currSec}`;
    if (currSec < 60) {
        setTimeout(incrementSec, 1000);
    } else {
        setTimeout(minute, 2000);
    }
}

var currMin = parseInt(min.textContent);
function minute() {
    currMin++;
    currSec = 0;
    min.innerHTML = `${currMin}`;
    if (currMin > 59) {
        currMin=0;
        hour();
    }
    incrementSec();
}

var currHr = parseInt(hr.textContent);
function hour() {
    currHr++;
    hr.innerHTML = `${currHr}`;
}

function stop(){
    flag=false;
}

function reset(){
    stop();
    hr.innerHTML = `00`;
    min.innerHTML = `00`;
    sec.innerHTML = `00`;
}