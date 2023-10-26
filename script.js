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
tl.to('.right-overlay',{
  left:'0%',
  duration:2,
  opacity:1
},'anem')
tl.to('.big-text',{
  right:'25%',
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

  stagger:.1,
  opacity:1
})

// *************** Page 3 *******************

// page3 card animation

function customCursor(){
  let cur = document.querySelector('#cursor')
  window.addEventListener('mousemove',(e)=>{
    cur.style.left = `${e.clientX}px`
    cur.style.top = `${e.clientY}px`
  })
}
customCursor()

function cardAnimation(){
  let elem = document.querySelectorAll('.elem')
  
  elem.forEach(function(item){
    // console.log(item.childNodes[5]);
    item.addEventListener('mousemove',function(dets){
      item.childNodes[5].style.left = `${dets.x}px`
      item.childNodes[5].style.opacity = `${1}`
      item.childNodes[5].style.scale = `${1.2}`
    })

    item.addEventListener('mouseleave',function(dets){
      item.childNodes[5].style.left = `${dets.x}px`
      item.childNodes[5].style.opacity = `${0}`
      item.childNodes[5].style.scale = `${0}`
    })
  })

  
}
cardAnimation()


// gsap page3

let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:'#page3',
    scroller:'#main',
    start:'0% 90%',
    end:'40% 50%',
    // markers:true,
    scrub:.1
  }
})
tl2.to('.heding-text>.m>h2',{
  y:-50,
  x:20,
  duration:.5,
  stagger:.1,
  opacity:1
},'anme')
tl2.to('.heding-text>.h>h2',{
  y:-50,
  x:-25,
  duration:.5,
  stagger:.1
},'anme')
tl2.to('.heding-text>.l>h2',{
  y:-50,
  x:20,
  duration:.5,
  stagger:.1
},'anme')

// *********** page4**********************

let tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:'#page4',
    scroller:'#main',
    start:'50% 90%',
    end:'50% 80%',
    // markers:true,
    scrub:4,
  }
})
tl3.to('#page4>h1',{
    top:'0%',
    duration:1,
},"mm")
tl3.to('.circle',{
  rotate:0,
  duration:1,
  ease:Expo.easeInOut,
  stagger:1,
  // opacity:0
})


let active = 2

let mini = document.querySelectorAll('.mncircle')
gsap.to(mini[active-1],{
  opacity:.8
})

let sec = document.querySelectorAll('.second')

gsap.to(sec[active-1],{
  opacity:.7
})

mini.forEach(function(val,idx){
  val.addEventListener('click',function(){
    gsap.to('.circle',{
      rotate:(2-(idx+1))*30,
      ease:Expo.easeInOut,
      duration:1
    })
    grayOut()
    gsap.to(this,{
      opacity:.7
    })
    gsap.to(sec[idx],{
      opacity:1
    })
  })
})


function grayOut(){
  gsap.to(mini,{
    opacity:.08
  })
  gsap.to(sec,{
    opacity:.4
  })
}

let link = document.querySelector('.second>p>a')
console.log(link);
link.addEventListener('click',()=>{
  link.style.backgroundColor = "yellow"
  alert('hello')
})

// *********** page3 animation ********************
let al = gsap.timeline({
  scrollTrigger:{
    trigger:'.inner-divs',
    scroller:'#main',
    start:'0% 0%',
    end:'bottom 0%',
    // markers:true,
    // scrub:1
  }
})
al.to('.inner-divs>.elem',{
  y:-50,
  duration:.2,
  stagger:.2,
  opacity:1

})

// ******************* page5 ****************************

let al2 = gsap.timeline({
  scrollTrigger:{
    trigger:'.wrapper-p5',
    scroller:'#main',
    start:'0% 80%',
    end:'0% 0%',
    // markers:true,
    scrub:5
  },
  duration:.1,
  stagger:.2,
})
al2.to('.img-log',{
  opacity:1
},'anime')
al2.to('.image-div-p5',{
  y:-30,  
  opacity:1
},'anime')
al2.to('.resume',{
  y:-30,
  opacity:1  
},'anime')
al2.to('.card',{
  y:-30, 
  opacity:1 
},'anime')
al2.to('h3',{
  y:-10, 
  opacity:1 
},'anime')

// ***************** pnada ************************

function handPAnda(){
  let wave = document.querySelector('.wave')
  let input = document.querySelector('#n-1')
  let lft_hand = document.querySelector('.hand-l')

  input.addEventListener('mouseenter',()=>{
    console.log('hello');
    wave.style.rotate = `${-160}deg`
    wave.style.top = `${12}%`
    lft_hand.style.opacity = 0
  })
  input.addEventListener('mouseleave',()=>{
    console.log('hello');
    wave.style.rotate = `${0}deg`
    wave.style.top = `${34}%`
    lft_hand.style.opacity = 1

  })
}
handPAnda()



// shery js

// Shery.mouseFollower({
//   //Parameters are optional.
//   skew: true,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });

// Shery.imageMasker(".mask-target" /* Element to target.*/, {
//   //Parameters are optional.
//   mouseFollower: true,
//   text: "Shery",
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });