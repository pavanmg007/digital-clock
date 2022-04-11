let btn = document.querySelector(".btn");
btn.addEventListener("mouseover", function () {
  this.innerHTML = "Party Time";
});
btn.addEventListener("mouseout", function () {
  this.innerHTML = "Set Alarm";
});
// playing with date and time
const date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let ampm = document.getElementById("ampm");

function displayTime() {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let ampm = document.getElementById("ampm");
  // set AM & PM
  let newHour = hour;
  if (newHour >= 12) {
    ampm.innerHTML = "PM";
  } else {
    ampm.innerHTML = "AM";
  }
  // 12 hour format
  if (newHour > 12) {
    newHour -= 12;
  }
  // adding time to html
  document.getElementById("hour").innerHTML = newHour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
}
displayTime();
setInterval(displayTime, 100);

let wakeUp = document.getElementById("wakeUp");
let lunch = document.getElementById("lunch");
let nap = document.getElementById("nap");
let night = document.getElementById("night");
function setTime() {
  if (parseInt(wakeUp.value) === hour) {
    document.getElementById("timeMessage").innerHTML = "grab some healthy breakfast!!";
    document.getElementById("clock-image").src = "./images/morning.svg";
  }
  if (parseInt(lunch.value) === hour) {
    document.getElementById("timeMessage").innerHTML = "it's time to have some lunch!!";
    document.getElementById("clock-image").src = "./images/lunch.svg";
  }
  if (parseInt(nap.value) === hour) {
    document.getElementById("timeMessage").innerHTML = "it's nap time!! 😴😴😴😴😴";
    document.getElementById("clock-image").src = "./images/nap.svg";
  }
  if (parseInt(night.value) === hour) {
    document.getElementById("timeMessage").innerHTML = "Good night! Have a nice sleep 😴";
    document.getElementById("clock-image").src = "./images/night-sleep.svg";
  }
}
function setMessage() {
  if (hour <= 12) {
    document.getElementById("form-message").innerHTML = "Good Morning!";
  }
  if (hour >= 12 && hour < 16) {
    document.getElementById("form-message").innerHTML = "Good Afternoon!";
  }
  if (hour >= 16 && hour < 19) {
    document.getElementById("form-message").innerHTML = "Good Evening!";
  }
  if (hour >= 19 && hour < 23) {
    document.getElementById("form-message").innerHTML = "Good Night!";
  }
}
document.getElementById("submit").addEventListener("click", setTime, false);
window.addEventListener("load", setMessage, false);
