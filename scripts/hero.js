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

var cir_duration = 0.009;

if(isMobile()){
  cir_duration = 0.004
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
  const mobileNavBtnelement = document.getElementById("mobileNavBtn");
  const element = document.getElementById("navigationSec");
  var btnNavs = document.getElementsByClassName("nav-icon1");
  Array.from(btnNavs).forEach(ele => {
    ele.classList.toggle('open');
  });

  
  if(!isMobile()){
    element.classList.toggle('open');
  }
  else{
    // let mobileNavBtnelementwidth = mobileNavBtnelement.offsetWidth;
    // let mobileNavBtn_FC = mobileNavBtnelement.querySelector("#mobileNavBtn-FC");
    if(mobileNavBtnelement.classList.contains("initial")){
      mobileNavBtnelement.classList.remove('initial');
    }
    if(mobileNavBtnelement.classList.contains("open")){
      mobileNavBtnelement.classList.add('close');
    }
    else{
      mobileNavBtnelement.classList.remove('close');
    }
    mobileNavBtnelement.classList.toggle('open');
    document.getElementById("heroSec").classList.toggle('open');
  }

  if (element  && !isMobile()) {
    const currentHeight = element.offsetHeight;
    const isFullHeight = currentHeight === window.innerHeight;

    // Toggle the height based on the current state
    element.style.height = isFullHeight ? '0' : '100vh';
    // element.style.position = isFullHeight ? '' : '';
  }



  // ------new

  var changesvgele = document.getElementById("changesvg");
  var navAnimatedIcon_pathlist = changesvgele.getElementsByClassName("changepath");
var wrapper = document.getElementById("navAnimatedIcon");


opend1 = "M-16,8 C-16,8 0,-8 0,-8 C0,-8 16,8 16,8";
opend2 = "M-1,0 C-1,0 1,0 1,0";
opend3 = "M-16,-9 C-16,-9 0,8 0,8 C0,8 16,-9 16,-9";

closedd1 = "M-16,0 C-16,0 0,0 0,0 C0,0 16,0 16,0";
closedd2 = "M-16,0 C-16,0 16,0 16,0";
closedd3 = "M-16,0 C-16,0 0,0 0,0 C0,0 16,0 16,0";

if(isMobile()){
  var changesvgeleM = document.getElementById("changesvgM");
  var navAnimatedIcon_pathlistM = changesvgeleM.getElementsByClassName("changepath");
  var wrapperM = document.getElementById("navAnimatedIconM");

  wrapperM.classList.toggle("open");

  if (wrapperM.classList.contains("open")) {
   wrapperM.classList.remove("close");
    setTimeout(() => {
      navAnimatedIcon_pathlistM[0].setAttribute("d", opend1);
      navAnimatedIcon_pathlistM[1].setAttribute("d", opend2);
      navAnimatedIcon_pathlistM[2].setAttribute("d", opend3);
    }, 200);
  } else {
      navAnimatedIcon_pathlistM[0].setAttribute("d", closedd1);
      navAnimatedIcon_pathlistM[1].setAttribute("d", closedd2);
      navAnimatedIcon_pathlistM[2].setAttribute("d", closedd3);
      wrapperM.classList.add("close");
  }
}
else{
  wrapper.classList.toggle("open");

  if (wrapper.classList.contains("open")) {
   wrapper.classList.remove("close");
    setTimeout(() => {
      navAnimatedIcon_pathlist[0].setAttribute("d", opend1);
      navAnimatedIcon_pathlist[1].setAttribute("d", opend2);
      navAnimatedIcon_pathlist[2].setAttribute("d", opend3);
    }, 200);
  } else {
      navAnimatedIcon_pathlist[0].setAttribute("d", closedd1);
      navAnimatedIcon_pathlist[1].setAttribute("d", closedd2);
      navAnimatedIcon_pathlist[2].setAttribute("d", closedd3);
      wrapper.classList.add("close");
  }
}

 
}//event lister end



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

// Convert HTMLCollection to an array for easier manipulation
var navigation_cards_Array = Array.from(navigation_cards_list);

// Add click event listener to each card
navigation_cards_Array.forEach(function(card) {
  card.addEventListener("click", function() {
    // Remove active class from all cards
    navigation_cards_Array.forEach(function(c) {
      c.classList.remove("active");
    });

    // Add active class to the clicked card
    card.classList.add("active");
  });
});
