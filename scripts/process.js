const processMarquee = document.getElementById("proc-marquee");
const processFirst = document.getElementById("proc-marquee-first");
const processSecond = document.getElementById("proc-marquee-second");
const processThird = document.getElementById("proc-marquee-third");

var process_xPercent = 0;
var process_scrollDir = "up";
var processSpeed = 12;

const handleProcessScroll = () => {
  let scrollY = window.scrollY;
  process_scrollDir =
    scrollY > 0 && scrollY > window.lastScrollY ? "up" : "down";
  window.lastScrollY = scrollY > 0 ? scrollY : 0;
};

window.addEventListener("scroll", handleProcessScroll);

const animateProcessMarquee = () => {
  process_xPercent =
  process_scrollDir === "down"
      ? process_xPercent - processSpeed / 5
      : process_xPercent + processSpeed / 5;
  process_xPercent =
    process_xPercent <= -processFirst.offsetWidth
      ? 0
      : process_xPercent >= 0
      ? -processFirst.offsetWidth
      : process_xPercent;

  gsap.to(".arrowRef", {
    rotate: process_scrollDir === "down" ? 180 : 0,
    duration: 0.7,
  });

  gsap.to([processFirst, processSecond, processThird], {
    x: process_xPercent + "px",
    duration: 0,
    ease: "none",
  });
  requestAnimationFrame(animateProcessMarquee);
};

animateProcessMarquee();

const setSecondProcessPosition = () => {
  gsap.set(processSecond, { left: processFirst.offsetWidth + "px" });
  gsap.set(processThird, { left: processFirst.offsetWidth * 2 + "px" });
};
setSecondProcessPosition();

const handleProcessResize = () => {
  setSecondProcessPosition();
};
window.addEventListener("resize", handleProcessResize);


function setisActive(ind) {

    let icon = document.getElementById("process-icon");
    let iconSources = [
        "./assets/icons/Process/discovery.svg",
        "./assets/icons/Process/strategy.svg",
        "./assets/icons/Process/design.svg",
        "./assets/icons/Process/development.svg",
      ];

      // Check if the index is within the valid range
  if (ind >0 && ind < iconSources.length+1) {
    icon.src = iconSources[ind-1];
  } 

   // Get all cards
   const cards = document.querySelectorAll('.process-card');

   cards.forEach(card => {
     card.classList.remove('active');
   });
   
   cards.forEach(card => {
    // Compare to the converted ind value
    if (parseInt(card.dataset.index) === ind) {
      card.classList.add('active');
    }
  });
   
}