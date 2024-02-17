

const labelsRef = document.querySelector('#labelsRef');
const boxesRef = document.querySelector('#boxesRef');
const skillsRef = document.querySelector('#skillsRef');
const labelsCon = document.querySelector('#labelsCon');

var boxesTl = gsap.timeline();
var labelsTl = gsap.timeline();

if(!isMobile()){
  console.log(boxesRef);
    boxesTl.fromTo(
      [boxesRef.children[0]],
      {
        y:-50,
      },
      {
        y:100,
      },"a"
    ).fromTo(
      [boxesRef.children[1]],
      {
        y:-40,
      },
      {
        y:0,
      },"a"
    ).fromTo(
      [boxesRef.children[2] ],
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
  if(labelsRef.children ){
    gsap.timeline().to(
      [labelsRef.children[0]],3,
      //
      {
        y:ScrollDirection === "down" ? -25 : 25,
      }
      ,"a"
    )
    .to(
      [labelsRef.children[3]],3,
      //
      {
        y:ScrollDirection === "down" ? -30 : 30,
      }
      ,"a"
    ).to(
      [labelsRef.children[1],labelsRef.children[2]],4,
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