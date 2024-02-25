const workSec = document.getElementById("workSec");
const imgRef = document.getElementById("imgRef");
const detailRef = document.getElementById("detailRef");
const workdetail_item = document.getElementsByClassName("workdetailitem");

function mapRange(value, fromMin, fromMax, toMin, toMax) {
  return ((value - fromMin) / (fromMax - fromMin)) * (toMax - toMin) + toMin;
}


if (!isMobile() && !isTab()) {
  var worktimeline = gsap.timeline();

  // gsap.set(detailRef, {
  //   x: -detailRef.children[0].offsetWidth * (detailRef.childElementCount - 1),
  // });

  const imgArray = Array.from(imgRef.children);

  document.querySelector("#animatedline").style.height = ((window.innerHeight * 0.95) * (imgArray.length-1)) + "px";

  var totalHeight = (window.innerHeight) * (imgArray.length-1);

  worktimeline.to(imgRef, {
    yPercent: -(100 * (imgArray.length-2) ) ,
    ease: "none",
    duration:1.6,
    delay:.1,
  });

  let animated_line = document.getElementById("animatedlinepath");
  let animatedline_length = animated_line.getTotalLength();
  animated_line.style.strokeDasharray =
    animatedline_length + " " + animatedline_length;
  animated_line.style.strokeDashoffset = animatedline_length;

    var totalHeight = (window.innerHeight) * (imgArray.length-1);

    var progg = 0.4;

  ScrollTrigger.create({
    trigger: workSec,
    start: "top top",
    // end:"+=2000"
    end: () => `+=${totalHeight*1}`,
    scrub: true,
    pin: true,
    animation: worktimeline,
    onUpdate: (self) => {
      let imgArray = Array.from(imgRef.children);
      let totalItems = imgArray.length - 1;
      let currentIndex = 1;
      let mapIndex = mapRange((self.progress*0.9), 0, 1, 0, (totalItems)); 
      for (let i =  1; i <= totalItems; i++) {
        let threshold = (i - 1) * 0.94 + 0.82;
        if (mapIndex > threshold) {
          currentIndex = i +1;
        } else {
          break;
        }
      }

      if (currentIndex >= 1 && currentIndex <= totalItems) {
        Array.from(workdetail_item).forEach((item) => {
          item.classList.remove("open");
        });
        workdetail_item[currentIndex - 1].classList.add("open");
      }

      const mappedValue = mapRange((self.progress), 0, 1, 0, (animatedline_length)); 
      animated_line.style.strokeDashoffset = animatedline_length - mappedValue;

    },
  });
}
else{
  // ScrollTrigger.create({
  //   trigger: workSec,
  //   start: "top top",
  //   end: "+=150",
  //   scrub: true,
  //   pin: true,
  //   animation: worktimeline,
  // });
}
// animated_line.style.strokeDashoffset = (animatedline_length*2)- (svgdrawLength);

// const animated_line = document.querySelector("#animatedlinepath");

if (isMobile()) {
  let animated_line = document.getElementById("animatedlinepathM");
  let animatedline_length = animated_line.getTotalLength();
  animated_line.style.strokeDasharray =
    animatedline_length + " " + animatedline_length;
  animated_line.style.strokeDashoffset = animatedline_length;
  let animatedline_con = document.getElementById("workSec");
  let animatedlinetimeline = gsap.timeline();

  ScrollTrigger.create({
    trigger: animatedline_con,
    start: "top top",
    end: () => `+=${animatedline_con.offsetHeight}`,
    scrub: true,
    animation: animatedlinetimeline,
    onUpdate: (self) => {
      let svgdrawLength = animatedline_length * self.progress * 1.24;
      animated_line.style.strokeDashoffset =
        animatedline_length - svgdrawLength;
    },
  });

  var floatAnim = document.querySelector(".floatAnim");

gsap.fromTo(
  floatAnim,
  {
    yPercent: -20,
  },
  {
    yPercent: 20,
    scrollTrigger: {
      trigger:floatAnim,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  }
);
} else {
  


  var floatAnim = document.querySelector(".floatAnim");

gsap.fromTo(
  floatAnim,
  {
    yPercent: -30,
  },
  {
    yPercent: 30,
    scrollTrigger: {
      trigger:floatAnim,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  }
);


}


const boxesRef = document.querySelector('#skillsBoxesRef');
var boxesTl = gsap.timeline();

if(!isMobile()){
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
      [boxesRef.children[2]],
      {
          y:-30,
        },
        {
          y:-100,
        },"a"
    )
    ScrollTrigger.create({
      trigger: boxesRef,
      start: "top center",
      end: "bottom top",
      scrub: 3,
      animation: boxesTl,
    });
  }

  if (isTab()) {
    var currentWorkIndex = 0;
  
    function nextWork() {
      Array.from(workdetail_item).forEach((item) => {
        item.classList.remove("open");
      });
  
      currentWorkIndex++;
      if (currentWorkIndex >= workdetail_item.length) {
        // If index goes beyond the length, set it to the last index
        
        currentWorkIndex = workdetail_item.length - 1;
      }
      
      setTimeout(() => {
       gsap.to("#imgRef", {
         yPercent: -(100 * currentWorkIndex),
         duration:1,
       });
      }, 50);
      workdetail_item[currentWorkIndex].classList.add("open");
    }
  
    function prevWork() {
      Array.from(workdetail_item).forEach((item) => {
        item.classList.remove("open");
      });
  
      currentWorkIndex--;
      if (currentWorkIndex < 0) {
        // If index goes below 0, set it to 0
        
        currentWorkIndex = 0;
      }
      
      setTimeout(() => {
        gsap.to("#imgRef", {
          yPercent: -(100 * currentWorkIndex),
          duration:1,
        });
       }, 50);
      workdetail_item[currentWorkIndex].classList.add("open");
    }
  }