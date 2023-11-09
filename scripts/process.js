const processMarquee = document.getElementById("proc-marquee");
const processFirst = document.getElementById("proc-marquee-first");
const processSecond = document.getElementById("proc-marquee-second");
const processThird = document.getElementById("proc-marquee-third");

var process_xPercent = 0;
var process_scrollDir = "down";
var processSpeed = 12;

const handleProcessScroll = () => {
  let scrollY = window.scrollY;
  process_scrollDir =
    scrollY > 0 && scrollY > window.lastScrollY ? "up" : "down";
  window.lastScrollY = scrollY > 0 ? scrollY : 0;
};

window.addEventListener("scroll", handleProcessScroll);

const animateProcessMarquee = () => {
  process_xPercent =
    process_scrollDir === "down"
      ? process_xPercent - processSpeed / 5
      : process_xPercent + processSpeed / 5;
  process_xPercent =
    process_xPercent <= -processFirst.offsetWidth
      ? 0
      : process_xPercent >= 0
      ? -processFirst.offsetWidth
      : process_xPercent;

  gsap.to(".arrowRef", {
    rotate: process_scrollDir === "down" ? 180 : 0,
    duration: 0.7,
  });

  gsap.to([processFirst, processSecond, processThird], {
    x: process_xPercent + "px",
    duration: 0,
    ease: "none",
  });
  requestAnimationFrame(animateProcessMarquee);
};

animateProcessMarquee();

const setSecondProcessPosition = () => {
  gsap.set(processSecond, { left: processFirst.offsetWidth + "px" });
  gsap.set(processThird, { left: processFirst.offsetWidth * 2 + "px" });
};
setSecondProcessPosition();

const handleProcessResize = () => {
  setSecondProcessPosition();
};
window.addEventListener("resize", handleProcessResize);

// function setisActive(ind) {

//     let icon = document.getElementById("process-icon");
//     let iconSources = [
//         "./assets/icons/Process/discovery.svg",
//         "./assets/icons/Process/strategy.svg",
//         "./assets/icons/Process/design.svg",
//         "./assets/icons/Process/development.svg",
//       ];

//       // Check if the index is within the valid range
//   if (ind >0 && ind < iconSources.length+1) {
//     icon.src = iconSources[ind-1];
//   }

//    // Get all cards
//    const cards = document.querySelectorAll('.process-card');

//    cards.forEach(card => {
//      card.classList.remove('active');
//    });

//    cards.forEach(card => {
//     // Compare to the converted ind value
//     if (parseInt(card.dataset.index) === ind) {
//       card.classList.add('active');
//     }
//   });

// }
//

function setisActive(ind) {
  let iconSources = [
    "aicon-process-discovery",
    "aicon-process-strategy",
    "aicon-process-design",
    "aicon-process-development",
  ];

  // Get the container element
  let container = document.getElementById("process-animated-icons");

  // Iterate through child elements
  for (let i = 0; i < container.children.length; i++) {
    let child = container.children[i];

    // Check if the child's id matches the target id
    if (child.id === iconSources[ind - 1]) {
      // Set display to unset for the matched child
      child.style.display = "unset";
    } else {
      // Set display to none for other children
      child.style.display = "none";
    }
  }

  // Get all cards
  const cards = document.querySelectorAll(".process-card");

  cards.forEach((card) => {
    card.classList.remove("active");
  });

  cards.forEach((card) => {
    // Compare to the converted ind value
    if (parseInt(card.dataset.index) === ind) {
      card.classList.add("active");
    }
  });
}

// ------------------------------------icon

const apath_Process_discovery =
  "./assets/Animation/Our_Process/discovery/discovery.json";
const apath_Process_strategy =
  "./assets/Animation/Our_Process/Strategy/Strategy.json";
const apath_Process_design =
  "./assets/Animation/Our_Process/Design/Design_Icon_White.json";
const apath_Process_development =
  "./assets/Animation/Our_Process/Development/Development.json";

 const apath_Process_discovery_black =
  "./assets/Animation/Our_Process/discovery/discovery_Black.json";
const apath_Process_strategy_black =
  "./assets/Animation/Our_Process/Strategy/Stratergy_Black.json";
const apath_Process_design_black =
  "./assets/Animation/Our_Process/Design/Design_Icon_Black.json";
const apath_Process_development_black =
  "./assets/Animation/Our_Process/Development/Development_Black.json";

const aicon_Process_discovery = "aicon-process-discovery";
const aicon_Process_strategy = "aicon-process-strategy";
const aicon_Process_design = "aicon-process-design";
const aicon_Process_development = "aicon-process-development";

setupAnimation(aicon_Process_discovery, apath_Process_discovery);
setupAnimation(aicon_Process_strategy, apath_Process_strategy);
setupAnimation(aicon_Process_design, apath_Process_design);
setupAnimation(aicon_Process_development, apath_Process_development);

const aicon_Process_mob_discovery = "aicon-process-mob-discovery";
const aicon_Process_mob_strategy = "aicon-process-mob-strategy";
const aicon_Process_mob_design = "aicon-process-mob-design";
const aicon_Process_mob_development = "aicon-process-mob-development";

setupAnimation(aicon_Process_mob_discovery, apath_Process_discovery_black);
setupAnimation(aicon_Process_mob_strategy, apath_Process_strategy_black);
setupAnimation(aicon_Process_mob_design, apath_Process_design_black);
setupAnimation(aicon_Process_mob_development, apath_Process_development_black);
