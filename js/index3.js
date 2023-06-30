/* 변수
- var :재선언이 가능, 예기치 못한 값을 반환할 수 있음.
- let :재선언 불가능, 재할당 가능
- const :재선언 불가능, 재할당 불가능. 선언과동시에 초기화를 해야함 */

var name = "홍길동";
console.log(name);
var name = "나비";
console.log(name);

let a;
console.log(a);
a = 10;
console.log(a);
// let a = 5;

const b = 1;
// b = 12;   재선언 불가

let q = 10;
q - 5;
q = q - 5; //값을 변경하고 싶으면 재할당을 해야한다.
console.log(q);

/*연산자
산술연산자: + - / * 
대입연산자: =
비교연산자: == === != !=== < > <= >=
논리연산자: ! && ||
*/

console.log(1 == 1);
console.log(1 == "1");
console.log(1 != 1);

console.log(1 === "1");

console.log(1 <= 2);
console.log(1 >= 2);

//산술연산
console.log(1 + 1);
console.log(5 - 2);
console.log(5 * 3);
console.log(5 / 3);
console.log(5 % 3);

//논리연산자
console.log(!true);
console.log(!!true);
console.log(true || false);
console.log(true || false || false);
console.log(true && false);
console.log(true && true);
console.log((2 > 1 && -2 < 1) || 5 > 2);

//이거외울필요업음 걍 자바가이상한거래.그런가??
console.log("" == "0");
console.log(false == "hi");
console.log(false == "0");
console.log(0 == "0");
console.log("" == 0);
console.log(undefined == null);
