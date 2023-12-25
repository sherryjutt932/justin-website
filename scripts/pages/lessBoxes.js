var UIboxesRef = document.querySelector('#skillsBoxesRef');
var otherServicesRef = document.querySelector('#otherServices');
var UIboxesTl = gsap.timeline();

if(!isMobile()){


      UIboxesTl.fromTo(
        UIboxesRef.children[0],
        {
          y:-50,
        },
        {
          y:100,
        },"a"
      ).fromTo(
        UIboxesRef.children[1],
        {
          y:-40,
        },
        {
          y:0,
        },"a"
      ).fromTo(
        UIboxesRef.children[2],
        {
            y:-30,
          },
          {
            y:-100,
          },"a"
      )
      
    ScrollTrigger.create({
      trigger: otherServicesRef,
      start: "top 40%",
      end: "+=1000",
      scrub: 1,
      animation: UIboxesTl,
    });
  }