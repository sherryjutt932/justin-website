const parallexImage = document.getElementsByClassName("parallexImage");

Array.from(parallexImage).forEach((element) => {
  gsap.fromTo(
    element,
    {
      yPercent: -20,
      scale: 1.4,
    },
    {
      yPercent: 20,
      scale: 1.4,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );
});

var customScroll = document.querySelector(".jdBody-table-wrapper .body");

if (customScroll) {
  customScroll.addEventListener("wheel", function (event) {
    event.preventDefault();
    customScroll.scrollTop += event.deltaY;
    event.stopPropagation(); 
  });
}


const jdBodyButtons = document.querySelectorAll(".jdBody-table-wrapper .body > a");
const jdBodySections = document.querySelectorAll(".jdBody-content .content-item");

jdBodyButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    jdBodyButtons.forEach((btn) => {
      if (btn === button) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  });
});

function updateActiveSection() {

    if (jdBodyButtons && jdBodySections) {
        jdBodySections.forEach(function (section, index) {
        var rect = section.getBoundingClientRect();
        var offset = window.innerHeight / 2;

        if (rect.top < offset && rect.bottom > offset) {
          // Remove "active" class from all buttons
          jdBodyButtons.forEach(function (btn) {
            btn && btn.classList.remove("active");
          });

          // Add "active" class to the corresponding button
          jdBodyButtons[index] && jdBodyButtons[index].classList.add("active");
        }
      });
    }
  }


// update active section

window.addEventListener("scroll", updateActiveSection);

  // Initial update to set the active section when the page loads
  updateActiveSection();