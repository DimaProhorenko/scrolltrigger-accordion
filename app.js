gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


/*------------------------------
Init ScrollSmoother
------------------------------*/
const scrollerSmoother = ScrollSmoother.create({
  content: '#scroll-content',
  wrapper: '#scroll-wrapper',
  smooth: 1,
  effects: false,
  normalizeScroll: true
})

const els = document.querySelectorAll('.accordion');

els.forEach(el => {
    
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.accordion-wrapper',
        top: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: 1,
        ease: 'linear'
    }
});

tl.to('.accordion__body', {
    height: 0,
    opacity: 0,
    stagger: 0.5
})