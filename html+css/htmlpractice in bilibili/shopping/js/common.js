let mouseImg = document.querySelector('.mouse');
document.addEventListener('mousemove', function (e) {
  mouseImg.style.top = e.pageY + 3 + 'px';
  mouseImg.style.left = e.pageX + 3 + 'px';
})