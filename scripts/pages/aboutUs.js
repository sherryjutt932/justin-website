// ----------------steric anim
gsap.to("#rotateSteric", {
    rotation: 720,
    ease: "linear",
    scrollTrigger: {
      trigger: "#aboutUsHeader",
      start: "top 1%",
      end: "bottom top",
      scrub:true
    }
});


if(!isMobile()){
  // -----------------about us
var aboutUs_AboutUs = document.querySelector("#aboutUsAboutUs").querySelectorAll(".animimage");

gsap.to( aboutUs_AboutUs[0], {
  y:-100,
  scrollTrigger: {
    trigger:  aboutUs_AboutUs[0],
    start: "top 70%",
    end: "bottom top",
    scrub:true
  }
})
gsap.to( aboutUs_AboutUs[1], {
  y:250,
  scrollTrigger: {
    trigger:  aboutUs_AboutUs[1],
    start: "top 70%",
    end: "bottom top",
    scrub:true
  }
});


// -----------------about us
var aboutUs_Founders = document.querySelector("#aboutUsFounders").querySelectorAll(".imagecard");

gsap.to( aboutUs_Founders[0], {
  y:-100,
  scrollTrigger: {
    trigger:  aboutUs_Founders[0],
    start: "top 70%",
    end: "bottom top",
    scrub:true
  }
})
gsap.to( aboutUs_Founders[1], {
  y:150,
  scrollTrigger: {
    trigger:  aboutUs_Founders[1],
    start: "top 70%",
    end: "bottom top",
    scrub:true
  }
});
}

// -------------------------animationas
// discoverMore-discovery
