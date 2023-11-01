const boxesSec = document.getElementById("boxesSec");
const boxesRef = document.getElementById("boxesRef2");

var boxesTimeline = gsap.timeline();

if (true) {
  const boxesArray = Array.from(boxesRef.children);

  for (let index = 0; index < boxesArray.length; index++) {
    gsap.set(boxesArray[index], {
      xPercent: -100 * index,
      zIndex: boxesArray.length - index,
    });
  }

  for (let index = 0; index < boxesArray.length; index++) {
    const child = boxesArray[index];
    boxesTimeline.to(
      child,
      {
        xPercent: 0,
        ease: "none",
      },
      "a"
    );
  }
}

ScrollTrigger.create({
  trigger: boxesSec,
  start: "top 60%",
  end: "top 30%",
  markers:true,
  scrub: true,
  animation: boxesTimeline,
});
