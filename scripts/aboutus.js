const aboutRef = document.getElementById("aboutRef");
const aboutSec = document.getElementById("aboutSec");
const stericRef = document.getElementById("stericRef");

//GSAP animation for the horizontal scrolling
var aboutusTl = gsap.timeline();

if (!isMobile()) {
 let xposition =  aboutRef.offsetWidth - (window.innerWidth * 0.8);
  aboutusTl.to(
      aboutRef,
      {
        x: -xposition + "px",
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
        rotation: 500,
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



// ------------------mobile floating

const about_icon_float = document.getElementsByClassName("about-icon-float");

const animateabouticonlist = () => {
  if(about_icon_float[0]){
    gsap.timeline().to(
      [about_icon_float[0],about_icon_float[2]],3,
      //
      {
        y:process_scrollDir === "down" ? 10 : -10,
      }
      ,"a"
    )
    .to(
      [about_icon_float[1],about_icon_float[3]],3,
      //
      {
        y:process_scrollDir === "down" ? -0 : 40,
      }
      ,"a"
    )
  }
  
  requestAnimationFrame(animateabouticonlist);
};

animateabouticonlist();