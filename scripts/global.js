function isMobile() {
    return window.innerWidth < 750;
  }
  

if(!isMobile()){
  const mousefollower = document.getElementById("mousefollower");
  
  function handlemousefollower(e) {
    // Update the position of nav_dot based on the mouse position
    const mouseX = e.clientX - (mousefollower.offsetWidth/2);
    const mouseY = e.clientY - (mousefollower.offsetHeight/2);
  
    gsap.to(mousefollower,.3, {
      left: `${mouseX}px`,
      top: `${mouseY}px`,
    });
  }
  
  document.addEventListener("mousemove", handlemousefollower);
}