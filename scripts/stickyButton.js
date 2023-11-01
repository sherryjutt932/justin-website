var magnets = document.querySelectorAll('#magneticBtn')
var strength = 50

magnets.forEach( (magnet) => {
  magnet.addEventListener('mousemove', moveMagnet );
  magnet.addEventListener('mouseout', function(event) {
    TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
  } );
});

function moveMagnet(event) {
  var magnetButton = event.currentTarget
  var bounding = magnetButton.getBoundingClientRect()

  //console.log(magnetButton, bounding)

  TweenMax.to( magnetButton, 1, {
    x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
    y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
    ease: Power4.easeOut
  })

  //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
}



const btnMarquee = document.getElementById('magneticBtn');

const firstBtn = document.getElementById('Btnfirst');
const secondBtn = document.getElementById('Btnsecond');

let xPercentBtn = 0;
let directionBtn = "left";
let speedBtn = 12;
let isHoveredBtn = false;

const animateMarqueeBtn = () => {
  if (isHoveredBtn){
    xPercentBtn = directionBtn === "left" ? (xPercentBtn - speedBtn / 10) : (xPercentBtn + speedBtn / 10);
  xPercentBtn = (xPercentBtn <= -100) ? 0 : ((xPercentBtn >= 0) ? -100 : xPercentBtn);

  gsap.to([firstBtn, secondBtn], {
    xPercent: xPercentBtn,
    duration: 0,
    ease: "none",
  });
  
  requestAnimationFrame(animateMarqueeBtn);
}
else{
  xPercentBtn = 0;
  gsap.to([firstBtn, secondBtn], {
    xPercent: 0,
    duration: 0,
    ease: "none",
  });

}
};


btnMarquee.addEventListener("mouseenter", () => {
  isHoveredBtn = true;
  animateMarqueeBtn();
});

btnMarquee.addEventListener("mouseleave", () => {
  isHoveredBtn = false;
});

btnMarquee.addEventListener("touchstart", () => {
  isHoveredBtn = true;
  animateMarqueeBtn();
});

btnMarquee.addEventListener("touchend", () => {
  isHoveredBtn = false;
});
