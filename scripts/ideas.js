
const ideasSec = document.getElementById("ideasSec");

var ideasanim = gsap.timeline();
ideasanim.fromTo(
    ideasSec,
    {scaleX:1
    },
    {
        scaleX:0.95
    },
    "a"
  );

ScrollTrigger.create({
    trigger: ideasSec,
    start: "bottom 70%",
    end: "bottom top",
    scrub: 1,
    animation:ideasanim,
  });


  const ideasMarquee = document.getElementById("idea-marquee");
const ideasFirst = document.getElementById("idea-marquee-first");
const ideasSecond = document.getElementById("idea-marquee-second");
const ideasThird = document.getElementById("idea-marquee-third");

var ideas_xPercent = 0;
var ideas_scrollDir = "up";
var ideasSpeed = 12;

const animateideasMarquee = () => {
  ideas_xPercent =
  ideas_scrollDir === "down"
      ? ideas_xPercent - ideasSpeed / 5
      : ideas_xPercent + ideasSpeed / 5;
  ideas_xPercent =
    ideas_xPercent <= -ideasFirst.offsetWidth
      ? 0
      : ideas_xPercent >= 0
      ? -ideasFirst.offsetWidth
      : ideas_xPercent;

  gsap.to([ideasFirst, ideasSecond, ideasThird], {
    x: ideas_xPercent + "px",
    duration: 0,
    ease: "none",
  });
  requestAnimationFrame(animateideasMarquee);
};

animateideasMarquee();

const setSecondideasPosition = () => {
  gsap.set(ideasSecond, { left: ideasFirst.offsetWidth + "px" });
  gsap.set(ideasThird, { left: ideasFirst.offsetWidth * 2 + "px" });
};
setSecondideasPosition();

const handleideasResize = () => {
  setSecondideasPosition();
};
window.addEventListener("resize", handleideasResize);
