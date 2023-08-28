// const { sayName2 } = require("./commonJs_module2,js");

// const colors = ["red", "pink", "orange"];

// const sayHi = function () {
//   console.log("hi");
// };

// function sayName(name) {
//   console.log(`my name si` + name);
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getBornYear() {
//     return new Date().getFullYear() - this.age;
//   }
// }

// const p1 = new Person("amy", 20);
// console.log(p1.getBornYear());

// // 한번에 export 시키기 = 내보내기 작업!

// module.exports = {
//   colors,
//   sayName,
//   Person,
// };

// const colors = ["red", "pink", "orange"];

// const sayHi = function () {
//   console.log("hi");
// };

// function sayName(name) {
//   console.log(`my name is ` + name);
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getBornYear() {
//     return new Date().getFullYear() - this.age;
//   }
// }

// // const p1 = new Person("amy", 20);
// // console.log(p1.getBornYear());

const colors = ["red", "pink", "orange"];

const sayHi = function () {
  console.log("hi");
};

function sayName(name) {
  console.log(`my name is ` + name);
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getBornYear() {
    return new Date().getFullYear() - this.age;
  }
}

// 한번에 exports 시키기!!!! (내보내기!)
// 한 번에 내보낼 때에는 맨 밑에 작성해줍니다.
// object 내부에 내보낼 변수, 클래스, 함수의 이름만 작성
// 내부에서만 사용하는 변수나 함수는 exports 내부에 쓰지 않습니다.
module.exports = {
  colors,
  sayName,
  Person,
};
