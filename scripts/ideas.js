
const ideasSec = document.getElementById("ideasSec");

var ideasanim = gsap.timeline();
if(!isMobile()){
  ideasanim.fromTo(
    ideasSec,
    {
      transform: "scale3d(1,1,1)",
    },
    {
      transform: "scale3d(0.95,0.95,1)",
    },
    "a"
  );
}
else{
  ideasanim.fromTo(
    ideasSec,
    {
      transform: "scale3d(1,1,1)",
    },
    {
      transform: "scale3d(0.9,0.9,1)",
    },
    "a"
  );
}

ScrollTrigger.create({
    trigger: ideasSec,
    start: "bottom bottom",
    end: "+=400",
    scrub: 1,
    marker:true,
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
