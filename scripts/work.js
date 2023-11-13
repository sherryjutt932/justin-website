const workSec = document.getElementById("workSec");
const imgRef = document.getElementById("imgRef");
const detailRef = document.getElementById("detailRef");

// animated_line.style.strokeDashoffset = (animatedline_length*2)- 10;

if (!isMobile()) {
  var worktimeline = gsap.timeline();

  // gsap.set(detailRef, {
  //   x: -detailRef.children[0].offsetWidth * (detailRef.childElementCount - 1),
  // });

  if (true) {
    const imgArray = Array.from(imgRef.children);

    worktimeline.to(imgRef, {
      yPercent: -300,
      ease: "none",
    });
  }

  if (true) {
    const detailArray = Array.from(detailRef.children);

    // for (let index = 1; index < detailArray.length; index++) {
    //   const child = detailArray[index];
    //   console.log("a")
    //   worktimeline.to(
    //     child,
    //     {
    //         xPercent: 100 * index,
    //         duration:1,
    //         ease:"none"
    //       },
    //       index
    //       );

    //       // Nested loop to access all previous children
    //       for (let prevIndex = 0; prevIndex < index; prevIndex++) {
    //         const prevChild = detailArray[prevIndex];

    //         console.log("b")
    //     worktimeline.to(
    //       prevChild,
    //       {
    //         xPercent: 100 * index,
    //         opacity: 0,
    //         duration:.4,
    //         ease:"none"
    //       },
    //       index
    //     );
    //   }
    // }

    // worktimeline.to(
    //   detailArray[0],
    //   {
    //     xPercent: 100,
    //     duration:0.4,
    //     opacity: 0,
    //     ease:"none"
    //   },
    //   1
    // ).to(
    //   detailArray[1],
    //   {
    //     xPercent: 100,
    //     duration:1,
    //     ease:"none"
    //   },
    //   1
    // ).to(
    //   detailArray[2],
    //   {
    //     xPercent: 100,
    //     duration:1,
    //     ease:"none"
    //   },
    //   1
    // ).to(
    //   detailArray[0],
    //   {
    //     xPercent: 200,
    //     opacity: 0,
    //     duration:0.4,
    //     ease:"none"
    //   },
    //   2
    // ).to(
    //   detailArray[1],
    //   {
    //     xPercent: 200,
    //     opacity: 0,
    //     duration:0.4,
    //     ease:"none"
    //   },
    //   2
    // ).to(
    //   detailArray[2],
    //   {
    //    xPercent: 200,
    //     duration:1,
    //     ease:"none"
    //   },
    //   2
    // );
  }

  ScrollTrigger.create({
    trigger: workSec,
    start: "top top",
    // end: () => `+=${imgRef.offsetHeight}`,
    scrub: true,
    pin: true,
    animation: worktimeline,
    onUpdate: (self) => {
      let workdetail_item = document.getElementsByClassName("workdetailitem");
      let progress = self.progress;

      let imgArray = Array.from(imgRef.children);
      let totalItems = imgArray.length - 1;
      let currentIndex = Math.round(progress * (totalItems - 1)) + 1;
      document.getElementById("workcounter").innerHTML =
        currentIndex > 1 ? "0" + currentIndex : "01";
      if (currentIndex >= 1 && currentIndex <= totalItems) {
        Array.from(workdetail_item).forEach((item) => {
          item.classList.remove("open");
        });
        workdetail_item[currentIndex - 1].classList.add("open");
      }
    },
  });
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
    end: () => `+=${imgRef.offsetHeight}`,
    scrub: true,
    animation: animatedlinetimeline,
    onUpdate: (self) => {
      let svgdrawLength = animatedline_length * self.progress * 1.05;
      animated_line.style.strokeDashoffset =
        animatedline_length - svgdrawLength;
    },
  });
}
