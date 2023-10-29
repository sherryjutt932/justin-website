const workSec = document.getElementById("workSec");
  const imgRef = document.getElementById("imgRef");
  const detailRef = document.getElementById("detailRef");
  
  
//   const [currentSec, setCurrentSec] = useState(1);

  let updateTimer;
  var tl = gsap.timeline();

  gsap.set(detailRef, {
    x: -detailRef.children[0].offsetWidth * (detailRef.childElementCount - 1),
  });

  if (imgRef) {
    const imgArray = Array.from(imgRef.children);

    for (let index = 0; index < imgArray.length; index++) {
      const child = imgArray[index];
      tl.to(
        child,
        {
          yPercent: -100 * index,
          ease: "none",
        },
        index
      );

      // Nested loop to access all previous children
      for (let prevIndex = 0; prevIndex < index; prevIndex++) {
        const prevChild = imgArray[prevIndex];

        tl.to(
          prevChild,
          {
            yPercent: -100 * index,
            ease: "none",
          },
          index
        );
      }
    }
  }

  if (detailRef) {
    const detailArray = Array.from(detailRef.children);

    for (let index = 0; index < detailArray.length; index++) {
      const child = detailArray[index];
      tl.to(
        child,
        {
          xPercent: 100 * index,
          ease: "none",
        },
        index
      );

      // Nested loop to access all previous children
      for (let prevIndex = 0; prevIndex < index; prevIndex++) {
        const prevChild = detailArray[prevIndex];

        tl.to(
          prevChild,
          {
            xPercent: 100 * index,
            opacity: 0,
            ease: "none",
          },
          index
        );
      }
    }
  }

  ScrollTrigger.create({
    trigger: workSec,
    start: "top top",
    end: () => `+=${imgRef.offsetHeight*.7}`,
    scrub: true,
    pin: true,
    animation: tl,
    invalidateOnRefresh: true,
    snap: {
      snapTo: 1 / (imgRef.childElementCount - 1),
    },
    // onUpdate: (self) => {
    //   clearTimeout(updateTimer);

    //   updateTimer = setTimeout(() => {
    //     const progress = self.progress;
    //     const totalItems = imgRef.childNodes.length;
    //     const currentIndex = Math.round(progress * (totalItems - 1)) + 1;

    //     setCurrentSec(currentIndex);
    //   }, 20);
    // },
  });