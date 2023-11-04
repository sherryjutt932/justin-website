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
    
const anim_perks_designboard = setupAnimation(
  aicon_perks_designboard,
  apath_perks_designboard
);
const anim_perks_fastdelivery = setupAnimation(
  aicon_perks_fastdelivery,
  apath_perks_fastdelivery
);
const anim_perks_scalableflexible = setupAnimation(
  aicon_perks_scalableflexible,
  apath_perks_scalableflexible
);
const anim_perks_completelyasync = setupAnimation(
  aicon_perks_completelyasync,
  apath_perks_completelyasync
);
const anim_perks_premiumquality = setupAnimation(
  aicon_perks_premiumquality,
  apath_perks_premiumquality
);
const anim_perks_fixedmonthlysalary = setupAnimation(
  aicon_perks_fixedmonthlysalary,
  apath_perks_fixedmonthlysalary
);

