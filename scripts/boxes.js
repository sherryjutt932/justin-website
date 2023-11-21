// const boxesSec = document.getElementById("boxesSec");
// const boxesRef2 = document.getElementById("boxesRef2");

// var boxesTimeline = gsap.timeline();

// if (true) {
//   const boxesArray = Array.from(boxesRef2.children);

//   for (let index = 0; index < boxesArray.length; index++) {
//     gsap.set(boxesArray[index], {
//       xPercent: -100 * index,
//       zIndex: boxesArray.length - index,
//     });
//   }

//   for (let index = 0; index < boxesArray.length; index++) {
//     const child = boxesArray[index];
//     boxesTimeline.to(
//       child,
//       {
//         xPercent: 0,
//         ease: "none",
//       },
//       "a"
//     );
//   }
// }

// ScrollTrigger.create({
//   trigger: boxesSec,
//   start: "top 60%",
//   end: "top 30%",
//   scrub: 2,
//   animation: boxesTimeline,
// });


const apath_clear_demo = '../assets/Animation/Clear path to your peoject/Book A Demo/Book_a_Demo.json';
    const apath_clear_design = '../assets/Animation/Clear path to your peoject/Get your designs/GetYourDesigns.json';
    const apath_clear_request = '../assets/Animation/Clear path to your peoject/Subscribe_And_Request/Subscribe_And_Request.json';
    const apath_clear_revision = '../assets/Animation/Clear path to your peoject/Unlimited_Revisions/unlimited_Revisions.json';

    const aicon_clear_demo = 'aicon-demo';
    const aicon_clear_design = 'aicon-design';
    const aicon_clear_request = 'aicon-request';
    const aicon_clear_revision = 'aicon-revision';

    const anim_clear_demo = setupAnimation(aicon_clear_demo, apath_clear_demo);
    const anim_clear_design = setupAnimation(aicon_clear_design, apath_clear_design);
    const anim_clear_request = setupAnimation(aicon_clear_request, apath_clear_request);
    const anim_clear_revision = setupAnimation(aicon_clear_revision, apath_clear_revision);