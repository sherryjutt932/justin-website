// ----------------steric anim
gsap.to("#rotateSteric", {
    rotation: 720,
    ease: "linear",
    scrollTrigger: {
      trigger: "#aboutUsHeader",
      start: "top 1%",
      end: "+=2000",
      scrub:true
    }
});

