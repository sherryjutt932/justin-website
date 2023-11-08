let heroBg = document.getElementById('heroBg');
let circleBg = document.getElementById('circleCliper');
let heroSec = document.getElementById('heroSec');
let herotimeline; // declare timeline variable

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
        clipPath: `circle(150% at ${location.left}px ${location.top}px)`,
        // clipPath: `circle(70% at ${location.left}px ${location.top}px)`,
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
  if (herotimeline) {
    herotimeline.kill();
  }

  herotimeline = timeline;

  // Create ScrollTrigger
  ScrollTrigger.create({
    trigger: heroSec,
    start: "top top",
    end: "+=2000",

    // end: "+=500",
    // pin:true,

    onEnter: () => {
      // Additional actions when the animation starts
    },
    scrub: true,
    animation: herotimeline,
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
  var btnNavs = document.getElementsByClassName("nav-icon1");
  Array.from(btnNavs).forEach(ele => {
    ele.classList.toggle('open');
  });

  element.classList.toggle('open');

  if (element) {
    const currentHeight = element.offsetHeight;
    const isFullHeight = currentHeight === window.innerHeight;

    // Toggle the height based on the current state
    element.style.height = isFullHeight ? '0' : '100vh';
    // element.style.position = isFullHeight ? '' : '';
  }



  // ------new
  wrapper.classList.toggle("open");

  if (wrapper.classList.contains("open")) {
    setTimeout(() => {
      navAnimatedIcon_pathlist[0].setAttribute("d", opend1);
      navAnimatedIcon_pathlist[1].setAttribute("d", opend2);
      navAnimatedIcon_pathlist[2].setAttribute("d", opend3);
    }, 200); // 200 milliseconds delay
  } else {
    setTimeout(() => {
      navAnimatedIcon_pathlist[0].setAttribute("d", closedd1);
      navAnimatedIcon_pathlist[1].setAttribute("d", closedd2);
      navAnimatedIcon_pathlist[2].setAttribute("d", closedd3);
    }, 200); // 200 milliseconds delay
  }
}



// ------------------------------------icon

const apath_Navbar_brand = "./assets/Animation/Perks you'll love more/Design board/DesignBoard.json";;
const apath_Navbar_uiux = './assets/Animation/get your designs_Rounded corners/Get your designs_rounded corner.json';
const apath_Navbar_development = "./assets/Animation/Our_Process/Development/Development_Black.json";


const aicon_Navbar_brand = "aicon-navbar-brand";
const aicon_Navbar_uiux = "aicon-navbar-uiux";
const aicon_Navbar_development = "aicon-navbar-development";

setupAnimation(aicon_Navbar_brand, apath_Navbar_brand);
setupAnimation(aicon_Navbar_uiux, apath_Navbar_uiux);
setupAnimation(aicon_Navbar_development, apath_Navbar_development);



// -----------nav icon animation
var navAnimatedIcon_pathlist = document.getElementsByClassName("changepath");
var ele = document.getElementById("changesvg");
var wrapper = document.getElementById("navAnimatedIcon");

opend1 = "M-16,8 C-16,8 0,-8 0,-8 C0,-8 16,8 16,8";
opend2 = "M-1,0 C-1,0 1,0 1,0";
opend3 = "M-16,-9 C-16,-9 0,8 0,8 C0,8 16,-9 16,-9";

closedd1 = "M-16,0 C-16,0 0,0 0,0 C0,0 16,0 16,0";
closedd2 = "M-16,0 C-16,0 16,0 16,0";
closedd3 = "M-16,0 C-16,0 0,0 0,0 C0,0 16,0 16,0";

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
