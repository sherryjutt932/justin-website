var UIboxesRef = document.querySelector('#skillsBoxesRef');
var otherServicesRef = document.querySelector('#otherServices');
var UIboxesTl = gsap.timeline();

if(!isMobile()){
  
    UIboxesTl.to(
      UIboxesRef.children[0],
      {
        y:50,
      },"a"
    ).to(
      UIboxesRef.children[1],
      {
        y:0,
      },"a"
    ).to(
      UIboxesRef.children[2],
     
      {
        y:-100,
      },"a"
      );
      
    ScrollTrigger.create({
      trigger: otherServicesRef,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      animation: UIboxesTl,
    });
  }