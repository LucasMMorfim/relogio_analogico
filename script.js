const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function getTime() {
  const time = new Date();

  const getHourRot = (360 / 12) * time.getHours();
  const getMinRot = (360 / 60) * time.getMinutes();
  const getSecRot = (360 / 60) * time.getSeconds();

  hour.style.transform = `rotate(${getHourRot}deg)`;
  min.style.transform = `rotate(${getMinRot}deg)`;
  sec.style.transform = `rotate(${getSecRot}deg)`;
}

setInterval(() => {
  getTime();
}, 1000);

getTime();

// Mudar tema

const button = document.querySelector('#btn');
const body = document.querySelector('body');
const clock = document.querySelector('.clock');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const num3 = document.querySelector('.num3');
const num4 = document.querySelector('.num4');
const num5 = document.querySelector('.num5');
const num6 = document.querySelector('.num6');
const num7 = document.querySelector('.num7');
const num8 = document.querySelector('.num8');
const num9 = document.querySelector('.num9');
const num10 = document.querySelector('.num10');
const num11 = document.querySelector('.num11');
const num12 = document.querySelector('.num12');
const hours = document.querySelector('.hour');
const minutes = document.querySelector('.min');


button.onclick = function() {
  this.classList.toggle('active')
  body.classList.toggle('active')
  clock.classList.toggle('active')
  num1.classList.toggle('active')
  num2.classList.toggle('active')
  num3.classList.toggle('active')
  num4.classList.toggle('active')
  num5.classList.toggle('active')
  num6.classList.toggle('active')
  num7.classList.toggle('active')
  num8.classList.toggle('active')
  num9.classList.toggle('active')
  num10.classList.toggle('active')
  num11.classList.toggle('active')
  num12.classList.toggle('active')
  hours.classList.toggle('active')
  minutes.classList.toggle('active')
}