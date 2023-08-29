// // console.log(colors[i]); -> 할수업다!
// // 내보낸다음 여기서 require를 해줘야 사용할 수 있음!

// const module1 = require("./commonJs_module");
// console.log(module1); // -> 여전히 안댐.ㅎ
// //-> package 파일 만들고 안에 ㅇㅇ common.js 형태로 해줘야 한다고 적어줘야댐요!
// console.log(module1.colors);

// const soojung = new module1.Person("수정", 20);
// console.log(soojung);

// const { sayName } = require("./commonJs_module"); // require 한건 맨 위에 모아서 쓰는 게 맞음!
// const { sayName2, sayhi2 } = require("./commonJs_module2,js");
// console.log(module1); //modue.~ 으로 접근하지 않고 그냥 sayName으로 접근해도 됨!

// sayName("allie"); //객체구조..분..할..(?) 할당

// // module1.sayHi();  // export 안해줘서 사용x

// sayName2("진형");
// sayhi2();

// 파일 전체를 받아와서 하나의 변수에 오브젝트로 저장하는 방법
// 파일 내부의 변수, 함수 등에 접근할 때는
// 오브젝트에 접근하는 것처럼 module1.변수, module1.함수로 접근
const module1 = require("./commonJs_module.js");
console.log(module1);
console.log(module1.colors);

const soojung = new module1.Person("수정", 20);
console.log(soojung);

// 객체의 구조분해 할당을 이용해서
// 점 접근이 아닌 함수나 변수에 바로 접근할 수 있습니다.
const { sayName } = require("./commonJs_module.js");
const { sayName2, sayhi2 } = require("./commonJs_module2.js");
sayName("allie");

sayName2("진형");
sayhi2();
/* 통상적으로 require은 맨 위에 한번에 몰아서 작성하는게 좋습니다!
 */
