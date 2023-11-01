const perksSec = document.getElementById('perksSec');
const perksRef = document.getElementById('perksRef');
const perksRef2 = document.getElementById('perksRef2');

var perksTimeline = gsap.timeline();

const perkcards = Array.from(perksRef.children);
const perkcards2 = Array.from(perksRef2.children);

perksTimeline.staggerFromTo(
    perkcards,
    1, // duration
    { y: 200, opacity:0  }, // from
    { y: 0, opacity:1 }, // to
    0.3, // stagger value (delay between each card)
    "a" // label
  ).staggerFromTo(
    perkcards2,
    1, // duration
    { y: 200, opacity:0  }, // from
    { y: 0, opacity:1 }, // to
    0.3, // stagger value (delay between each card)
    "+=1" // label
  )

ScrollTrigger.create({
    trigger: perksSec,
    start: "top 0%",
    end: "+=300",
    scrub: 1,
    animation: perksTimeline,
  });