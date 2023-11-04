const marquee = document.getElementById('marquee');
  const first = document.getElementById('first');
  const second = document.getElementById('second');

  let xPercent = 0;
  let direction = "left";
  let speed = 1;

  const animateMarquee = () => {
    xPercent = direction === "left" ? (xPercent - speed / 10) : (xPercent + speed / 10);
    xPercent = (xPercent <= -100) ? 0 : ((xPercent >= 0) ? -100 : xPercent);

    gsap.to([first, second], {
      xPercent,
      duration: 0,
      ease: "none",
    });

    requestAnimationFrame(animateMarquee);
  };

  const setSecondPosition = () => {
    gsap.set(second, { left: direction === "left" ? "100%" : "-100%" });
  };

  setSecondPosition();
  animateMarquee();

  const handleResize = () => {
    setSecondPosition();
  };

  window.addEventListener("resize", handleResize);