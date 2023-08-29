//이건 클래스 보는거니까 node class.js
// 오브젝트를 생성
/*
        속성
            만들어진 연도
            집의 이름
            창문의 갯수
        함수
            만들어진 연도를 콘솔창에 출력하는 "건물의 나이" 매소드를 만듬
            창문의 갯수를 콘솔창에 출력하는 함수
*/

class House {
  // constructor 라는 매소드가 필요함 안에는 넣어줄거 ㄱ
  constructor(year, name, window) {
    this.year = year;
    this.name = name; //하우스 클래스가 가질 이름을 name으로 들어올 놈으로 초기화 시켜줄거임! this.name 과 name 은 다르다!
    this.window = window;
  }

  getAge() {
    console.log(`${this.name}은 건축한지 ${2023 - this.year}년 지났어요.`);
  }

  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
  }
}

const house1 = new House(1789, "old", 1);
console.log(house1);
house1.getAge();
house1.getWindow();

const house2 = new House(2022, "자이", 10);
console.log(house2);
house2.getAge();
house2.getWindow();

console.log("----상속----");

/* 
    추가할 속성 
        층수 floor
        창문 제조없체 windowMaker

    추가할 함수
        aptInfo() 아파트 정보를 나타내는 매소드
*/
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    super(year, name, window); //상속 받은 것
    //새로 추가하는 것
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getAptInfo() {
    return `${this.year}에 지어진 ${this.name}.
        총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
  }

  /* overriding
  클래스를 만들어서 부모에게 상속 받았는데 똑같이 쓰고 싶지 않고 수정하고 싶을때 사용
    getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다.`); } 
    이걸 쓰고 싶긴 한디 더 추가시키고 싶을떄!
  */
  getWindow() {
    return `${this.name}아파트의 ${this.window}개의 창문은
            ${this.windowMaker}에서 만들었습빈다.`;
  }
}

const apt1 = new Apartment(2020, "raemian", 6, 19, "kcc");
console.log(apt1);
console.log(apt1.getAptInfo()); //리턴해서 콘솔로그 안에 넣어줘야함!
//상속받은 놈들도 아주 잘나온다 ^_^
apt1.getAge();
apt1.getWindow();

console.log(apt1.getWindow());

//실습2 shape 클래스 만들기 -------
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return `${this.width * this.height}`;
    //return this.width * this.height;
  }
}

let recl = new Shape(3, 4);
console.log(recl);
console.log(recl.getArea());

//실습3 클래스 상속(상속) ------

class Rectangle extends Shape {
  //   constructor(width, height)
  //속성 추가를 하지 않는다면 constructor로 따로 정의하지 않아도 ㄱㅊ
  getDiagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}
const Rectangle2 = new Rectangle(6, 8);
console.log(Rectangle2.getArea());
console.log(Rectangle2.getDiagonal());

class Triangle extends Shape {
  //overriding  필요
  //함수의 이름은 같지만 기능은 다르게 쓰고 싶을 떄
  getArea() {
    return (this.width * this.height) / 2;
  }
}
const Triangle1 = new Triangle(3, 4);
console.log(Triangle1.getArea());

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  // overriding
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}
const Circle1 = new Circle(1, 1, 5);
console.log(Circle1.getArea());
