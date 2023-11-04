const aboutRef = document.getElementById("aboutRef");
const aboutSec = document.getElementById("aboutSec");
const stericRef = document.getElementById("stericRef");

//GSAP animation for the horizontal scrolling
gsap
  .timeline({
    scrollTrigger: {
      trigger: aboutSec,
      start: "top top",
      end: () => "+=" + aboutSec.offsetWidth * 1.5,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  })
  .to(
    aboutRef,
    {
      xPercent: -70,
      ease: "none",
    },
    "a"
  ).to(
    stericRef,
    {
        rotation: 720,
        ease: "linear",
    },
    "a"
  );
