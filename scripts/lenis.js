const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{

  if(isMobile()){
    lenis.raf(time * 600)
  }
  else{
    lenis.raf(time * 500)

  }
})

gsap.ticker.lagSmoothing(0)