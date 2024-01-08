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

var uls = uiuxConElement.getElementsByTagName("li");
console.log(uls);

gsap.set(uls, {
  opacity: 0,
});

function calculateDistance() {
  var box1Bottom = animCircle.getBoundingClientRect().bottom;
  var box2Top = digitalDesign.getBoundingClientRect().top;
  var distance = box2Top - box1Bottom;
  return distance;
}

if (!isMobile()) {
  gsap.timeline().to("#animCircle", {
    rotate: 180,
    ease: "none",
    scrollTrigger: {
      trigger: "#unseenStories",
      start: `${window.innerWidth > 1536 ? "140px" : "110px"} top`,
      end: "+=1000",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress >= 0 && progress < 0.5) {
          gsap.to(uls[0], {
            opacity: progress * 2, // Map progress from 0 to 0.5
          });
        }

        if (progress >= 0.5 && progress <= 1) {
          gsap.to(uls[1], {
            opacity: (progress - 0.5) * 2, // Map progress from 0.5 to 1
          });
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
        document.getElementById("AnimDot1").style.opacity=0;
        document.getElementById("AnimDot2").style.opacity=0;
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
      document.getElementById("AnimDot1").style.opacity=1;
      document.getElementById("AnimDot2").style.opacity=1;
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
} else {
  gsap.timeline().to("#animCircle", {
    rotate: 180,
    ease: "none",
    scrollTrigger: {
      trigger: "#unseenStories",
      start: "30% center",
      end: "30% top",
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress >= 0 && progress < 0.5) {
          gsap.to(uls[0], {
            opacity: progress * 2, // Map progress from 0 to 0.5
          });
        }

        if (progress >= 0.5 && progress <= 1) {
          gsap.to(uls[1], {
            opacity: (progress - 0.5) * 2, // Map progress from 0.5 to 1
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
            yPercent: (-92 * (j )),
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
}

function activeChange() {
  digitalDesign.classList.add("active");
}
function deactiveChange() {
  digitalDesign.classList.remove("active");
}
