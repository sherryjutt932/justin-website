let discoverMoreCurrentIndex = 0;
const discoverMoreCarousel = document.querySelector("#discoverMoreCarousel");
const discoverMoreCards = Array.from(discoverMoreCarousel.children);
const totaldiscoverMoreCards = discoverMoreCards.length;
const discoverMoreCardWidth = discoverMoreCards[0].offsetWidth + 20; // Adjusted to offsetWidth

if (isMobile()) {
  var discoverMoreSliderPosition = 0;

  discoverMoreCards.forEach((item) => {
    item.addEventListener("touchmove", (e) => {
      let mouseX = e.touches[0].clientX;
      let totalChange = discoverMoreSliderPosition - mouseX;

      if (totalChange > -100 && totalChange < 100) {
        gsap.to(discoverMoreCarousel, 0, {
          x: -totalChange,
        });
      }
    });
    item.addEventListener("touchstart", (e) => {
      let mouseX = e.touches[0].clientX;
      discoverMoreSliderPosition = mouseX;
    });
    item.addEventListener("touchend", (e) => {
      let mouseX = e.changedTouches[0].clientX;
      let totalChange = discoverMoreSliderPosition - mouseX;
      gsap.to(discoverMoreCarousel, 0.2, {
        x: 0,
      });
      if (totalChange > 100) {
        nextDiscoverMore();
      } else if (totalChange < -100) {
        prevDiscoverMore();
      }
      discoverMoreSliderPosition = 0;
    });
  });

  function nextDiscoverMore() {
    if (discoverMoreCurrentIndex < totaldiscoverMoreCards - 1) {
      discoverMoreCurrentIndex++;
      discoverMoreCards.forEach((card, index) => {
        card.style.transform = `translateX(-${
          discoverMoreCurrentIndex * discoverMoreCardWidth
        }px)`;
        // gsap.to(
        //   card,{
        //     x:()=>`-${discoverMoreCurrentIndex * width}px`,
        //   }
        // );
      });
    }
  }

  function prevDiscoverMore() {
    if (discoverMoreCurrentIndex > 0) {
      discoverMoreCurrentIndex--;
      discoverMoreCards.forEach((card, index) => {
        card.style.transform = `translateX(-${
          discoverMoreCurrentIndex * discoverMoreCardWidth
        }px)`;
        // gsap.to(
        //   card,{
        //     x:()=>`-${discoverMoreCurrentIndex * width}px`,
        //   }
        // );
      });
    }
  }
}
