

const labelsRef = document.getElementById('labelsRef');
const boxesRef = document.getElementById('boxesRef');
const skillsRef = document.getElementById('skillsRef');
const labelsCon = document.getElementById('labelsCon');

var boxesTl = gsap.timeline();
var labelsTl = gsap.timeline();

if(true ){
  labelsTl.fromTo(
    [labelsRef.children[0]],
    //
    {
      y:-40,
    },
    {
      y:40,
    },"a"
  )
  .fromTo(
    [labelsRef.children[3]],
    //
    {
      y:-35,
    },
    {
      y:0,
    },"a"
  ).fromTo(
    [labelsRef.children[1],labelsRef.children[2]],
    //
    {
      y:-25,
    },
    {
      y:25,
    },"a"
  )
  
}
if(true){
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
  trigger: labelsCon,
  start: "top center",
  end: "top 30%",
  scrub: 3,
  animation: labelsTl,
  // pin:true,
});

ScrollTrigger.create({
  trigger: boxesRef,
  start: "top center",
  end: "bottom top",
  scrub: 3,
  animation: boxesTl,
});
