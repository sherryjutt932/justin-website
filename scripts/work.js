const workSec = document.getElementById("workSec");
  const imgRef = document.getElementById("imgRef");
  const detailRef = document.getElementById("detailRef");
  
  
//   const [currentSec, setCurrentSec] = useState(1);

  let updateTimer;
  var worktimeline = gsap.timeline();

  gsap.set(detailRef, {
    x: -detailRef.children[0].offsetWidth * (detailRef.childElementCount - 1),
  });

  if (true) {
    const imgArray = Array.from(imgRef.children);

    for (let index = 0; index < imgArray.length; index++) {
      const child = imgArray[index];
      worktimeline.to(
        child,
        {
          yPercent: -100 * index,
        },
        index
      );

      // Nested loop to access all previous children
      for (let prevIndex = 0; prevIndex < index; prevIndex++) {
        const prevChild = imgArray[prevIndex];

        worktimeline.to(
          prevChild,
          {
            yPercent: -100 * index,
          },
          index
        );
      }

      worktimeline.addLabel(index+"abc")
    }
  }

  if (true) {
    const detailArray = Array.from(detailRef.children);

    for (let index = 0; index < detailArray.length; index++) {
      const child = detailArray[index];
      worktimeline.to(
        child,
        {
          xPercent: 100 * index,
        },
        index
      );

      // Nested loop to access all previous children
      for (let prevIndex = 0; prevIndex < index; prevIndex++) {
        const prevChild = detailArray[prevIndex];

        worktimeline.to(
          prevChild,
          {
            xPercent: 100 * index,
            opacity: 0,
            duration:.2,
          },
          index
        );
      }
    }
  }

  ScrollTrigger.create({
    trigger: workSec,
    start: "top top",
    end: () => `+=${workSec.offsetHeight}`,
    scrub: true,
    pin: true,
    animation: worktimeline,
    snap: {
      snapTo: "labels",
    },
    onUpdate: (self) => {
      updateTimer = setTimeout(() => {
        const progress = self.progress;
  
        // Convert imgRef to an array if it's not already
        const imgArray = Array.from(imgRef.children);
  
        const totalItems = imgArray.length;
        const currentIndex = Math.round(progress * (totalItems - 1)) + 1;
  
        document.getElementById("workcounter").innerHTML = "0" + currentIndex;
        console.log(currentIndex);
      }, 20);
    },
  });
  

