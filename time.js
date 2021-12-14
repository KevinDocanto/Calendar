const date = new Date();
const text = document.getElementById("time");

// Highlights today's day to lightgray.
function getDay() {
  console.log(date.getDate());
  return (day[date.getDate() - 1].style.backgroundColor = "lightgray");
}

function currentTime() {
  const time = new Date();
  const getTime = time.toLocaleTimeString();

  text.textContent = getTime;
}

getDay();
setInterval(currentTime, 1000);
