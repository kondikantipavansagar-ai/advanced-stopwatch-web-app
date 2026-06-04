let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {
    let h = String(hours).padStart(2,'0');
    let m = String(minutes).padStart(2,'0');
    let s = String(seconds).padStart(2,'0');

    display.textContent = `${h}:${m}:${s}`;
}

function startWatch() {
    if(timer) return;

    timer = setInterval(() => {
        seconds++;

        if(seconds === 60){
            seconds = 0;
            minutes++;
        }

        if(minutes === 60){
            minutes = 0;
            hours++;
        }

        updateDisplay();
    },1000);
}

function pauseWatch() {
    clearInterval(timer);
    timer = null;
}

function resetWatch() {
    clearInterval(timer);
    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();
    laps.innerHTML = "";
}

function addLap() {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    laps.appendChild(li);
}

document.getElementById("start").addEventListener("click", startWatch);
document.getElementById("pause").addEventListener("click", pauseWatch);
document.getElementById("reset").addEventListener("click", resetWatch);
document.getElementById("lap").addEventListener("click", addLap);

document.addEventListener("keydown",(e)=>{
    const key = e.key.toLowerCase();

    if(key==="s") startWatch();
    if(key==="p") pauseWatch();
    if(key==="r") resetWatch();
    if(key==="l") addLap();
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("light");

    themeBtn.textContent =
        document.body.classList.contains("light")
        ? "☀️"
        : "🌙";
});

function updateDateTime(){
    document.getElementById("dateTime").textContent =
        new Date().toLocaleString();
}

setInterval(updateDateTime,1000);
updateDateTime();

updateDisplay();