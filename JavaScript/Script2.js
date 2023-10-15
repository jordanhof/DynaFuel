
//Compte a rebour

const output = document.querySelector(".timer");
const targetDate = new Date("Nov 10, 2023 12:00:00").getTime();
const interval = setInterval(() => {
    const currentDate = new Date().getTime(); // Correction ici
    const distance = targetDate - currentDate;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60) / 1000));
    output.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(interval);
        output.innerHTML = "WELCOME!";
        output.style.textTransform = "uppercase";
    }
}, 1000);