var UIUXTimeline = gsap.timeline();
var animCircle = document.getElementById("animCircle");
var digitalDesign = document.getElementById("digitalDesign");
var animCircleWidth = animCircle.offsetWidth / 2;
var AnimDotWidth = document.getElementById("AnimDot1").offsetWidth / 2;
var uiuxConElement = document.getElementsByClassName("UIUXCon")[0];
var paddingBottom = parseInt(
  window.getComputedStyle(uiuxConElement).paddingBottom,
  10
);

var uls = Array.from(uiuxConElement.getElementsByTagName("li"));
var ulCTA = document.getElementById("ulCTA");
uls.push(ulCTA);

gsap.set(uls, {
  opacity: 0,
});

function calculateDistance() {
  var box1Bottom = animCircle.getBoundingClientRect().bottom;
  var box2Top = digitalDesign.getBoundingClientRect().top;
  var distance = box2Top - box1Bottom;
  return distance;
}

if (!isMobile() && !isTab()) {
  gsap.timeline().to("#animCircle", {
    rotate: 180,
    ease: "none",
    scrollTrigger: {
      trigger: "#unseenStories",
      start: `${window.innerWidth > 1536 ? "140px" : "110px"} top`,
      end: "+=500",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const direction = self.direction;

        if (direction === 1) {
          // Scrolling down
          if (progress < 1 / 3) {
            gsap.to(uls[0], {
              opacity: Math.round(progress * 3), // Map progress from 0 to 1/3
            });
          }
          if (progress >= 1 / 3 && progress < 2 / 3) {
            gsap.to(uls[1], {
              opacity: Math.round((progress - 1 / 3) * 3), // Map progress from 1/3 to 2/3
            });
          }
          if (progress >= 2 / 3) {
            gsap.to(uls[2], {
              opacity: Math.round((progress - 2 / 3) * 3), // Map progress from 2/3 to 1
            });
          }
        } else if (direction === -1) {
          if (progress < 1 / 3) {
            gsap.to(uls[0], {
              opacity: Math.round(progress * 3), // Map progress from 0 to 1/3
            });
          }
          if (progress >= 1 / 3 && progress < 2 / 3) {
            gsap.to(uls[1], {
              opacity: Math.round((progress - 1 / 3) * 3), // Map progress from 1/3 to 2/3
            });
          }
          if (progress >= 2 / 3) {
            gsap.to(uls[2], {
              opacity: Math.round((progress - 2 / 3) * 3), // Map progress from 2/3 to 1
            });
          }
        }
      },
    },
  });

  UIUXTimeline.to(
    "#AnimDot1",
    {
      y: -(paddingBottom + animCircleWidth + AnimDotWidth + 3),
      x: animCircleWidth - AnimDotWidth + 5,
      ease: "none",
    },
    "a"
  ).to(
    "#AnimDot2",
    {
      y: -(paddingBottom + animCircleWidth + AnimDotWidth + 3),
      x: -(animCircleWidth - AnimDotWidth + 5),
      ease: "none",
      onComplete: () => {
        digitalDesign.classList.add("activeBlack");
        document.getElementById("AnimDot1").style.opacity = 0;
        document.getElementById("AnimDot2").style.opacity = 0;
      },
    },
    "a"
  );

  ScrollTrigger.create({
    trigger: "#unseenStories",
    start: `${window.innerWidth > 1536 ? "145px" : "115px"} top`,
    end: "+=500",
    scrub: true,
    animation: UIUXTimeline,
    onEnterBack: () => {
      document.getElementById("AnimDot1").style.opacity = 1;
      document.getElementById("AnimDot2").style.opacity = 1;
      digitalDesign.classList.remove("activeBlack");
    },
  });

  var digitalDesignTimeline = gsap.timeline();
  var cardStack = document.getElementById("cardStack");

  for (let j = 0; j < cardStack.children.length; j++) {
    for (let i = 0; i < cardStack.children.length; i++) {
      const child = cardStack.children[i];

      if (i >= j) {
        digitalDesignTimeline.to(
          child,
          {
            yPercent: -92 * (j + 1),
            ease: "none",
          },
          j + "unique"
        );
      } else {
        digitalDesignTimeline
          .to(
            child,
            {
              scale: 1 - 0.1 * (j - i),
              // scale: Math.pow(0.9, j - i),
              // y: 20 * (j - i),
              ease: "none",
            },
            j + "unique"
          )
          .to(
            child.getElementsByClassName("overlay")[0],
            {
              opacity: 1 - 0.1 * j,
              ease: "none",
            },
            j + "unique"
          );
      }
    }
  }

  ScrollTrigger.create({
    trigger: "#digitalDesignWrapper",
    end: "+=2000",
    start: "top top",
    scrub: true,
    pin: true,
    animation: digitalDesignTimeline,
  });
} else if (isMobile()) {
  gsap.timeline().to("#animCircle", {
    rotate: 180,
    ease: "none",
    scrollTrigger: {
      trigger: "#unseenStories",
      start: "30% center",
      end: "30% top",

      onUpdate: (self) => {
        const progress = self.progress;

        if (progress >= 0 && progress < 1 / 3) {
          gsap.to(uls[0], {
            opacity: progress * 3, // Map progress from 0 to 1/3
          });
        } else if (progress >= 1 / 3 && progress < 2 / 3) {
          gsap.to(uls[1], {
            opacity: (progress - 1 / 3) * 3, // Map progress from 1/3 to 2/3
          });
        } else if (progress >= 2 / 3 && progress <= 1) {
          gsap.to(uls[2], {
            opacity: (progress - 2 / 3) * 3, // Map progress from 2/3 to 1
          });
        }
      },

      scrub: true,
    },
  });

  UIUXTimeline.to(
    "#AnimDot1",
    {
      y: -(uiuxConElement.offsetHeight - animCircleWidth + AnimDotWidth + 3),
      x: animCircleWidth - AnimDotWidth + 5,
      ease: "none",
    },
    "a"
  ).to(
    "#AnimDot2",
    {
      y: -(uiuxConElement.offsetHeight - animCircleWidth + AnimDotWidth + 3),
      x: -(animCircleWidth - AnimDotWidth + 5),
      ease: "none",
      onComplete: () => {
        digitalDesign.classList.add("activeBlack");
      },
    },
    "a"
  );

  ScrollTrigger.create({
    trigger: "#unseenStories",
    start: "31% top",
    end: "71% top",
    scrub: true,
    animation: UIUXTimeline,
    onEnterBack: () => {
      digitalDesign.classList.remove("activeBlack");
    },
  });

  var digitalDesignTimeline = gsap.timeline();
  var cardStack = document.getElementById("cardStack");

  for (let j = 1; j < cardStack.children.length; j++) {
    for (let i = 0; i < cardStack.children.length; i++) {
      const child = cardStack.children[i];

      if (i >= j) {
        digitalDesignTimeline.to(
          child,
          {
            yPercent: -92 * j,
            ease: "none",
          },
          j + "unique"
        );
      } else {
        digitalDesignTimeline
          .to(
            child,
            {
              scale: 1 - 0.1 * (j - i),
              // scale: Math.pow(0.9, j - i),
              // y: 20 * (j - i),
              ease: "none",
            },
            j + "unique"
          )
          .to(
            child.getElementsByClassName("overlay")[0],
            {
              opacity: 1 - 0.1 * j,
              ease: "none",
            },
            j + "unique"
          );
      }
    }
  }

  ScrollTrigger.create({
    trigger: "#digitalDesignWrapper",
    start: "200px top",
    end: "+=2000",
    scrub: true,
    pin: true,
    animation: digitalDesignTimeline,
  });
} else {
  gsap.to(uls, {
    opacity: 1,
    duration: 0,
  });
}

