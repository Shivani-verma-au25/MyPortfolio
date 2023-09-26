function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  }
  loco()

// ******* gsap **************
gsap.to('nav',{
  y:10,
  duration:1,
  stagger:.25,
  opacity:1
})
// gsap.to('nav',{
//   y:10,
//   duration:1,
//   stagger:.25,
//   opacity:1
// })

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:'#page1',
    scroller:'#main',
    start:'0% 0%',
    end:'100% 0%',
    pin:true,
    // markers:true,
    scrub:.1
  }
})
tl.to('.overlay',{
  left:'0%',
  duration:2,
},'anem')

tl.to('.overlay>img',{
  left:'60%',
  duration:2,
  opacity:1
},'anem')
tl.to('.big-text',{
  right:'35%',
  duration:2,
  zIndex:3,
  color:'#fff'
  // opacity:1
},'anem')
tl.to('.icons',{
  color:'#fff'
  // opacity:1
},'anem')



// *************** page 2******************

let tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:'#page2',
    scroller:'#main',
    start:'0% 0%',
    end:'250% 0%',
    // markers:true,
    scrub:1,
    pin:true
  }
})
tl1.to('.inner-wrap-right>h1',{
  top:'0%',
  left:'20%',
  duration:1,
},'ttm')
tl1.to('.image-div-p2>img',{
  width:'100%',
  duration:.1,
},'ttm')
tl1.to('.wrap-p2',{
  y:-30,

  satgger:.1,
  opacity:1
})


// let tl2 = gsap.timeline('#page2',{
//   scrollTrigger:{
//     trigger:'#page2',
//     scroller:'#main',
//     start:'-30% 0%',
//     end:'100% 0%',
//     markers:true,
//     scrub:3
//   }
// })
// tl2.from('.skill-top',{
//   y:-100,
//   duration:1,
//   stagger:.15
// })