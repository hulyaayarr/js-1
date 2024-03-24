let user_name = document.querySelector("#myName");
let dateTime = document.querySelector("#myClock");

user_name.innerHTML = prompt("Adınız Nedir?");
var daysOfWeek = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

showTime = () => {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  ordinalDateWithDayOfWeek = daysOfWeek[currentDate.getDay()];
  dateTime.innerHTML =
    hours + " : " + minutes + " : " + seconds + " " + ordinalDateWithDayOfWeek;
  setInterval(showTime, 1000);
};
document.addEventListener("DOMContentLoaded", showTime);