function activeChange() {
  digitalDesign.classList.add("active");
}
function deactiveChange() {
  digitalDesign.classList.remove("active");
}

let discoverMoreCurrentIndex = 0;
const discoverMoreCarousel = document.querySelector("#discoverMoreCarousel");
const discoverMoreCards = Array.from(discoverMoreCarousel.children);
const totaldiscoverMoreCards = discoverMoreCards.length;
const discoverMoreCardWidth = discoverMoreCards[0].offsetWidth + 20; // Adjusted to offsetWidth

if (isMobile()) {
  var discoverMoreSliderPosition = 0;

  discoverMoreCards.forEach((item) => {
    item.addEventListener("touchmove", (e) => {
      let mouseX = e.touches[0].clientX;
      let totalChange = discoverMoreSliderPosition - mouseX;

      if (totalChange > -100 && totalChange < 100) {
        gsap.to(discoverMoreCarousel, 0, {
          x: -totalChange,
        });
      }
    });
    item.addEventListener("touchstart", (e) => {
      let mouseX = e.touches[0].clientX;
      discoverMoreSliderPosition = mouseX;
    });
    item.addEventListener("touchend", (e) => {
      let mouseX = e.changedTouches[0].clientX;
      let totalChange = discoverMoreSliderPosition - mouseX;
      gsap.to(discoverMoreCarousel, 0.2, {
        x: 0,
      });
      if (totalChange > 100) {
        nextDiscoverMore();
      } else if (totalChange < -100) {
        prevDiscoverMore();
      }
      discoverMoreSliderPosition = 0;
    });
  });

  function nextDiscoverMore() {
    if (discoverMoreCurrentIndex < totaldiscoverMoreCards - 1) {
      discoverMoreCurrentIndex++;
      discoverMoreCards.forEach((card, index) => {
        card.style.transform = `translateX(-${
          discoverMoreCurrentIndex * discoverMoreCardWidth
        }px)`;
        // gsap.to(
        //   card,{
        //     x:()=>`-${discoverMoreCurrentIndex * width}px`,
        //   }
        // );
      });
    }
  }

  function prevDiscoverMore() {
    if (discoverMoreCurrentIndex > 0) {
      discoverMoreCurrentIndex--;
      discoverMoreCards.forEach((card, index) => {
        card.style.transform = `translateX(-${
          discoverMoreCurrentIndex * discoverMoreCardWidth
        }px)`;
        // gsap.to(
        //   card,{
        //     x:()=>`-${discoverMoreCurrentIndex * width}px`,
        //   }
        // );
      });
    }
  }
}
