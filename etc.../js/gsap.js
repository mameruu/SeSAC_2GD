let tl1 = gsap.timeline();
tl1
  .to(".cloud1", {
    scale: 1.5,
    opacity: 0,
    xPercent: 200,
  })
  .to(
    ".cloud2",
    {
      scael: 2,
      opacity: 0,
      xPercent: -100,
    },
    "<"
  )
  .to(".sun", {
    scale: 1.2,
    opacity: 0.5,
    xPercent: -600,
    yPercent: 300,
  });

ScrollTrigger.create({
  animation: tl1,
  trigger: ".section1",
  start: "top top",
  end: "bottom top",
  scrub: true,
  //   markers: true,
  pin: true,
  end: "+=5000",
});

//animation 적용할 요소가 하나뿐이기 때문에
//from 내부에 scrollTrigger 작성하도 됨.
let tl2 = gsap.timeline(); //해 떨어지는거 끝나고 해야하니까! 타임라인 또 만들어주기
tl2.from(".section2 div", {
  scrollTrigger: {
    animation: tl2,
    trigger: ".section2",
    start: "top top",
    end: "bottom 100%",
    end: "+=3000",
    scrub: 2,
    pin: true,
    markers: true,
  },
  rotate: 720,
  opacity: 0,
  scale: 0,
});
