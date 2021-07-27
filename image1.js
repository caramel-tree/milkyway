var a = document.querySelector('.box1a');
var b = document.querySelector('.box1b');

a.addEventListener('click', function() {
  a.classList.add('fade-out');
  b.classList.add('fade-in-delay');
});

a.addEventListener('webkitTransitionEnd', function() {
  a.classList.add('hide');
});



var a2 = document.querySelector('.box2a');
var b2 = document.querySelector('.box2b');

a2.addEventListener('click', function() {
  a2.classList.add('fade-out');
  b2.classList.add('fade-in-delay');
});

a2.addEventListener('webkitTransitionEnd', function() {
  a2.classList.add('hide');
});




var a3 = document.querySelector('.box3a');
var b3 = document.querySelector('.box3b');

a3.addEventListener('click', function() {
  a3.classList.add('fade-out');
  b3.classList.add('fade-in-delay');
});

a3.addEventListener('webkitTransitionEnd', function() {
  a3.classList.add('hide');
});




var a4 = document.querySelector('.box4a');
var b4 = document.querySelector('.box4b');

a4.addEventListener('click', function() {
  a4.classList.add('fade-out');
  b4.classList.add('fade-in-delay');
});

a4.addEventListener('webkitTransitionEnd', function() {
  a4.classList.add('hide');
});
