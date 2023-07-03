/*
자바스크립트가 기본적으로 가지고 있는 객체
String, Number, Array, Date, Math, Object...
*/

// Date 객체
// 시간이나 날짜 정보를 얻을 때 사용합니다.
let now = new Date();
console.log(now);
console.log(now.getFullYear(), "년도");
console.log(now.getMonth(), "월"); //0~12(7월이묜6)
console.log(now.getDate(), "일"); //1~31
console.log(now.getHours(), "시"); //0(자정)~23
console.log(now.getMinutes(), "분");
console.log(now.getSeconds(), "초");
console.log(now.getMilliseconds(), "ms");
console.log(now.getDay(), "요일"); //0(일)~6(토)

//Date 객체를 이용해서 오늘 요일을 얻고,
// switch-case 문과 if문으로 오늘이 평일/주말인지 구별해보자

let today = new Date().getDate;
// today = today.getDay(); 이거
// console.log(today);     틀림

// if (today === 0) {
//   console.log("주말");
// } else if (today === 6) {
//   console.log("주말");
// } else {
//   console.log("평일");
// }

if (today === 0 || today === 6) {
  console.log("주말");
} else {
  console.log("평일");
}

//삼항연상자
console.log(today === 0 || today === 6 ? "주말" : "평일");

switch (today) {
  case 0:
  case 6:
    console.log("주말");
    break;
  default:
    console.log("평일");
    break;
}

// let now = new Date();
let past = new Date(2020, 1, 13);
// new Date(y,m,d,h,m,s);
// 시, 분, 초가 설정되지 않았을 때는 00:00:00
console.log(past);

// math
// 수학적인 상수나 함수
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

console.log(Math.max(100, -1, 30, 20, 5));
console.log(Math.min(100, -1, 30, 20, 5));

console.log(Math.ceil(5.1)); //정수로변경시켜줌 올림
console.log(Math.floor(5.1)); //내림
console.log(Math.round(5.6)); //반올림

//난수 생성 -> random number 난수란?걍 랜덤넘버다 무작위 수
// 0<= num <1
console.log(Math.random());

// 0<= <10
console.log(Math.random() * 10);
// 0.xxx ~ 9.xxxx
console.log(Math.floor(Math.random() * 10));

// 0<=  x <=10; 정수
// 0 <= x < 11
// 0.xxx ~ 10.xxx
console.log(Math.floor(Math.random() * 11));

//20<= x <=22; 정수
//20<= x < 23
//0 ~ 3     왼쪽값이 영이되면 오른쪽은 3이대니카.
//매쓰 랜덤은 기본적으로 0<= x<1
//양변에 3을 곱해줌 그러면 0<=x<3
console.log(Math.floor(Math.random() * 3) + 20);

const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Daejeon: "042",
  Busan: "051",
  Ulsan: "052",
  Daegu: "053",
  Gwangju: "062",
  Jeju: "064",
};

console.log(Object.keys(areaNum));
console.log(Object.values(areaNum));
