// const perksSec = document.getElementById('perksSec');
// const perksRef = document.getElementById('perksRef');
// const perksRef2 = document.getElementById('perksRef2');

// var perksTimeline = gsap.timeline();

// const perkcards = Array.from(perksRef.children);
// const perkcards2 = Array.from(perksRef2.children);

// perksTimeline.staggerFromTo(
//     perkcards,
//     1, // duration
//     { y: 200, opacity:0  }, // from
//     { y: 0, opacity:1 }, // to
//     0.3, // stagger value (delay between each card)
//     "a" // label
//   ).staggerFromTo(
//     perkcards2,
//     1, // duration
//     { y: 200, opacity:0  }, // from
//     { y: 0, opacity:1 }, // to
//     0.3, // stagger value (delay between each card)
//     "+=1" // label
//   )

// ScrollTrigger.create({
//     trigger: perksSec,
//     start: "top 0%",
//     end: "+=300",
//     scrub: 1,
//     animation: perksTimeline,
//   });

const apath_perks_designboard =
  "./assets/Animation/Perks you'll love more/Design board/DesignBoard.json";
const apath_perks_fastdelivery =
  "./assets/Animation/Perks you'll love more/Fast Delivery/Fast_Delivery.json";
const apath_perks_scalableflexible =
  "./assets/Animation/Perks you'll love more/Scalable & flexable/Scalable_And_Flexable.json";
const apath_perks_completelyasync =
  "./assets/Animation/Perks you'll love more/Completely Async/Completely_Async.json";
const apath_perks_premiumquality =
  "./assets/Animation/Perks you'll love more/Premium Quality/Premium_Quality.json";
const apath_perks_fixedmonthlysalary =
  "./assets/Animation/Perks you'll love more/Fixed Monthy cost/FixedMonthlyCost.json";

const aicon_perks_designboard = "aicon-perks-designboard";
const aicon_perks_fastdelivery = "aicon-perks-fastdelivery";
const aicon_perks_scalableflexible = "aicon-perks-scalableflexible";
const aicon_perks_completelyasync = "aicon-perks-completelyasync";
const aicon_perks_premiumquality = "aicon-perks-premiumquality";
const aicon_perks_fixedmonthlysalary = "aicon-perks-fixedmonthlysalary";

setupAnimation(aicon_perks_designboard, apath_perks_designboard);
setupAnimation(aicon_perks_fastdelivery, apath_perks_fastdelivery);
setupAnimation(aicon_perks_scalableflexible, apath_perks_scalableflexible);
setupAnimation(aicon_perks_completelyasync, apath_perks_completelyasync);
setupAnimation(aicon_perks_premiumquality, apath_perks_premiumquality);
setupAnimation(aicon_perks_fixedmonthlysalary, apath_perks_fixedmonthlysalary);

const aicon_perks_mb_designboard = "aicon-perks-mb-designboard";
const aicon_perks_mb_fastdelivery = "aicon-perks-mb-fastdelivery";
const aicon_perks_mb_scalableflexible = "aicon-perks-mb-scalableflexible";
const aicon_perks_mb_completelyasync = "aicon-perks-mb-completelyasync";
const aicon_perks_mb_premiumquality = "aicon-perks-mb-premiumquality";
const aicon_perks_mb_fixedmonthlysalary = "aicon-perks-mb-fixedmonthlysalary";

setupAnimation(aicon_perks_mb_designboard, apath_perks_designboard);
setupAnimation(aicon_perks_mb_fastdelivery, apath_perks_fastdelivery);
setupAnimation(aicon_perks_mb_scalableflexible, apath_perks_scalableflexible);
setupAnimation(aicon_perks_mb_completelyasync, apath_perks_completelyasync);
setupAnimation(aicon_perks_mb_premiumquality, apath_perks_premiumquality);
setupAnimation(aicon_perks_mb_fixedmonthlysalary, apath_perks_fixedmonthlysalary);

let currentIndex = 0;
const perkCards = document.querySelectorAll(".perkCard-mb");
const perkCardsCont = document.querySelector("#perksRef");
const perksCarousel_Mobile = document.querySelector("#perksCarouselMobile");
const totalCards = perkCards.length;
const width = perkCards[0].offsetWidth + 20; // Adjusted to offsetWidth

var sliderPosition = 0;

Array.from(perkCards).forEach(item => {
  item.addEventListener("touchmove",(e)=>{
    let mouseX = e.touches[0].clientX;
    let totalChange = sliderPosition-mouseX;

      if(totalChange > -100 && totalChange<100){
        gsap.to(
          perksCarousel_Mobile,0,{
              x:-totalChange,
            }
          );
      };
  });
  item.addEventListener("touchstart",(e)=>{
    let mouseX = e.touches[0].clientX;
    sliderPosition = mouseX;
  });
  item.addEventListener("touchend",(e)=>{
    let mouseX = e.changedTouches[0].clientX;
    let totalChange = sliderPosition-mouseX;
    gsap.to(
      perksCarousel_Mobile,.2,{
          x:0,
        }
      );
    if(totalChange > 100){
      nextPerkCarousel();
    }
    else if(totalChange<-100){
      prevPerkCarousel();
    }
    sliderPosition = 0;
  });
});

function nextPerkCarousel() {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    perkCards.forEach((card, index) => {
      card.style.transform = `translateX(-${currentIndex * width}px)`;
      // gsap.to(
      //   card,{
      //     x:()=>`-${currentIndex * width}px`,
      //   }
      // );

    });
  }
}

function prevPerkCarousel() {
  if (currentIndex > 0) {
    currentIndex--;
    perkCards.forEach((card, index) => {
      card.style.transform = `translateX(-${currentIndex * width}px)`;
      // gsap.to(
      //   card,{
      //     x:()=>`-${currentIndex * width}px`,
      //   }
      // );
    });
  }
}


