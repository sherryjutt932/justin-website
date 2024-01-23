function managePriceTab(index) {
    if (isMobile()) {
      const pricingCards = document.querySelectorAll(".pricingCardCon .pricingCard");
  
      if (pricingCards) {
        pricingCards.forEach((card, i) => {
          if (index === (i+1)) {
            card.classList.add("open");
            card.classList.remove("close");
          } else {
            card.classList.remove("open");
            card.classList.add("close");
          }
        });
      }
    }
  }
  