const workSec = document.getElementById("workSec");
  const imgRef = document.getElementById("imgRef");
  const detailRef = document.getElementById("detailRef");
  
  
//   const [currentSec, setCurrentSec] = useState(1);
if (!isMobile()) {
  let updateTimer;
  var worktimeline = gsap.timeline();

  gsap.set(detailRef, {
    x: -detailRef.children[0].offsetWidth * (detailRef.childElementCount - 1),
  });

  
  if (true) {
    const imgArray = Array.from(imgRef.children);
   
    worktimeline.to(
      imgArray[0],
      {
        yPercent: -100,
        duration:1,
        ease:"none"
      },
      1
    ).to(
      imgArray[1],
      {
        yPercent: -100,
        duration:1,
        ease:"none"
      },
      1
    ).to(
      imgArray[2],
      {
        yPercent: -100,
        duration:1,
        ease:"none"
      },
      1
    ).to(
      imgArray[0],
      {
        yPercent: -200,
        duration:1,
        ease:"none"
      },
      2
    ).to(
      imgArray[1],
      {
        yPercent: -200,
        duration:1,
        ease:"none"
      },
      2
    ).to(
      imgArray[2],
      {
        yPercent: -200,
        duration:1,
        ease:"none"
      },
      2
    );
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

    worktimeline.to(
      detailArray[0],
      {
        xPercent: 100,
        duration:0.4,
        opacity: 0,
        ease:"none"
      },
      1
    ).to(
      detailArray[1],
      {
        xPercent: 100,
        duration:1,
        ease:"none"
      },
      1
    ).to(
      detailArray[2],
      {
        xPercent: 100,
        duration:1,
        ease:"none"
      },
      1
    ).to(
      detailArray[0],
      {
        xPercent: 200,
        opacity: 0,
        duration:0.4,
        ease:"none"
      },
      2
    ).to(
      detailArray[1],
      {
        xPercent: 200,
        opacity: 0,
        duration:0.4,
        ease:"none"
      },
      2
    ).to(
      detailArray[2],
      {
       xPercent: 200,
        duration:1,
        ease:"none"
      },
      2
    );
  }

  ScrollTrigger.create({
    trigger: workSec,
    start: "top top",
    // end: () => `+=${workSec.offsetHeight}`,
    scrub: true,
    pin: true,
    animation: worktimeline,
    // snap: {
    //   snapTo: "labels",
    // },
    onUpdate: (self) => {
      const progress = self.progress;

      // Convert imgRef to an array if it's not already
      const imgArray = Array.from(imgRef.children);

      const totalItems = imgArray.length;
      const currentIndex = Math.round(progress * (totalItems - 1)) + 1;

      document.getElementById("workcounter").innerHTML = (currentIndex > 1)? ("0" + currentIndex):"01";
      // updateTimer = setTimeout(() => {
      // }, 1);
    },
  });
  
}
