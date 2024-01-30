

const labelsRef = document.querySelector('#hero #labelsRef');
const boxesRef = document.querySelector('#hero #boxesRef');
const skillsRef = document.querySelector('#hero #skillsRef');
const labelsCon = document.querySelector('#hero #labelsCon');

const labelsRefBg = document.querySelector('#heroBg #labelsRef');
const boxesRefBg = document.querySelector('#heroBg #boxesRef');
const skillsRefBg = document.querySelector('#heroBg #skillsRef');
const labelsConBg = document.querySelector('#heroBg #labelsCon');

var boxesTl = gsap.timeline();
var labelsTl = gsap.timeline();

// if(true ){
//   labelsTl.fromTo(
//     [labelsRef.children[0]],
//     //
//     {
//       y:-40,
//     },
//     {
//       y:40,
//     },"a"
//   )
//   .fromTo(
//     [labelsRef.children[3]],
//     //
//     {
//       y:-35,
//     },
//     {
//       y:0,
//     },"a"
//   ).fromTo(
//     [labelsRef.children[1],labelsRef.children[2]],
//     //
//     {
//       y:-25,
//     },
//     {
//       y:25,
//     },"a"
//   )
  
// }
// if(!isMobile()){
//   boxesTl.fromTo(
//     boxesRef.children[0],
//     {
//       y:-50,
//     },
//     {
//       y:100,
//     },"a"
//   ).fromTo(
//     boxesRef.children[1],
//     {
//       y:-40,
//     },
//     {
//       y:0,
//     },"a"
//   ).fromTo(
//     boxesRef.children[2],
//     {
//         y:-30,
//       },
//       {
//         y:-100,
//       },"a"
//   )
// }


if(!isMobile()){
    boxesTl.fromTo(
      [boxesRef.children[0], boxesRefBg.children[0]],
      {
        y:-50,
      },
      {
        y:100,
      },"a"
    ).fromTo(
      [boxesRef.children[1],boxesRefBg.children[1]],
      {
        y:-40,
      },
      {
        y:0,
      },"a"
    ).fromTo(
      [boxesRef.children[2], boxesRefBg.children[2]],
      {
          y:-30,
        },
        {
          y:-100,
        },"a"
    )
  }

ScrollTrigger.create({
  trigger: boxesRef,
  start: "top center",
  end: "bottom top",
  scrub: 3,
  animation: boxesTl,
});



// ---------------------floating

const animateskillMarquee = () => {
  if(true ){
    gsap.timeline().to(
      [labelsRef.children[0], labelsRefBg.children[0]],3,
      //
      {
        y:ScrollDirection === "down" ? -25 : 25,
      }
      ,"a"
    )
    .to(
      [labelsRef.children[3], labelsRefBg.children[3]],3,
      //
      {
        y:ScrollDirection === "down" ? -30 : 30,
      }
      ,"a"
    ).to(
      [labelsRef.children[1],labelsRef.children[2], labelsRefBg.children[1],labelsRefBg.children[2]],4,
      //
      {
        y:ScrollDirection === "down" ? -20 : 20,
      }
      ,"a"
    )
    
  }
  
  requestAnimationFrame(animateskillMarquee);
};

animateskillMarquee();