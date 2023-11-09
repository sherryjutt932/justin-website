

const labelsRef = document.getElementById('labelsRef');
const boxesRef = document.getElementById('boxesRef');
const skillsRef = document.getElementById('skillsRef');
const labelsCon = document.getElementById('labelsCon');

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
      boxesRef.children[0],
      {
        y:-50,
      },
      {
        y:100,
      },"a"
    ).fromTo(
      boxesRef.children[1],
      {
        y:-40,
      },
      {
        y:0,
      },"a"
    ).fromTo(
      boxesRef.children[2],
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
      [labelsRef.children[0]],3,
      //
      {
        y:process_scrollDir === "down" ? -20 : 20,
      }
      ,"a"
    )
    .to(
      [labelsRef.children[3]],3,
      //
      {
        y:process_scrollDir === "down" ? -25 : 25,
      }
      ,"a"
    ).to(
      [labelsRef.children[1],labelsRef.children[2]],4,
      //
      {
        y:process_scrollDir === "down" ? -15 : 15,
      }
      ,"a"
    )
    
  }
  
  requestAnimationFrame(animateskillMarquee);
};

animateskillMarquee();