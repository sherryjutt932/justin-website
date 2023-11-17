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

// Loop through each image with the class "animimage"
gsap.utils.toArray('.animimage').forEach((image, index) => {
    // Set initial scale
    //gsap.set(image, { scale: 1 });
  
    // Add a scroll trigger to zoom in when entering the viewport
    // gsap.to(image, {
    //   scale: 1.5,
    //   scrollTrigger: {
    //     trigger: image,
    //     start: "top 80%", // Adjust the start point as needed
    //     end: "bottom 20%", // Adjust the end point as needed
    //     scrub: true,
    //   }
    // });
  
    
  });
  
