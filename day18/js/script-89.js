const elHours = document.getElementById("hours");
const elMinutes = document.getElementById("minutes");
const elSeconds = document.getElementById("seconds");
const tick = () => { 
    const dateTime = new Date();
    const hour = dateTime.getHours()
    const minute = dateTime.getMinutes();
    const second = dateTime.getSeconds();
    elHours.textContent = hour.toString().padStart(2, "0");
    elMinutes.textContent = minute.toString().padStart(2, "0");
    elSeconds.textContent = second.toString().padStart(2, "0");
}
setInterval(tick, 1000);