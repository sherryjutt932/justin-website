function managePriceTab(index) {
    if (isMobile()) {
      const pricingCards = document.querySelectorAll(".pricingCardCon .pricingCard");
  
      if (pricingCards) {
        pricingCards.forEach((card, i) => {
          card.classList.remove("open");
            card.classList.add("close");
          // if (index === (i+1)) {
          //   card.classList.add("open");
          //   card.classList.remove("close");
          // }
        });
        pricingCards[index -1].classList.remove("close");
        pricingCards[index -1].classList.add("open");
      }
    }
  }
  