// console.log(colors[i]); -> 할수업다!
// 내보낸다음 여기서 require를 해줘야 사용할 수 있음!

const module1 = require("./commonJs_module");
console.log(module1); // -> 여전히 안댐.ㅎ
//-> package 파일 만들고 안에 ㅇㅇ common.js 형태로 해줘야 한다고 적어줘야댐요!
console.log(module1.colors);

const soojung = new module1.Person("수정", 20);
console.log(soojung);

const { sayName } = require("./commonJs_module"); // require 한건 맨 위에 모아서 쓰는 게 맞음!
const { sayName2, sayhi2 } = require("./commonJs_module2,js");
console.log(module1); //modue.~ 으로 접근하지 않고 그냥 sayName으로 접근해도 됨!

sayName("allie"); //객체구조..분..할..(?) 할당

// module1.sayHi();  // export 안해줘서 사용x

sayName2("진형");
sayhi2();
