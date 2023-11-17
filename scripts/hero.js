let heroBg = document.getElementById("heroBg");
let circleBg = document.getElementById("circleCliper");
let heroSec = document.getElementById("heroSec");
let herotimeline; // declare timeline variable

// Function to set circle position
function setCirclePosition() {
  const element = circleBg;
  if (element) {
    return new Promise((resolve) => {
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

var cir_duration = 0.007;

if (isMobile()) {
  cir_duration = 0.004;
}

// Function to set timeline
function setTimeline(location) {
  var timeline = gsap.timeline();
  if (location) {
    timeline
      .fromTo(
        heroBg,
        {
          clipPath: `circle(0% at ${location.left}px ${location.top}px)`,
        },
        {
          clipPath: `circle(180% at ${location.left}px ${location.top}px)`,
          // clipPath: `circle(70% at ${location.left}px ${location.top}px)`,
        },
        "a"
      )
      .to(
        circleBg,
        {
          backgroundColor: "#FF2626",
          duration: cir_duration,
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
  if (herotimeline) {
    herotimeline.kill();
  }

  herotimeline = timeline;

  // Create ScrollTrigger
  if(!isMobile()){
    ScrollTrigger.create({
      trigger: heroSec,
      start: "top top",
      end: "+=2000",
      // end: "+=500",
      // pin:true,
      scrub: true,
      animation: herotimeline,
    });
  }
  else{
    ScrollTrigger.create({
      trigger: heroSec,
      start: "top top",
      end: "+=3000",
      // end: "+=500",
      // pin:true,
      scrub: true,
      animation: herotimeline,
    });
  }
}

runAnimation();
// setTimeout(() => {
//   // Initial run of the animation

//   // Set listener for window resize
//   window.addEventListener("resize", () => {
//     // Run animation on resize
//     runAnimation();
//   });
// }, 300);

// ----------------------------Toggle Menu

function toggleMenu() {
  const mobileNavBtnelement = document.getElementById("mobileNavBtn");
  const navigation_Sec = document.getElementById("navigationSec");
  var navAnimated_Icon = document.getElementById("navAnimatedIcon");
 
  if (navigation_Sec.classList.contains("initial")) {
    navigation_Sec.classList.remove("initial");
  }
  if (navigation_Sec.classList.contains("open")) {
    navigation_Sec.classList.add("close");
  } else {
    navigation_Sec.classList.remove("close");
  }
  navigation_Sec.classList.toggle("open");

  if (isMobile()) {
    if (mobileNavBtnelement.classList.contains("initial")) {
      mobileNavBtnelement.classList.remove("initial");
    }
    if (mobileNavBtnelement.classList.contains("open")) {
      mobileNavBtnelement.classList.add("close");
    } else if (!mobileNavBtnelement.classList.contains("open")) {
      mobileNavBtnelement.classList.remove("close");
    }
    mobileNavBtnelement.classList.toggle("open");
    document.getElementById("heroSec").classList.toggle("open");
  }


  if (isMobile()) {
    var wrapperM = document.getElementById("navAnimatedIcon");

    wrapperM.classList.toggle("open");

    if (wrapperM.classList.contains("open")) {
      navigation_Sec.style.height = "100vh";
      wrapperM.classList.remove("close");
      
    } else if (!wrapperM.classList.contains("open")) {
      wrapperM.classList.add("close");
      navigation_Sec.style.height ="0";
    }
  } else {
    // console.log(wrapper)
    navAnimated_Icon.classList.toggle("open");
    // let wrapIL = navAnimated_Icon.getBoundingClientRect().left;
    // let wrapIT = navAnimated_Icon.getBoundingClientRect().top;

    if (navAnimated_Icon.classList.contains("open")) {
      // navAnimated_Icon.style.left = wrapIL;
      // navAnimated_Icon.style.top = wrapIT;
      navigation_Sec.style.height = "100vh";
    } else if (!navAnimated_Icon.classList.contains("open")) {
      navigation_Sec.style.height ="0";
    }
  }
} //event lister end


// ------------------------scroller Animation
// GSAP Timeline
const scroller_Animation_timeline = gsap.timeline({ repeat: -1 });

// Add your animation to the timeline
scroller_Animation_timeline
  .to(".scrollerAnim-circle", {
    y: -34,
    duration: 1,
    ease: "ease",
  })
  .to(".scrollerAnim-circle", {
    y: 0,
    duration: 1,
    ease: "bounce.out",
  });

// Add a delay after each repetition
scroller_Animation_timeline.to({}, { delay: 2 });
