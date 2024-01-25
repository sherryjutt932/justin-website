

// ---------------------mousefollower

const mousefollower = document.getElementById("mousefollower");

function isMobile() {
  return window.innerWidth < 430;
}

if (!isMobile()) {
  function handlemousefollower(e) {
    // Update the position of nav_dot based on the mouse position
    let mouseX = e.clientX - mousefollower.offsetWidth / 2;
    let mouseY = e.clientY - mousefollower.offsetHeight / 2;

    gsap.to(mousefollower, 0.3, {
      left: `${mouseX}px`,
      top: `${mouseY}px`,
    });
  }

  document.addEventListener("mousemove", handlemousefollower);
}

function disableMouseTracker() {
  gsap.to(mousefollower, 0.2, {
    scale: 0.5,
    opacity: 0,
  });
}

function enableMouseTracker() {
  gsap.to(mousefollower, 0.2, {
    scale: 1,
    opacity: 1,
  });
}

// handle mouse tracker
var non_mousetracker = document.querySelectorAll(".non-mousetracker");

// Add event listeners for mouse enter and leave
non_mousetracker.forEach(function (element) {
  element.addEventListener("mouseenter", disableMouseTracker);
  element.addEventListener("mouseleave", enableMouseTracker);
});


// ---------------------lottie animation
function setupAnimation(containerId, animationPath) {
  const container = document.getElementById(containerId);

  return lottie.loadAnimation({
    container: container,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: animationPath,
  });
}


// ----------------------toggle Nav
function toggleNav() {
  var mobileNavBtnelement = document.getElementById("mobileNavBtn");
  var navigation_Sec = document.getElementById("navigationSec");
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
    document.getElementsByClassName("herosection")[0].classList.toggle("open");
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
    console.log(navAnimated_Icon)
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


// ------------------------------------nav icon animation
if(!isMobile()){
  var apath_Navbar_brand =
  "../assets/Animation/Perks you'll love more/Design board/DesignBoard.json";
var apath_Navbar_uiux =
  "../assets/Animation/get your designs_Rounded corners/Get your designs_rounded corner.json";
var apath_Navbar_development =
  "../assets/Animation/Our_Process/Development/Development_Black.json";

var aicon_Navbar_brand = "aicon-navbar-brand";
var aicon_Navbar_uiux = "aicon-navbar-uiux";
var aicon_Navbar_development = "aicon-navbar-development";

setupAnimation(aicon_Navbar_brand, apath_Navbar_brand);
setupAnimation(aicon_Navbar_uiux, apath_Navbar_uiux);
setupAnimation(aicon_Navbar_development, apath_Navbar_development);

// ---------------navigation-cards mouse follower

var navigation_cards = document.getElementById("navigation-cards");
var navigation_cards_list = navigation_cards.getElementsByClassName("card");
var navDot = document.getElementById("navdot");

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
      height: 40,
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
      height: 16,
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
}

// -------------logo animation
const allLogoEle = document.getElementsByClassName('logoanim');

    Array.from(allLogoEle).forEach(logoele => {
      // Listen for mouseenter event (hover)
      logoele.addEventListener('mouseenter', () => {
        logoele.setDirection(1);
        logoele.play(); // Play the animation
      });

      logoele.addEventListener('mouseleave', () => {
        logoele.setDirection(-1); // Set animation direction to reverse
        logoele.play(); // Play the animation in reverse
      });
    });

// -----------------------page reload on resize
document.addEventListener("DOMContentLoaded", function () {
  // Code to run after the DOM is fully loaded

  // // Function to reload the page
  // function reloadPage() {
  //   location.reload();
  // }

  // // Store the initial window width
  // var initialWidth = window.innerWidth;

  // // Attach the reload function to the window's resize event
  // window.addEventListener("resize", function () {
  //   // Check if the width has changed
  //   if (window.innerWidth !== initialWidth) {
  //     // Debounce the reload to avoid excessive reloading
  //     clearTimeout(window.resizeTimer);
  //     window.resizeTimer = setTimeout(function () {
  //       reloadPage();
  //     }, 250);
  //   }
  // });
});

//---------------scroll dir
var ScrollDirection = "down";

const handleScrollDirection = () => {
  let scrollY = window.scrollY;
  ScrollDirection =
    scrollY > 0 && scrollY > window.lastScrollY ? "up" : "down";
  window.lastScrollY = scrollY > 0 ? scrollY : 0;
};

window.addEventListener("scroll", handleScrollDirection);

// -------------mount animation
const frombelowanim = document.getElementsByClassName("frombelowanim");

Array.from(frombelowanim).forEach(element => {
  gsap.from(element, {
    duration: 1, 
    yPercent: 10, 
    opacity: 0, 
    ease: "sine", 
    delay:0.3,
    delay: 0,
    scrollTrigger: {
      trigger: element,
      toggleActions: "restart none none reverse"
    }
  });
});

// -------------mount animation mobile
if(isMobile()){
const frombelowanimM = document.getElementsByClassName("frombelowanimM");

Array.from(frombelowanimM).forEach(element => {
  gsap.from(element, {
    duration: 1, 
    yPercent: 10, 
    opacity: 0, 
    ease: "sine", 
    delay: 0,
    scrollTrigger: {
      trigger: element,
      start:"top 70%",
      toggleActions: "restart none none reverse"
    }
  });
});
}

//  -------------------------loading
if((document.getElementById("loadingsteric"))){
  var calculatedXValue =
    window.innerWidth + document.getElementById("loadingsteric").offsetWidth + 40;
  
  gsap.set("#loadingSec", {
    background: "#FF2626",
    top:0,
  });
  
  gsap.timeline()
    .to(
      ".loading-footer",
      1,
      {
        opacity: 1,
      },
      "b"
    )
    .to(
      "#loadingsteric",
      2,
      {
        x: calculatedXValue + "px",
        rotate: 600,
        ease: "sine",
      },
      "a"
    )
    .to(
      "#loading-percent",
      1.6,
      {
        textContent: "100",
        roundProps: "textContent",
        ease:"steps(50)"
      },
      "a"
    )
    .to(
      "#loadingSec",
      0.9,
      {
        borderRadius: "60px",
        transform: () =>
          !isMobile()
            ? "scale3d(0.95,0.9,1) translateY(-130%)"
            : "scale3d(0.95,0.95,1) translateY(-130%)",
      },
      "a+=1.9"
    )
    .to("#loadingSec", 0.2, {
      zIndex: -300,
      display: "none",
      opacity: 0,
    });
}
