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
      start: `${window.innerWidth > 1536? '140px': '110px'} top`,
      end: "+=2000",
      scrub: true,
      pin: true,
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
      // onComplete: () => {
      //   digitalDesign.classList.add("active");
      // },
    },
    "a"
  );

  ScrollTrigger.create({
    trigger: "#unseenStories",
    start: `${window.innerWidth > 1536? '145px': '115px'} top`,
    end: "+=500",
    scrub: true,
    animation: UIUXTimeline,
    // onEnterBack: () => {
    //   digitalDesign.classList.remove("active");
    // },
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
              scale: 1 - ((0.1 ) * (j - i)),
              // scale: Math.pow(0.9, j - i),
              // y: 20 * (j - i),
              ease: "none",
            },
            j + "unique"
          )
          .to(
            child.getElementsByClassName("overlay")[0],
            {
              opacity: 1 - (0.1 * j) ,
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
      start: "110px top",
      end: "+=1000",
      scrub: true,
      pin: true,
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
      // onComplete: () => {
      //   digitalDesign.classList.add("active");
      // },
    },
    "a"
  );

  ScrollTrigger.create({
    trigger: "#unseenStories",
    start: "115px top",
    end: "+=500",
    scrub: true,
    animation: UIUXTimeline,
    // onEnterBack: () => {
    //   digitalDesign.classList.remove("active");
    // },
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
              scale: 1 - ((0.1 ) * (j - i)),
              // scale: Math.pow(0.9, j - i),
              // y: 20 * (j - i),
              ease: "none",
            },
            j + "unique"
          )
          .to(
            child.getElementsByClassName("overlay")[0],
            {
              opacity: 1 - (0.1 * j) ,
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
    start: "bottom bottom",
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
