const workSec = document.getElementById("workSec");
const imgRef = document.getElementById("imgRef");
const detailRef = document.getElementById("detailRef");
const workdetail_item = document.getElementsByClassName("workdetailitem");


if (!isMobile() && !isTab()) {
  var worktimeline = gsap.timeline();

  // gsap.set(detailRef, {
  //   x: -detailRef.children[0].offsetWidth * (detailRef.childElementCount - 1),
  // });

  if (true) {
    const imgArray = Array.from(imgRef.children);

    worktimeline.to(imgRef, {
      yPercent: -300,
      ease: "none",
      delay:.1,
    });
  }

  ScrollTrigger.create({
    trigger: workSec,
    start: "top top",
    // end:"+=2000"
    end: () => `+=${imgRef.offsetHeight*2}`,
    scrub: true,
    pin: true,
    animation: worktimeline,
    onUpdate: (self) => {
      let progress = self.progress;
      let imgArray = Array.from(imgRef.children);
      let totalItems = imgArray.length - 1;
      // let currentIndex = Math.round(progress * (totalItems - 1)) + 1;
      let currentIndex = 1;
      let windowsizefix = (window.innerWidth<1900)?Math.round((window.innerWidth/100)-12)/100:0;
      let adjust = 0.07;
      // console.log(progress,windowsizefix);
      // document.getElementById("workcounter").innerHTML =
      //   currentIndex > 1 ? "0" + currentIndex : "01";
      if(progress>(0.33 - adjust - (windowsizefix))){
        currentIndex = 2; //flora
      }
      if(progress> (0.61 - adjust - (windowsizefix))){
        currentIndex = 3; //furniture
      }
      if(progress> (0.89 - adjust - (windowsizefix))){
        currentIndex = 4; //tavern
      }

      if (currentIndex >= 1 && currentIndex <= totalItems) {
        Array.from(workdetail_item).forEach((item) => {
          item.classList.remove("open");
        });
        workdetail_item[currentIndex - 1].classList.add("open");
      }

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
      let svgdrawLength = animatedline_length * self.progress * 1.5;
      animated_line.style.strokeDashoffset =
        animatedline_length - svgdrawLength;
    },
  });
} else {
  let animated_line = document.getElementById("animatedlinepath");
  let animatedline_length = animated_line.getTotalLength();
  animated_line.style.strokeDasharray =
    animatedline_length + " " + animatedline_length;
  animated_line.style.strokeDashoffset = animatedline_length;
  let animatedlinetimeline = gsap.timeline();

  ScrollTrigger.create({
    trigger: imgRef,
    start: "top top",
    end: () => `+=${imgRef.offsetHeight*2}`,
    scrub: true,
    animation: animatedlinetimeline,
    onUpdate: (self) => {
      let svgdrawLength = animatedline_length * self.progress * 1;
      animated_line.style.strokeDashoffset =
        animatedline_length - svgdrawLength;
    },
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
