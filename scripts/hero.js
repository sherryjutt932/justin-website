let heroBg = document.getElementById('heroBg');
let circleBg = document.getElementById('circleCliper');
let heroSec = document.getElementById('heroSec');
let tl; // declare timeline variable

// Function to set circle position
function setCirclePosition() {
  const element = circleBg;
  if (element) {
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

// Function to set timeline
function setTimeline(location) {
  var timeline = gsap.timeline();
  if (location) {
    timeline.fromTo(
      heroBg,
      {
        clipPath: `circle(0% at ${location.left}px ${location.top}px)`,
      },
      {
        clipPath: `circle(200% at ${location.left}px ${location.top}px)`,
      },
      "a"
    ).to(
      circleBg,
      {
        backgroundColor: "#FF2626",
        duration: 0.009,
        ease: "steps(1)",
      },
      "a"
    );
  }
  return timeline;
}

// Function to run the animation
async function runAnimation() {
  // Get the initial circle position
  const initialCirclePosition = await setCirclePosition();

  // Create a new timeline
  const timeline = setTimeline(initialCirclePosition);

  // Destroy existing timeline if it exists
  if (tl) {
    tl.kill();
  }

  tl = timeline;

  // Create ScrollTrigger
  ScrollTrigger.create({
    trigger: heroSec,
    start: "top top",
    end: "bottom+=500",
    onEnter: () => {
      console.log("Animation started");
      // Additional actions when the animation starts
    },
    scrub: 1,
    animation: tl,
  });
}

setTimeout(() => {
    // Initial run of the animation
    runAnimation();
    
    // Set listener for window resize
    window.addEventListener("resize", () => {
      // Run animation on resize
      runAnimation();
    });
}, 300);





// ----------------------------Toggle Menu

function toggleMenu() {
  const element = document.getElementById("navigationSec");

  if (element) {
    const currentHeight = element.offsetHeight;
    const isFullHeight = currentHeight === window.innerHeight;

    // Toggle the height based on the current state
    element.style.height = isFullHeight ? '0' : '100vh';
  }
}