const { sayName2 } = require("./commonJs_module2,js");

const colors = ["red", "pink", "orange"];

const sayHi = function () {
  console.log("hi");
};

function sayName(name) {
  console.log(`my name si` + name);
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

const p1 = new Person("amy", 20);
console.log(p1.getBornYear());

// 한번에 export 시키기 = 내보내기 작업!

module.exports = {
  colors,
  sayName,
  Person,
};
