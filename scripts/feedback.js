
const feedbackSec = document.getElementById("feedbackSec");

var feedbackanim = gsap.timeline();
// feedbackanim.fromTo(
//     "#bbbbbb",
//     {x:100,
//     },
//     {
//       x:0,
//     },
//     "a"
//   );

// ScrollTrigger.create({
//     trigger: feedbackSec,
//     start: "top top",
//     pin:true,
//     pinSpacing:false,
//     scrub: 1,
//     animation:feedbackanim,
//   });


// const carousel = document.querySelector(".carousel");
// const slider = carousel.querySelector(".carousel_track");
// var slides = [...slider.children];


function setTablet(ind) {
     // Get all cards
  const carRoles = document.querySelectorAll('.carouselrole');
  // Get all cards
  const carNames = document.querySelectorAll('.carouselname');

  carRoles.forEach(item => {
    item.classList.remove('active');
  });
  carNames.forEach(item => {
    item.classList.remove('active');
  });
  
  carRoles.forEach(item => {
   // Compare to the converted ind value
   if (parseInt(item.dataset.index) === ind) {
     item.classList.add('active');
   }
 });
  carNames.forEach(item => {
   // Compare to the converted ind value
   if (parseInt(item.dataset.index) === ind) {
     item.classList.add('active');
   }
 });
}

const FeedbackCards = document.querySelectorAll(".carousel");
const FeedbackCardsTotal = FeedbackCards.length;
const FeedbackCardwidth = FeedbackCards[0].offsetWidth ; // Adjusted to offsetWidth

function nextButtonClick() {
  let carouselNumber = document.getElementById("carouselNumber");

  let ind = carouselNumber.dataset.index;
    let newind = (parseInt(ind) + 1) % FeedbackCardsTotal;
  
    carouselNumber.dataset.index = newind;
    carouselNumber.innerHTML = "0" + (newind + 1);

  setTablet(newind);
  console.log(ind,newind)

  if (newind < FeedbackCardsTotal ) {
    FeedbackCards.forEach((card, index) => {
      card.style.transform = `translateX(-${newind * FeedbackCardwidth}px)`;
    });
  }

}

function prevButtonClick() {
    let carouselNumber = document.getElementById("carouselNumber");

  let ind = carouselNumber.dataset.index;
  let newind = (ind <= 0) ? (FeedbackCardsTotal-1) : (parseInt(ind) - 1);

  carouselNumber.dataset.index = newind;
  carouselNumber.innerHTML = "0" + (newind + 1);

  setTablet(newind);

  console.log(ind,newind)

  if (newind >= 0) {
    FeedbackCards.forEach((card, index) => {
      card.style.transform = `translateX(-${newind * FeedbackCardwidth}px)`;
    });
  }
}



// gsap.set(".carousel", {
//   xPercent: function (i) {
//     return i * 100;
//   },
// });

// function wrap(value, min, max) {
//   var v = value - min;
//   var r = max - min;

//   return ((r + (v % r)) % r) + min;
// }




// -----------------


// const feedbackSec = document.getElementById("feedbackSec");

// var feedbackanim = gsap.timeline();
// feedbackanim.fromTo(
//     "#bbbbbb",
//     {x:100,
//     },
//     {
//       x:0,
//     },
//     "a"
//   );

// ScrollTrigger.create({
//     trigger: feedbackSec,
//     start: "top top",
//     pin:true,
//     pinSpacing:false,
//     scrub: 1,
//     animation:feedbackanim,
//   });


// const carousel = document.querySelector(".carousel");
// const slider = carousel.querySelector(".carousel_track");
// var slides = [...slider.children];


// function setTablet(ind) {
//      // Get all cards
//   const carRoles = document.querySelectorAll('.carouselrole');
//   // Get all cards
//   const carNames = document.querySelectorAll('.carouselname');

//   carRoles.forEach(item => {
//     item.classList.remove('active');
//   });
//   carNames.forEach(item => {
//     item.classList.remove('active');
//   });
  
//   carRoles.forEach(item => {
//    // Compare to the converted ind value
//    if (parseInt(item.dataset.index) === ind) {
//      item.classList.add('active');
//    }
//  });
//   carNames.forEach(item => {
//    // Compare to the converted ind value
//    if (parseInt(item.dataset.index) === ind) {
//      item.classList.add('active');
//    }
//  });
// }

// function prevButtonClick() {
//   let carouselNumber = document.getElementById("carouselNumber");

//   var ind = carouselNumber.dataset.index;
//   var newind = (ind <= 0) ? 4 : (parseInt(ind) - 1);

//   carouselNumber.dataset.index = newind;
//   carouselNumber.innerHTML = "0" + (newind + 1);

//   setTablet(newind);

//   gsap.to(".carousel", 0.3, {
//     xPercent: -newind * 100, // Use the newind to determine the position
//     ease: Linear.easeNone,
//     modifiers: {
//       xPercent: function (x) {
//         return `${wrap(parseInt(x), -200, 300)}`;
//       },
//     },
//   });
// }



// function nextButtonClick() {
//   let carouselNumber = document.getElementById("carouselNumber");

//   var ind = carouselNumber.dataset.index;
//   var newind = (parseInt(ind) + 1) % 5;

//   carouselNumber.dataset.index = newind;
//   carouselNumber.innerHTML = "0" + (newind + 1);

//   setTablet(newind);

//   gsap.to(".carousel", 0.3, {
//     xPercent: -newind * 100, // Use the newind to determine the position
//     ease: Linear.easeNone,
//     modifiers: {
//       xPercent: function (x) {
//         return `${wrap(parseInt(x), -200, 300)}`;
//       },
//     },
//   });
// }



// gsap.set(".carousel", {
//   xPercent: function (i) {
//     return i * 100;
//   },
// });

// function wrap(value, min, max) {
//   var v = value - min;
//   var r = max - min;

//   return ((r + (v % r)) % r) + min;
// }

