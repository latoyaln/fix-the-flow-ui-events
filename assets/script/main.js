let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let frontend = document.querySelector('a:nth-of-type(1)');

frontend.addEventListener("click", function(){
  frontend.classList.toggle('onClick');
});

let design = document.querySelector('a:nth-of-type(2)');

design.addEventListener("dblclick", function(){
  design.classList.toggle('onDblClick');
});

let and = document.querySelector('a:nth-of-type(3)');

and.addEventListener("keydown", function(){
  and.classList.toggle('onKeydown');
});

let development = document.querySelector('a:nth-of-type(4)');

development.addEventListener("keyup", function(){
  development.classList.toggle('onKeyup');
});

let longPressEvent = document.querySelector('a:nth-of-type(5)');

let longPressTimer;

longPressEvent.addEventListener("mousedown", function () {
  longPressTimer = setTimeout(function () {
    longPressEvent.classList.toggle('onLongPress');
  }, 4000); 
});

let fix = document.querySelector('a:nth-of-type(6)');

fix.addEventListener("mouseover", function(){
  fix.classList.toggle('onMouseOver');
});

let scale = 1;
let the = document.querySelector("a:nth-of-type(7)");

the.addEventListener("wheel", zoom, {
  passive: false
});

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  scale = Math.min(Math.max(0.125, scale), 4);

  the.style.transform = `scale(${scale})`;
}

let deviceMotionEvent = document.querySelector('a:nth-of-type(8)');

window.addEventListener("devicemotion", handleDeviceMotion);

function handleDeviceMotion(event) {
  let acceleration = event.accelerationIncludingGravity;
  deviceMotionEvent.classList.toggle('onDeviceMotion');
}

let user = document.querySelector('a:nth-of-type(9)');

user.addEventListener("mouseleave", function () {
  user.classList.toggle('onMouseLeave');
});

