
if(!isMobile() ){
  // -----------------about us
var aboutUs_AboutUs = document.querySelector("#aboutUsAboutUs").querySelectorAll(".animimage");

gsap.to( aboutUs_AboutUs[0], {
  yPercent:-10,
  scrollTrigger: {
    trigger:  aboutUs_AboutUs[0],
    start: "top 70%",
    end: "bottom top",
    scrub:true
  }
})
gsap.to( aboutUs_AboutUs[1], {
  yPercent:25,
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
  yPercent:-10,
  scrollTrigger: {
    trigger:  aboutUs_Founders[0],
    start: "top 70%",
    end: "bottom top",
    scrub:true
  }
})
gsap.to( aboutUs_Founders[1], {
  yPercent:15,
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


 //pos sticky
 var aboutUsDiscoverMore = document.querySelector(".aboutUsDiscoverMorePage .discoverMoreWrapper");

if (isMobile()) {
  aboutUsDiscoverMore.style.top = `-${aboutUsDiscoverMore.offsetHeight - (window.innerHeight/2)}px`;
}

