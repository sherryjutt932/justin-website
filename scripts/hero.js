// State variables
let heroBg = document.getElementById('heroBg'); // replace 'heroBg' with the actual ID of your hero background element
let circleBg = document.getElementById('circleCliper'); // replace 'circleBg' with the actual ID of your circle background element
let heroSec = document.getElementById('heroSec'); // replace 'heroSec' with the actual ID of your hero section element
let tl; // declare timeline variable

// Function to set circle position
function setCirclePosition() {
  const element = circleBg;
  if (element) {
    // Use requestAnimationFrame to ensure that the DOM has been updated
    return new Promise(resolve => {
      requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        resolve({
          left: rect.left + rect.width / 2,
          top: rect.top + window.scrollY + rect.height / 2,
        });
      });
    });
  }
}

// Function to run the animation
async function runAnimation() {
  // Destroy existing timeline if it exists
  if (tl) {
    tl.kill();
  }

  // Get the initial circle position
  const initialCirclePosition = await setCirclePosition();

  console.log(initialCirclePosition)

  // Create a new timeline
  tl = gsap.timeline();
  tl.fromTo(
    heroBg,
    {
      clipPath: `circle(0% at ${initialCirclePosition.left}px ${initialCirclePosition.top}px)`,
    },
    {
      clipPath: `circle(200% at ${initialCirclePosition.left}px ${initialCirclePosition.top}px)`,
    },"a"
  ).to(
    circleBg,
    {
      backgroundColor:"#FF2626",
      duration:0.0101,
      ease:"steps(1)"
    },"a"
  );

  ScrollTrigger.create({
    trigger: heroSec,
    start: "top top",
    end: "bottom 60%",
    scrub: 1,
    animation: tl,  
  });
}

// Initial run of the animation
runAnimation();

setTimeout(() => {
    runAnimation();
  }, 100);


// Set listener for window resize
window.addEventListener("resize", () => {
  // Run animation on resize
  runAnimation();
});
