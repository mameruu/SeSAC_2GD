gsap.from(".box1", {
  scrollTrigger: {
    trigger: ".box1",
    start: "top 80%",
    end: "100% 50%", //요소의 맨 밑과 화면의 중간 지점이 만난다면
    srub: 1,
    markers: true,
  },
  y: 800,
  opacity: 0,
});

gsap.from(".box2", {
  scrollTrigger: {
    trigger: ".box2",
    start: "top top",
    srub: 1,
    // markers: true,
  },
  rotate: 720,
  x: 500,
});

//timeline이랑 함께 써보기
const tl = gsap.timeline();
//scrollTrigger : animation 내부에 작성
// timeline이 도작하지 않습니다!
// 2개 이상의 요소에 애니메이션을 적용시킬 때는
// create() 매소드 사용 필수!
// tl.to(".circle1", {
//   scrollTrigger: {
//     trigger: "section", //스크롤 기준점
//     animation: tl, //타임라인
//     start: "top, top",
//     end: "bottom, 50%",
//     scrub: true,
//     markers: true,
//   },
//   scale: 2,
//   opacity: 0,
// }),
//   to(".circle2", {
//     scrollTrigger: {
//       trigger: "section", //스크롤 기준점
//       animation: tl, //타임라인
//       start: "top, top",
//       end: "bottom, 50%",
//       scrub: true,
//       markers: true,
//     },
//     scale: 2,
//     opacity: 0,
//   });

tl.to(".circle1", {
  scale: 2,
  opacity: 0,
})
  .to(".circle2", {
    scale: 2,
    opacity: 0,
  })
  .to(".circle3", {
    scale: 2,
    opacity: 0,
  });

scrollTrigger.create({
  trigger: "section", //스크롤 기준점
  animation: tl, //타임라인
  start: "top, top",
  end: "bottom, 50%",
  scrub: true,
  markers: true,
  pin: true,
});
