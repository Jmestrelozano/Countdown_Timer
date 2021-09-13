export const funcionalidadContador = (()=>{const timeCount = document.querySelector(".countdown-time");
const [...timeHorario] = timeCount.querySelectorAll(".time");
const [...boxDown] = timeCount.querySelectorAll(".box-down");
let end = new Date(`09/10/${new Date().getFullYear()} 08:31 pm`);
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function showRemaining() {
  let now = new Date();
  let distance = end - now;
  if (distance < 0) {
    //clearInterval(timer);

    //document.getElementById("countdown").innerHTML = "EXPIRED!";

    return (end = new Date(`12/31/${new Date().getFullYear()} 12:00 am`));
  }
  let days = Math.floor(distance / _day);
  let hours = Math.floor((distance % _day) / _hour);
  let minutes = Math.floor((distance % _hour) / _minute);
  let seconds = Math.floor((distance % _minute) / _second);

  timeHorario[0].innerHTML = days;
  timeHorario[1].innerHTML = hours;
  timeHorario[2].innerHTML = minutes;
  timeHorario[3].innerHTML = seconds;

  if (seconds) {
    boxDown[3].classList.add("flip-animate");
  }
  boxDown[3].classList.remove("flip-animate");
}

timer = setInterval(showRemaining, 1000);
})