const secondHand = document.querySelector(".hand-second");
const minuteHand = document.querySelector(".hand-minute");
const hourHand = document.querySelector(".hand-hour");

function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const secondDegree = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const minute = now.getMinutes();
  const minuteDegree = (minute / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  const Hour = now.getHours();
  const hourDegree = (Hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  console.log("minute", minute);
  console.log("second", second);
  console.log("Hour", Hour);
}

setInterval(setDate, 1000);
