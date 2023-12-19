// -----------------------------work like

const workSec = document.getElementById("workSec");
const imgRef = document.getElementById("imgRef");
const detailRef = document.getElementById("detailRef");
const workdetail_item = document.getElementsByClassName("workdetailitem");


if (!isMobile()) {
  var worktimeline = gsap.timeline();

  if (true) {
    const imgArray = Array.from(imgRef.children);

    worktimeline.to(imgRef, {
      yPercent: -200,
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
      if(progress>(0.43 - adjust - (windowsizefix))){
        currentIndex = 2; //flora
      }
      if(progress> (0.78 - adjust - (windowsizefix))){
        currentIndex = 3; //furniture
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