var UIUXTimeline = gsap.timeline();
var animCircle = document.getElementById("animCircle");
var digitalDesign = document.getElementById("digitalDesign");
var animCircleWidth = animCircle.offsetWidth / 2;
var AnimDotWidth = document.getElementById("AnimDot1").offsetWidth / 2;
  
  
gsap.timeline().to("#animCircle", {
  rotate: 180,
  ease: "none",
  scrollTrigger: {
    trigger: "#unseenStories",
    start: "120px top",
    end: "+=500",
    scrub: true,
    pin: true,
  },
});

UIUXTimeline.to(
  "#AnimDot1",
  {
    y: -(animCircleWidth + 160 + AnimDotWidth * 1),
    x: animCircleWidth - AnimDotWidth + 5,
    ease: "none",
  },
  "a"
).to(
  "#AnimDot2",
  {
    y: -(animCircleWidth + 160 + AnimDotWidth * 1),
    x: -(animCircleWidth - AnimDotWidth + 5),
    ease: "none",
    onComplete: () => {
      digitalDesign.classList.add("active");
    },
  },
  "a"
);

ScrollTrigger.create({
  trigger: "#unseenStories",
  start: "bottom 95%",
  end: "bottom 20%",
  scrub: true,
  animation: UIUXTimeline,
  onEnterBack: () => {
    digitalDesign.classList.remove("active");
  },
});

var digitalDesignTimeline = gsap.timeline();
var cardStack = document.getElementById("cardStack");

// digitalDesignTimeline
// .to(
//     cardStack.children[0],
//   {
//     yPercent: -100,
//     ease: "none",
//   }, "a"
// )
// .to(
//     cardStack.children[1],
//   {
//     yPercent: -100,
//     ease: "none",
//   }, "a"
// )
// .to(
//     cardStack.children[1],
//   {
//     yPercent: -200,
//     ease: "none",
//   }, "b"
// )
// .to(
//     cardStack.children[0],
//   {
//     scale: 0.9,
//     ease: "none",
//   }, "b"
// );

for (let j = 0; j < cardStack.children.length; j++) {
    for (let i = 0; i < cardStack.children.length; i++) {
      const child = cardStack.children[i];
  
      if(i >= (j)){
        digitalDesignTimeline
        .to(
          child,
          {
            yPercent: -90  * (j+1),
            ease: "none",
          },
          j + "unique"
        )
      }
      else{
        digitalDesignTimeline
        .to(
          child,
          {
            // scale: 1 - ((0.1 ) * (j - i)),
            scale: Math.pow(0.9, j - i),
            y: (20 * (j - i)),
            ease: "none",
          },
          j + "unique"
        )
        .to(
            child.getElementsByClassName("overlay")[0],
          {
            opacity:  (1 - (0.1* j) + 0.3),
            ease: "none",
          },
          j + "unique"
        );

      }
    }
  }
  


ScrollTrigger.create({
  trigger: "#digitalDesignWrapper",
  end:"+=2000",
  start: "top top",
  scrub: true,
  pin: true,
  animation: digitalDesignTimeline,
});

// --------------------animation skills box







