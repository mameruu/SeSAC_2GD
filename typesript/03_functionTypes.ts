function print(a: number, b: number) {
  console.log(a);
  console.log(b);
}

print(1, 2);
// print(1, 2, 3);  ->  에러
// print(1);        ->  에러

function print2(a: number, b?: number, c?: number): void {
  console.log("---------------");
  console.log(a);
  console.log(b);
  console.log(c);
}

print2(1, 2, 3);
print2(1, 2);
print2(1);

function print3(a: number, b: number, c = 5): void {
  console.log("--print3");
  console.log(a);
  console.log(b);
  console.log(c);
}

print3(1, 2);
print3(1, 2, 3);

function sayHello(): void {
  console.log("안녕");
}

// void 외에 다른 리턴 타입
// string
function concatStr(a: string, b: string): string {
  return a + b;
}
console.log(concatStr("안녕", "하세요"));

//number
function circleArea(r: number): number {
  return r * r * Math.PI;
}

const squareArea = (a: number, b: number): number => {
  return a * b;
};

const triagleArea = (w: string, h: string) => (Number(w) * Number(h)) / 2;

console.log("원의 넓이: " + circleArea(10));
console.log("사각형의 넓이: " + squareArea(3, 4));
console.log(`삼각형의 넓이: ${triagleArea("3", "4")}`);

interface Great {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const jh: Great = {
  name: "allie",
  hi() {
    return "hi my name si + this.name";
    // stiring은 returnㅇ ㅣ 필요하다
  },
  bye(a) {
    return `작별인사를 ${a}번 했습니다.`;
  },
};
console.log(jh.hi());
console.log(jh.bye(5));

//never
function goingon(a: number): never {
  while (true) {
    console.log("go");
  }
}

// 실습문제 1
// 두개의 수를 매개변수로 받고 합을 콘솔로그로 출력하는 함수 만들기
function sum1(a: number, b: number) {
  console.log(a + b);
}

// 실습문제 2
// 매개변수를 숫자로 받고, 전개연산자를 이용 -> 매개변수 개수가 상관이 없음
// 매개변수로 받은 인자의 모든 합을 return
function sum2(...num: number[]): number {
  let sum = 0;
  // num = [1,2,3,4,5]
  // num 사실은 배열
  num.forEach((el) => (sum += el));
  return sum;
}

console.log(sum2(1, 2, 3, 4, 5, 10));

/*  
오버로딩
오버라이딩 vs 오버로딩
1. 오버라이딩 overriding
    - 클래스의 상속에서의 개념
    - 하위 클래스가 상위 클래스에게 상속 받을 때, 메소드를 재성의 하는 방법
    - 상위 클래스와 같은 이름의 메소드를 사용하지만 다른 내용으로 사용 가능하다.
2. 오버 로딩 overroading
    - 함수에서 매개변수의 갯수와 타입이 다를 수 있음
    - 함수의 리턴 타입이 다를 수 있음
    - 같은 이름으로 매개변수의 종류와 개수를 다르게 선언할 수 있음.
    (비슷한 기능일 때만 사용 가능)
*/

// function add(x: number | string, y: number | string): number | string {
//   return x + y;   -> 안됨!
// }

function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any) {
  return x + y;
}

console.log(add("h", "i"));
console.log(add(1, 2));
