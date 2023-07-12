const slide = gsap.timeline();

slide
  .from(".yellowgreen", {
    xPercent: -100,
  })
  .from(".hotpink", {
    yPercent: 100,
  })
  .from(".gold", {
    xPercent: 100,
  });

ScrollTrigger.create({
  animation: slide,
  trigger: "main",
  makers: true,
  start: "top top",
  pin: true,
  scrub: 2,
  end: "+=4000", //스크롤 길이 설정
});
