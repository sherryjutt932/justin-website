const aboutRef = document.getElementById("aboutRef");
const aboutSec = document.getElementById("aboutSec");
const stericRef = document.getElementById("stericRef");
var paddingsize = (window.innerWidth>1536)?240:110;
//GSAP animation for the horizontal scrolling
var aboutusTl = gsap.timeline();

const apath_crafting = './assets/Animation/ABOUT US SECTION/Crafting/Crafting.json';
    const apath_products = './assets/Animation/ABOUT US SECTION/Digital Production/DigitalProduction.json';
    const apath_care = './assets/Animation/ABOUT US SECTION/Care/Care.json';
    const apath_portfolio = './assets/Animation/ABOUT US SECTION/portfolio/portfolio.json';
  
    const apath_mob_crafting = './assets/Animation/ABOUT US SECTION/Crafting/Crafting.json';
    const apath_mob_products = './assets/Animation/ABOUT US SECTION/Digital Production/DigitalProduction.json';
    const apath_mob_care = './assets/Animation/ABOUT US SECTION/Care/Care.json';
    const apath_mob_portfolio = './assets/Animation/ABOUT US SECTION/portfolio/portfolio.json';

    const aicon_crafting = 'aicon-crafting';
    const aicon_products = 'aicon-products';
    const aicon_care = 'aicon-care';
    const aicon_portfolio = 'aicon-portfolio';

    const aicon_mb_crafting = 'aicon-mb-crafting';
    const aicon_mb_products = 'aicon-mb-products';
    const aicon_mb_care = 'aicon-mb-care';
    const aicon_mb_portfolio = 'aicon-mb-portfolio';

    setupAnimation(aicon_crafting, apath_crafting);
    setupAnimation(aicon_products, apath_products);
    setupAnimation(aicon_care, apath_care);
    setupAnimation(aicon_portfolio, apath_portfolio);

    setupAnimation(aicon_mb_crafting, apath_mob_crafting);
    setupAnimation(aicon_mb_products, apath_mob_products);
    setupAnimation(aicon_mb_care, apath_mob_care);
    setupAnimation(aicon_mb_portfolio, apath_mob_portfolio);

if (!isMobile()) {
 let xposition =  aboutRef.offsetWidth - (window.innerWidth - (paddingsize+126));
  aboutusTl.to(
      aboutRef,
      {
        x: -xposition + "px",
        ease: "none",
      },
      "a"
    )
    .to(
      stericRef,
      {
        rotation: 720,
        ease: "linear",
      },
      "a"
    );
    
    ScrollTrigger.create({
      trigger: aboutSec,
      start: "top top",
      end: () => "+=" + aboutSec.offsetWidth * 1.5,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      animation: aboutusTl,
      // pin:true,
    });
}
else{
  aboutusTl.to(
      stericRef,
      {
        rotation: 500,
        ease: "linear",
      },
      "a"
    );
    
    ScrollTrigger.create({
      trigger: aboutSec,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      animation: aboutusTl,
    });
}



// ------------------mobile floating

const about_icon_float = document.getElementsByClassName("about-icon-float");

const animateabouticonlist = () => {
  if(about_icon_float[0]){
    gsap.timeline().to(
      [about_icon_float[0],about_icon_float[2]],3,
      //
      {
        y:process_scrollDir === "down" ? 10 : -10,
      }
      ,"a"
    )
    .to(
      [about_icon_float[1],about_icon_float[3]],3,
      //
      {
        y:process_scrollDir === "down" ? -0 : 40,
      }
      ,"a"
    )
  }
  
  requestAnimationFrame(animateabouticonlist);
};

animateabouticonlist();