var follow_STB = document.getElementsByClassName("followSTB");
var btnMarquee = document.getElementById("magneticBtn");
var firstBtn = document.getElementById("Btnfirst");
var secondBtn = document.getElementById("Btnsecond");

let xPercentBtn = 0;
let directionBtn = "left";
let speedBtn = 12;
let isHoveredBtn = false;
// Add click event listener to each card
Array.from(follow_STB).forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    let mousefollower_stickybutton = mousefollower.querySelector(
      "#mousefollower-stickybutton"
    );
    if (mousefollower_stickybutton && !isHoveredBtn) {
      mousefollower_stickybutton.style.display = "block";
      gsap
        .timeline()
        .to(
          mousefollower,
          0.2,
          {
            width: window.innerWidth > 1536 ? 132 : 96,
            height: window.innerWidth > 1536 ? 132 : 96,
          }
        )
        .to(
          mousefollower_stickybutton,
          0,
          {
            scale: 1,
          },
          "-=0.08"
        );

        isHoveredBtn = true;
      animateMarqueeBtn();
    }
  });
  card.addEventListener("mouseout", function () {
    let mousefollower_stickybutton = mousefollower.querySelector(
      "#mousefollower-stickybutton"
    );
    if (isHoveredBtn) {
      isHoveredBtn = false;
      gsap
        .timeline()
        .to(
          mousefollower_stickybutton,
          0,
          {
            scale: 0,
            onComplete: () => {
                mousefollower_stickybutton.style.display = "none";
            },
          },
          "a"
        )
        .to(
          mousefollower,
          0.2,
          {
            width: 16,
            height: 16,
          },
          "a"
        );
    }
  });
});

const animateMarqueeBtn = () => {
  if (isHoveredBtn) {
    xPercentBtn =
      directionBtn === "left"
        ? xPercentBtn - speedBtn / 10
        : xPercentBtn + speedBtn / 10;
    xPercentBtn =
      xPercentBtn <= -100 ? 0 : xPercentBtn >= 0 ? -100 : xPercentBtn;

    gsap
      .timeline()
      .to(
        [firstBtn, secondBtn],
        {
          xPercent: xPercentBtn,
          duration: 0,
          ease: "none",
        },
        "a"
      )
      .to(
        [secondBtn],
        {
          yPercent: -50,
          duration: 0,
          ease: "none",
        },
        "a"
      );

    requestAnimationFrame(animateMarqueeBtn);
  } else {
    xPercentBtn = 0;
    gsap
      .timeline()
      .to(
        [firstBtn, secondBtn],
        {
          xPercent: 0,
          duration: 0,
          ease: "none",
        },
        "a"
      )
      .to(
        [secondBtn],
        {
          yPercent: -50,
          duration: 0,
          ease: "none",
        },
        "a"
      );
  }
};
