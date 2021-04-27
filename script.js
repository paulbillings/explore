let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".smoke3", 3, { y: -800 })
  .to(".smoke", 3, { y: -600 }, "-=3")
  .to(".starship", 3, { y: -300 }, "-=3")
  .fromTo(".bg1", { y: -100 }, { y: 0, duration: 3 }, "-=3")
  .to(".content", 3, { top: "0%" }, "-=3")
  .fromTo(".content-images", { opacity: 0.5 }, { opacity: 1, duration: 2 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "200%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
