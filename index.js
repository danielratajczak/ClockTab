GetClock = () => {
  let d = new Date();
  let month = (d.getMonth() + 1), date = d.getDate(), year = d.getFullYear();
  let hour = d.getHours(), min = d.getMinutes(), sec = d.getSeconds();

  if (month <= 9) month = "0" + month;
  if (date <= 9) date = "0" + date;
  if (hour <= 9) hour = "0" + hour;
  if (min <= 9) min = "0" + min;
  if (sec <= 9) sec = "0" + sec;

  console.log(hour);

  let clocktext = hour + ":" + min + ":" + sec + "";
  document.getElementById('clockbox').innerHTML = clocktext;
}



window.onload = () => {
  GetClock();
  setInterval(GetClock, 1000);
}