let [hour, minute, second] = [0, 0, 0];
let display = document.getElementById('display');
let timer = null;

function stopwatch() {
    second++;
    if (second === 60){
        second = 0;
        minute++;
    }
    if (minute === 60) {
        minute = 0;
        hour++;
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;

    display.innerText = `${h}:${m}:${s}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    [hour, minute, second] = [0, 0, 0];
    display.innerText = "00:00:00";
});