// ----------------steric anim
gsap.to("#rotateSteric", {
    rotation: 720,
    ease: "linear",
    scrollTrigger: {
      trigger: ".rotateStericHead",
      start: "top 1%",
      end: "+=1000",
      scrub:true
    }
});

