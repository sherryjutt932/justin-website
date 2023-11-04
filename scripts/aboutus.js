const aboutRef = document.getElementById("aboutRef");
const aboutSec = document.getElementById("aboutSec");
const stericRef = document.getElementById("stericRef");

//GSAP animation for the horizontal scrolling
var aboutusTl = gsap.timeline();

if (!isMobile()) {
  aboutusTl.to(
      aboutRef,
      {
        xPercent: -70,
        ease: "none",
      },
      "a"
    )
    .to(
      stericRef,
      {
        rotation: 720,
        ease: "linear",
      },
      "a"
    );
    
    ScrollTrigger.create({
      trigger: aboutSec,
      start: "top top",
      end: () => "+=" + aboutSec.offsetWidth * 1.5,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      animation: aboutusTl,
      // pin:true,
    });
}
else{
  aboutusTl.to(
      stericRef,
      {
        rotation: 1080,
        ease: "linear",
      },
      "a"
    );
    
    ScrollTrigger.create({
      trigger: aboutSec,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      animation: aboutusTl,
    });
}
