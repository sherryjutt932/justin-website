const animimages = document.getElementsByClassName("animimage");

Array.from(animimages).forEach((image) => {
  image.addEventListener("mouseover", handleImageEnter);
  image.addEventListener("mousemove", handleImageHover);
  image.addEventListener("mouseout", handleImageLeave);
});

// Function for mouse enter
function handleImageEnter(e) {
  gsap.to(e.currentTarget.querySelector('.photo'), 0.5, { scale: 1.05, ease: "ease" });
  // e.currentTarget.style.transform = "scale(" + 1.1 + ")";
}

// Function for mouse leave
function handleImageLeave(e) {
  gsap.to(e.currentTarget.querySelector('.photo'), .5, {
      scale: 1,
      ease: "ease",
    });

  //e.currentTarget.style.transform = "scale(1)";
}

function handleImageHover(e) {
  let offsetX = e.clientX - e.currentTarget.getBoundingClientRect().left;
  let offsetY = e.clientY - e.currentTarget.getBoundingClientRect().top;
  let originX = (offsetX / e.currentTarget.offsetWidth) * 100;
  let originY = (offsetY / e.currentTarget.offsetHeight) * 100;

  gsap.to(e.currentTarget.querySelector('.photo'), 0.5, {
    transformOrigin: `${originX}% ${originY}%`,
    scale: 1.05,
    ease: "ease",
  });
//   e.currentTarget.style.transformOrigin = originX + "% " + originY + "%";
}
