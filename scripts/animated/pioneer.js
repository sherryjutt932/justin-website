if(!isMobile()){
    var pioneerCon = document.getElementById("pioneerCon");
var pioneerArray = Array.from(pioneerCon.children);
var pioneerTimeline = gsap.timeline();

pioneerTimeline
  .fromTo(
    pioneerArray[0],
    {
      yPercent: 200,
      ease: "none",
    },
    {
      yPercent: 100,
      ease: "none",
    },
    "a"
  )
  .fromTo(
    pioneerArray[0],
    {
      yPercent: 100,
      ease: "none",
    },
    {
      yPercent: 0,
      ease: "none",
    },
    "b"
  )
  .fromTo(
    pioneerArray[1],
    {
      yPercent: 100,
      ease: "none",
    },
    {
      yPercent: 0,
      ease: "none",
    },
    "b"
  )
  .to(
    pioneerArray[0],
    {
      yPercent: 100,
      ease: "none",
    },
    "c"
  )
  .to(
    pioneerArray[2],
    {
      yPercent: -100,
      ease: "none",
    },
    "c"
  )
  ;

ScrollTrigger.create({
  trigger: "#unseenStories",
  start: `${document.getElementById("unseenimages").offsetTop} top`,
  end: "+=1000",
  scrub: true,
  pin: true,
  animation: pioneerTimeline,
});

}
else{
//     var pioneerCon = document.getElementById("pioneerConM");
// var pioneerArray = Array.from(pioneerCon.children);
// var pioneerTimeline = gsap.timeline();

// pioneerTimeline
//   .fromTo(
//     pioneerArray[0],
//     {
//       yPercent: 200,
//       ease: "none",
//     },
//     {
//       yPercent: 100,
//       ease: "none",
//     },
//     "a"
//   )
//   .fromTo(
//     pioneerArray[0],
//     {
//       yPercent: 100,
//       ease: "none",
//     },
//     {
//       yPercent: 0,
//       ease: "none",
//     },
//     "b"
//   )
//   .fromTo(
//     pioneerArray[1],
//     {
//       yPercent: 100,
//       ease: "none",
//     },
//     {
//       yPercent: 0,
//       ease: "none",
//     },
//     "b"
//   )
//   .to(
//     pioneerArray[0],
//     {
//       yPercent: 100,
//       ease: "none",
//     },
//     "c"
//   )
//   .to(
//     pioneerArray[2],
//     {
//       yPercent: -100,
//       ease: "none",
//     },
//     "c"
//   )
//   ;

// ScrollTrigger.create({
//   trigger: "#unseenStories",
//   start: `${document.getElementById("unseenimagesMob").offsetTop} 30%`,
//   end: "+=1000",
//   scrub: true,
//   pin: true,
//   animation: pioneerTimeline,
// });

}