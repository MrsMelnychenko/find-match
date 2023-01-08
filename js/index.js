const startBtn = document.querySelector(".start")
const 

function startTimer() {
let start = Date.now();
setInterval(function() {
    let delta = Date.now() - start; // milliseconds elapsed since start
    …
    output(Math.floor(delta / 1000)); // in seconds
    // alternatively just show wall clock time:
    output(new Date().toUTCString());
}, 1000);
}
startBtn.addEventListener("click", startTimer);