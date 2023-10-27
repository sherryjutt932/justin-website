// State variables
let heroBg = document.getElementById('heroBg'); // replace 'heroBg' with the actual ID of your hero background element
let circleBg = document.getElementById('circleCliper'); // replace 'circleBg' with the actual ID of your circle background element
let heroSec = document.getElementById('heroSec'); // replace 'heroSec' with the actual ID of your hero section element
let tl; // declare timeline variable

// Function to set circle position
function setCirclePosition() {
  const element = circleBg;
  if (element) {
    const rect = element.getBoundingClientRect();
    return {
      left: rect.left + rect.width / 2,
      top: rect.top + window.scrollY + rect.height / 2,
    };
  }
}

// Function to run the animation
function runAnimation() {
  // Destroy existing timeline if it exists
  if (tl) {
    tl.kill();
  }

  // Create a new timeline
  tl = gsap.timeline();
  tl.fromTo(
    heroBg,
    {
      clipPath: `circle(0% at ${setCirclePosition().left}px ${setCirclePosition().top}px)`,
    },
    {
      clipPath: `circle(200% at ${setCirclePosition().left}px ${setCirclePosition().top}px)`,
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
    invalidateOnRefresh: true
  });
}

// Initial run of the animation
runAnimation();
 setTimeout(() => {
      runAnimation();
 }, 10);
 setTimeout(() => {
      runAnimation();
 }, 15);
 setTimeout(() => {
      runAnimation();
 }, 20);

// Set listener for window resize
window.addEventListener("resize", () => {
  // Run animation on resize
  runAnimation();
});
