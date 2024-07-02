const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline();
var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");
var tk = gsap.timeline({paused:true});
var cross = document.querySelector("#full i");
var menu = document.querySelector("#logo i");
var menu = document.querySelector("#logo i");


tk.to("#full", {
    right: "0",
    duration: 0.6
});

tk.from("#full h4", {
    x: 150,
    duration: 0.3,
    stagger: 0.49,
    opacity: 0,
    position:"absolute"
});

tk.from("#full i", {
    opacity: 0
});

tk.pause();

menu.addEventListener("click", function(){
    tk.play();
});

cross.addEventListener("click", function(){
    tk.reverse();
});

var page = document.querySelector(".page33");
var playbtn = document.querySelector(".circle");

page.addEventListener("mouseenter", function () {
  gsap.to(playbtn, {
    scale: 1,
    opacity: 1,
  });
});

page.addEventListener("mouseleave", function () {
  gsap.to(playbtn, {
    scale: 0,
    opacity: 0,
  });
});

page.addEventListener("mousemove", function (dets) {
  gsap.to(playbtn, {
    left: dets.x - 70,
    top: dets.y - 80,
   
  });
});




 // load animation

 gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.23
 })
 
