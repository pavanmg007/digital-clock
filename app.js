let btn = document.querySelector(".btn");
btn.addEventListener("mouseover", function () {
  this.innerHTML = "Party Time";
});
btn.addEventListener("mouseout", function () {
  this.innerHTML = "Set Alarm";
});
