/*  if문
    if(조건식){
        조건식이 참일때 실행할 문장
    }*/

if (5 > 3) {
  console.log("yap");
}

let number = Number(prompt("숫자를 입력해 주세요"));
// 이건내가지어준이름  이건js에 저장된 함수
// console.log(typeof number);

/* if ~ else ...
 if(조건){
    조건이 참일때 실행할 문장}
else{
    조건이 거짓일 때 실행할 문장
}
*/

if (number > 10) {
  //   alert("10보다 큽니다");
  console.log("10보다큼");
} else {
  //   alert("10이거나, 10보다 작습니다.");
  console.log("10보다 작거나 같음");
}

/* */
if (number > 10) {
  console.log("10보다 큽니다.");
} else if (number === 10) {
  console.log("입력한 숫자가 10이네요");
} else {
  console.log("10보다 작은 수 입니다.");
}

// 성적 산출 프로그램 ---------
if (number > 90) {
  //같이쓰고싶으면 or로 연결.
  console.log("a");
} else if (number > 80) {
  console.log("b");
} else if (number > 70) {
  console.log("c");
} else if (number > 60) {
  console.log("d");
} else {
  console.log("f");
}

//--------실습--------

let age = Number(10);

if (age >= 20) {
  console.log("성인");
} else if (age >= 17) {
  console.log("고등학생");
} else if (age >= 14) {
  console.log("중학생");
} else if (age >= 8) {
  console.log("초딩");
} else if (age >= 0) {
  console.log("유아");
} else {
  console.log("음수값입니당.");
}
//(age>=0 && age <8)
// 음수값일때도 생각하기!!
//else{console.log("음수값입니다.")}

// if문 중첩

let userId = "user";
let userPw = "1234!";
function login() {
  let inputId = prompt("아이디를 입력해 주세요");
  let inputPw = prompt("패스워드를 입력해 주세요");

  if (userId === inputId) {
    if (userPw === inputPw) {
      alert("로그인 성공!!");
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  } else {
    alert("아이디가 틀렸습니다.");
  }
}

// login();
//함수로 만든 거라서 프롬포트 창을 보려면 호출을 해줘야함

//switch ~case ==========================

// switch(값){
//     case 1:
//         //값이 1 ㅇㅣ라ㅣ면 실행할 문장 써줌
//         break;
//     case "abcd":
//         // 값이 abcd라면 실행할 문장
//         break;

//     default;
//         //위의 case가 모두 일치하지 않을때 실행할 문장
//         break;
// }

let a = 4; //옵션+ 화살표 코드옮기기.
switch (a) {
  case 3:
    console.log("입력값이 4보다 작음");
    break;
  case 4:
    console.log("입력값이 4입니다.");
    break;
  case 5:
  case 6:
    console.log("a는 5입니다.");
    break;
  default:
    console.log("3,4,5가 아닙니다.");
    break;
}

let num = 5;
if (num % 2 === 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}

// 3항 연산자 !!=================
/* 조건 ? (조건이 참일 때)실행1:(조건이 거짓일 때)실행2
 */
let result = num % 2 === 1 ? "홀수" : "짝수";
console.log(result);

// 실습 ==========
let now = new Date().getHours() < 12 ? "오전" : "오후";
//0이 자정 12 오후

console.log(now);
