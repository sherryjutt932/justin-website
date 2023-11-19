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
