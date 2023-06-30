// 함수 선언문
// function 함수이름(매개변수){함수내용};
// 함수이름은 camel case를 이용해주세여
helloWordl1();
console.log("-----");
function helloWordl1() {
  console.log("helloWordl1");
}

helloWordl1(); //함수호출

function helloWordl2() {
  return "helloWorld2";
}
//return
// -함수의 반환 값. 함수 내부 코드의 '최종값'
console.log(helloWordl2());

function add(num1, num2) {
  console.log(num1 + num2);
}
add(5, 10);

function add2(num1, num2) {
  console.log("여기만 실행됩니다.");
  return num1 + num2;
  console.log("여기는 실행되지 않아요");
}

add2(3, 2);

//helloWorld3
//함수 표현식은 선언 이후에 호출해줘야합니다.

//함수표현식
const helloWordl3 = function () {
  console.log("helloWorld3");
};
helloWordl3();

// const helloWordl4 = function(){
//     return "helloWorld4"
// };
//화살표함수 이세키도 호머시기안댐.

const helloWordl4 = () => {
  return "helloWorld4";
};

console.log(helloWordl4());

// 매개변수가 있는 함수

function sayHello1(name) {
  //여기서 text는 매개변수의 이름!
  return "안녕하세요" + name + "님";
}

console.log(sayHello1("정윤"));

function sayHello2(text, name) {
  console.log(`${text}!!${name}님`); //백틱사용!!!!!
}
let 안녕 = "안녕하세요";
sayHello2(안녕, "정윤");

let sayHello3 = (text, name) => {
  console.log(`${text}!!${name}님`);
};

let 하이 = "하이룽";
sayHello3(하이, "정윤");

//=========실습==============
function multifly(num1, num2) {
  return num1 * num2;
}
//콘솔로그로 2*2 출력하고 리턴을 100을 하면 계속 100값이 뽑힘.
//씨언어처럼 리턴이 맞음ㅇㅇ.콘솔로그는 우리가 콘솔창에서 보려고 콘솔로그 쓰는거임!

console.log(multifly(3, 7));
console.log(multifly(2, 2));

function square(num) {
  console.log(num ** 2); //이게 num3의 2승!
  //console.log(num * num);
}

square(4);
square(11);
square(5);
