var today = new Date()
var curHr = today.getHours()
if (curHr >= 0 && curHr < 6) {
  document.getElementById("salute").innerHTML = "What are you doing here? Go to sleep, sweetie...";
} else if (curHr >= 6 && curHr < 12) {
  document.getElementById("salute").innerHTML = "Good Morning!";
} else if (curHr >= 12 && curHr < 17) {
  document.getElementById("salute").innerHTML = "Good Afternoon!";
} else {
  document.getElementById("salute").innerHTML = "Good Evening!";
}