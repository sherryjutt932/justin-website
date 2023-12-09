const workSec = document.getElementById("workSec");
const imgRef = document.getElementById("imgRef");
const detailRef = document.getElementById("detailRef");
const workdetail_item = document.getElementsByClassName("workdetailitem");


if (!isMobile()) {
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
    delay:.1,
  });

  ScrollTrigger.create({
    trigger: workSec,
    start: "top top",
    // end:"+=2000"
    end: () => `+=${totalHeight*1}`,
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
      for (let i = 2; i <= totalItems; i++) {
        let threshold = (i - 1) / totalItems;
        if (progress > (threshold - adjust - windowsizefix + 0.14)) {
          currentIndex = i;
        } else {
          break; // Break the loop if the condition is not met
        }
      }

      // if(progress>(0.33 - adjust - (windowsizefix))){
      //   currentIndex = 2; //flora
      // }
      // if(progress> (0.61 - adjust - (windowsizefix))){
      //   currentIndex = 3; //furniture
      // }
      // if(progress> (0.89 - adjust - (windowsizefix))){
      //   currentIndex = 4; //tavern
      // }

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
      let svgdrawLength = animatedline_length * self.progress * 1.3;
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

  let imgArray = Array.from(imgRef.children);
    var totalHeight = (window.innerHeight) * (imgArray.length-1);

    var progg = 0.4;
    
  ScrollTrigger.create({
    trigger: imgRef,
    start: "top top",
    end: () => `+=${totalHeight}`,
    scrub: true,
    animation: animatedlinetimeline,
    onUpdate: (self) => {
      let svgdrawLength = (animatedline_length) * self.progress * (progg + (self.progress * 0.7));
      // if(svgdrawLength < (animatedline_length*0.85)){progg = 0.4}
      // else if((animatedline_length*0.85) < svgdrawLength < (animatedline_length*1.35)){progg = 0.45}
      // else if((animatedline_length*1.35) < svgdrawLength < (animatedline_length*2.35)){progg = 0.5}
      animated_line.style.strokeDashoffset = animatedline_length - svgdrawLength;
    },
  });
}
