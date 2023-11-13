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

// ------------------------------------icon

const apath_Navbar_brand =
  "./assets/Animation/Perks you'll love more/Design board/DesignBoard.json";
const apath_Navbar_uiux =
  "./assets/Animation/get your designs_Rounded corners/Get your designs_rounded corner.json";
const apath_Navbar_development =
  "./assets/Animation/Our_Process/Development/Development_Black.json";

const aicon_Navbar_brand = "aicon-navbar-brand";
const aicon_Navbar_uiux = "aicon-navbar-uiux";
const aicon_Navbar_development = "aicon-navbar-development";

setupAnimation(aicon_Navbar_brand, apath_Navbar_brand);
setupAnimation(aicon_Navbar_uiux, apath_Navbar_uiux);
setupAnimation(aicon_Navbar_development, apath_Navbar_development);

// -----------nav icon animation

// wrapper.addEventListener("click", () => {
//   wrapper.classList.toggle("open");

//   if (wrapper.classList.contains("open")) {
//     setTimeout(() => {
//       navAnimatedIcon_pathlist[0].setAttribute("d", opend1);
//       navAnimatedIcon_pathlist[1].setAttribute("d", opend2);
//       navAnimatedIcon_pathlist[2].setAttribute("d", opend3);
//     }, 200); // 200 milliseconds delay
//   } else {
//     setTimeout(() => {
//       navAnimatedIcon_pathlist[0].setAttribute("d", closedd1);
//       navAnimatedIcon_pathlist[1].setAttribute("d", closedd2);
//       navAnimatedIcon_pathlist[2].setAttribute("d", closedd3);
//     }, 200); // 200 milliseconds delay
//   }
// });

// ---------------navigation-cards

var navigation_cards = document.getElementById("navigation-cards");
var navigation_cards_list = navigation_cards.getElementsByClassName("card");

const navDot = document.getElementById("navdot");

// function handleNavDot(e) {
//   // Update the position of nav_dot based on the mouse position
//   const mouseX = e.clientX - (navDot.offsetWidth/2);
//   const mouseY = e.clientY - (navDot.offsetHeight/2);

//   gsap.to(navDot, {
//     left: `${mouseX}px`,
//     top: `${mouseY}px`,
//   });
// }

// Convert HTMLCollection to an array for easier manipulation
var navigation_cards_Array = Array.from(navigation_cards_list);

// Add click event listener to each card
navigation_cards_Array.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    // Remove active class from all cards
    navigation_cards_Array.forEach(function (c) {
      c.classList.remove("active");
    });

    // Add active class to the clicked card
    card.classList.add("active");

    gsap.to(mousefollower,0.2, {
      width: 40,
    });

    let mousefollower_rightarrow = mousefollower.querySelector(
      "#mousefollower-rightarrow"
    );
    if (mousefollower_rightarrow) {
      mousefollower_rightarrow.style.display = "block";
      gsap.to(mousefollower_rightarrow,0.2, {
        scale: 1,
      });
    }
  });
  card.addEventListener("mouseleave", function () {
    gsap.to(mousefollower, 0.2,{
      width: 16,
    });

    let mousefollower_rightarrow = mousefollower.querySelector(
      "#mousefollower-rightarrow"
    );
    if (mousefollower_rightarrow) {
      gsap.to(mousefollower_rightarrow, 0.2,{
        scale: 0,
        onComplete: () => {
          mousefollower_rightarrow.style.display = "block";
        },
      });
    }
  });
});

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
