let banner_pic = document.querySelector('.main_pic');
window.addEventListener('resize', function (e) {
  if (this.window.innerWidth >= 1200) {
    banner_pic.style.width = 720 + 'px';
  } else if (this.window.innerWidth >= 1000) {
    banner_pic.style.width = 600 + 'px';
  } else if (this.window.innerWidth >= 8000) {
    banner_pic.style.width = 480 + 'px';
  } else {
    banner_pic.style.width = 360 + 'px';
  }
});

let timer = document.querySelector('.suggestion .today_suggestion .timer');
let time = timer.querySelectorAll('li');

let endTime = +new Date('2022-2-10 23:59:59'); // in millisecond
let timerCount = window.setInterval(function () {
  let nowTime = +new Date(); // in millisecond
  let diffTime = (endTime - nowTime) / 1000; // in seconds
  if (diffTime < 0) {
    clearInterval(timerCount);
  }
  let h = parseInt(diffTime / 60 / 60);
  let m = parseInt(diffTime / 60 % 60);
  let s = parseInt(diffTime % 60);
  time[0].innerHTML = h < 10 ? '0' + h : h;
  time[1].innerHTML = m < 10 ? '0' + m : m;
  time[2].innerHTML = s < 10 ? '0' + s : s;
}, 1000);

