// ----------------steric anim
gsap.to("#rotateSteric", {
    rotation: 720,
    ease: "linear",
    scrollTrigger: {
      trigger: "#contactUSForm",
      start: "top bottom",
      end: "+=2500",
      scrub:true
    }
});

