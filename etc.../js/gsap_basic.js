gsap.from(".circle1", {
  x: -500,
  duration: 3,
  backgroundColor: "green",
  yPercent: 100,
  rotation: 180,
  scale: 2,
  repeat: 3, //애니메이션을 3번 하는게 아니고 3회 추가하는것;
  yoyo: true,
  ease: "linear",
  ease: "bounce.inOut",
  ease: "power1.out",
});

const staggerAll = document.querySelectorAll(".stagger");
console.log(staggerAll);
//from, todml taget 으로는 배열 형태가 와도 됨.
gsap.from(staggerAll, {
  ease: "elastic",
  duration: 3,
  scale: 0.5,
  stagger: 0.5,
  repeat: -1,
});

staggerAll.forEach((circle) => {
  circle.addEventListener("click", () => {
    gsap.to(".stagger", {
      y: -100,
      opacity: 0,
      duration: 1,
    });
  });
});

// timeline 사용
// 연속적인 애니메이션을 만들기 위해서 사용

let tl = gsap.timeline();

// tl.to(".skyblue", {
//   x: 400,
//   duration: 2,
// });

// tl.to(".gray", {
//   x: 500,
//   duration: 2,
// });

// tl.to(".yellow", {
//   x: 600,
//   duration: 2,
// });

//타임라인에 이어서 쓰기.
tl.to(".skyblue", {
  x: 400,
  duration: 2,
})
  .to(
    ".gray",
    {
      x: 500,
      duration: 2,
    },
    "<" //하늘이랑 회색은 동시에 하고 노랑은 나중에 하고 싶을때! 꺽쇠사용.
  )
  .to(
    ".yellow",
    {
      x: 600,
      duration: 2,
    },
    "+=5"
  );

/* 
to/from 의 세번째 매개변수
- 2(숫자) : 전체 타임라인에 대해서 ~초 뒤에 시작한다는 의미
    (absolutely)
- "<" : 이전 움직인과 동시에 시작
- "+=2" :마지막에 끝난 움직임보다 ~ 초 뒤에 시작하겠다!
*/
