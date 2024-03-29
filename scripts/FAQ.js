// set top position for section before footer
function setStickyTop() {
  // var pos = Math.max(((document.getElementsByClassName("discoverMoreWrapper")[0].offsetHeight * (1)) - (60) - (window.innerHeight*0.5)) ,0);
  var discoverMoreWrapperElement = document.getElementsByClassName(
    "discoverMoreWrapper"
  )[0];
  var FAQGroupsElement = document.getElementById("FAQGroups");

  var pos = discoverMoreWrapperElement
    ? Math.max(
        discoverMoreWrapperElement.offsetHeight * 1 -
          60 -
          window.innerHeight * 0.5,
        0
      )
    : 0;

  setTimeout(() => {
    if (FAQGroupsElement) {
      FAQGroupsElement.style.top = -pos + "px";
    }
  }, 100);
}

// functions
function toggleFAQ(card, groupSelector) {
  var frequentlyAskedCon = card.closest(groupSelector);
  var parentGroup = card.closest(".questionsWrapper");

  if (frequentlyAskedCon) {
    var quesCards = frequentlyAskedCon.querySelectorAll(".quesCard");
    quesCards.forEach(function (quesCard) {
      if (quesCard !== card) {
        quesCard.classList.add("close");
        quesCard.classList.remove("open");
        quesCard.querySelector(".ques .pWrapper").style.maxHeight = "0px";
      }
    });
  }

  if (card.classList.contains("open")) {
    card.classList.remove("open");
    card.classList.add("close");
    card.querySelector(".ques .pWrapper").style.maxHeight = "0px";
  } else {
    card.classList.remove("close");
    card.classList.add("open");
    card.querySelector(".ques .pWrapper").style.maxHeight =
      card.querySelector(".ques .pWrapper p").offsetHeight + "px";
  }

  setTimeout(() => {
  parentGroup.style.maxHeight = parentGroup.querySelector(".questions").offsetHeight + "px";
  }, 310);
}

function toggleFAQGroup(button, groupSelector) {
  var frequentlyAskedCon = button.closest(groupSelector);
  var quesCardGroupss = document.querySelectorAll(".FAQGroup");
  
  // if (frequentlyAskedCon) {
  //   quesCardGroupss.forEach(function (quesCardGroup) {
  //     if (quesCardGroup !== frequentlyAskedCon) {
  //       quesCardGroup.classList.add("close");
  //       quesCardGroup.classList.remove("open");
  //   frequentlyAskedCon.querySelector(".questionsWrapper").style.maxHeight = "0px";
        
  //     }
  //   });
  // }

  if (frequentlyAskedCon.classList.contains("open")) {
    frequentlyAskedCon.classList.remove("open");
    frequentlyAskedCon.classList.add("close");
    frequentlyAskedCon.querySelector(".questionsWrapper").style.maxHeight = "0px";
  } else {
    frequentlyAskedCon.classList.remove("close");
    frequentlyAskedCon.classList.add("open");
    frequentlyAskedCon.querySelector(".questionsWrapper").style.maxHeight = frequentlyAskedCon.querySelector(".questions").offsetHeight + "px";
  }
}

if (!isMobile()) {
  function scrollToElement(elementId, button) {
    var element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({});
    }

    var frequentlyAskedCon = button.closest(".FAQMenu");

    if (frequentlyAskedCon) {
      var buttons = frequentlyAskedCon.querySelectorAll("button");
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });
    }

    if (button) {
      button.classList.add("active");
    }
  }

  function updateActiveSection() {
    var sections = document.querySelectorAll(".FAQGroup");
    var buttons = document.querySelectorAll(".FAQMenu button");

    if (buttons && sections) {
      sections.forEach(function (section, index) {
        var rect = section.getBoundingClientRect();
        var offset = window.innerHeight / 2;

        if (rect.top < offset && rect.bottom > offset) {
          // Remove "active" class from all buttons
          buttons.forEach(function (btn) {
            btn && btn.classList.remove("active");
          });

          // Add "active" class to the corresponding button
          buttons[index] && buttons[index].classList.add("active");
        }
      });
    }
  }

  // Attach scroll event listener to update the active section on scroll
  window.addEventListener("scroll", updateActiveSection);

  // Initial update to set the active section when the page loads
  updateActiveSection();
}
