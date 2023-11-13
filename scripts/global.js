const mousefollower = document.getElementById("mousefollower");

function isMobile() {
    return window.innerWidth < 750;
  }
  

if(!isMobile()){
  
  function handlemousefollower(e) {
    // Update the position of nav_dot based on the mouse position
    let mouseX = e.clientX - (mousefollower.offsetWidth/2);
    let mouseY = e.clientY - (mousefollower.offsetHeight/2);
  
    gsap.to(mousefollower,.3, {
      left: `${mouseX}px`,
      top: `${mouseY}px`,
    });
  }
  
  document.addEventListener("mousemove", handlemousefollower);
}

function disableMouseTracker() {
  gsap.to(mousefollower,.2, {
    scale:.5,
    opacity:0
  });
}

function enableMouseTracker() {
  gsap.to(mousefollower,.2, {
    scale:1,
    opacity:1
  });
}

 // handle mouse tracker
 var non_mousetracker = document.querySelectorAll('.non-mousetracker');

 // Add event listeners for mouse enter and leave
 non_mousetracker.forEach(function(element) {
   element.addEventListener('mouseenter', disableMouseTracker);
   element.addEventListener('mouseleave', enableMouseTracker);
 });






//  -------------------------loading
const calculatedXValue = window.innerWidth + 300;
gsap.timeline().to(
  ".loading-footer",
  1,
  {
    opacity:1,
  },
  "b"
).to(
  "#loadingsteric",
  4,
  {
    x:calculatedXValue+"px",
    rotate:600,
    ease: "power2.out",
  },
  "a"
).to(
  "#loading-percent",
  4,
  {
    textContent: "100",
    roundProps: "textContent",
  },
  "a"
).to(
  "#loadingSec",
  1,
  {
    yPercent: -105,
    borderRadius:"30px",
    ease: "power2.out",
  }
)