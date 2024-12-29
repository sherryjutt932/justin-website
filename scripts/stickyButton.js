if (!isMobile()) {
  var magnets = document.querySelectorAll("#magneticBtn");
  var strength = 50;

  magnets.forEach((magnet) => {
    magnet.addEventListener("mousemove", moveMagnet);
    magnet.addEventListener("mouseout", function (event) {
      TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut });
    });
  });

  function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();

    //console.log(magnetButton, bounding)

    TweenMax.to(magnetButton, 1, {
      x:
        ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
        strength,
      y:
        ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
        strength,
      ease: Power4.easeOut,
    });
  }

  var btnMarquee = document.querySelectorAll("#magneticBtn");
  var firstBtn = document.getElementById("Btnfirst");
  var secondBtn = document.getElementById("Btnsecond");

  btnMarquee.forEach((element) => {
    let xPercentBtn = 0;
    let directionBtn = "left";
    let speedBtn = 12;
    let isHoveredBtn = false;

    const animateMarqueeBtn = () => {
      if (isHoveredBtn) {
        xPercentBtn =
          directionBtn === "left"
            ? xPercentBtn - speedBtn / 10
            : xPercentBtn + speedBtn / 10;
        xPercentBtn =
          xPercentBtn <= -100 ? 0 : xPercentBtn >= 0 ? -100 : xPercentBtn;

        gsap.to(["#Btnfirst", "#Btnsecond"], {
          xPercent: xPercentBtn,
          duration: 0,
          ease: "none",
        });

        requestAnimationFrame(animateMarqueeBtn);
      } else {
        xPercentBtn = 0;
        gsap.to(["#Btnfirst", "#Btnsecond"], {
          xPercent: 0,
          duration: 0,
          ease: "none",
        });
      }
    };

    element.addEventListener("mouseenter", () => {
      isHoveredBtn = true;
      animateMarqueeBtn();
    });

    element.addEventListener("mouseleave", () => {
      isHoveredBtn = false;
    });

    element.addEventListener("touchstart", () => {
      isHoveredBtn = true;
      animateMarqueeBtn();
    });

    element.addEventListener("touchend", () => {
      isHoveredBtn = false;
    });
  });
}
