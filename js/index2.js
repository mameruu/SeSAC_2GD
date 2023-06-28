console.log("안녕하세요");
// alert("안녕하세요!");
// confirm("js재밋지않나요");
// prompt("당신의 이름은?");

let myName = "정윤 하이루";
let mycity = "seoul";

let myinfo1 = "내 이름은 " + myName + " 이고요 사는 곳은 " + mycity + " 입니당";
let myinfo2 = `내 이름은 ${myName} 이고요 사는 곳은 ${mycity} 입니당`;
//쉼표를 이용해서 문자열을 연결하는 것은 안됩니다!!
console.log(myName);

// 내이름은 정윤이고요 사는 곳은 서울입니당
console.log("내 이름은", myName, "이고요 사는 곳은", mycity, "입니당");
console.log("내 이름은 " + myName + " 이고요 사는 곳은 " + mycity + " 입니당");
// ,사용할때는 띄어쓰기 변수랑 문자열 사이에 띄어쓰기
// 자동으로 들어가는데 +일떄는 자동으로 안 들어가서 내가 직접 해줘야함!!
console.log(`내 이름은 ${myName} 이고요 사는 곳은 ${mycity} 입니당`);
//백틱임!!!! 작은 따옴표 아니다 ㄱ-

console.log(myinfo1);
console.log(myinfo2);

// 2. number
//넘버형은 연산 가능

let num1 = 100;
let num2 = 3.14;
console.log(num1 + num2);
console.log(myName + num1); //숫자와 문자열의 덧셈 =숫자가 문자열 취급되어 연결
console.log(myName - num1); //숫자와 문자열의 뺄셈 = NaN(not a number)

// 3. boolean
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

// 4. undefined & null

let undef;
console.log(undef);
let empty = null;
console.log(empty);

// 5. array (배열)
let fruit = ["orange", "kiwi", "mango", "apple"];
let fruit2 = new Array("orange", "kiwi", "mango", "apple");
console.log(fruit);
console.log(fruit2);

console.log(fruit[2]);

//2차원배열 배열 안에 배열이 있다!!!
let kr = [
  ["가", "나", "다"],
  ["갸", "냐", "댜"],
  ["거", "너", "더"],
];
console.log(kr[0][1]);
console.log(kr[2][2]);

//과제: 아이스크림 뽑기
const letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);
console.log(
  letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2]
);

// 6. object
// 배열은 순서가 있는 반면에 오브젝트는 키-값 형태로 저장, 키의 이름으로 접근!

let cat = {
  name: "nabi",
  age: 1,
  isCute: true,
};

console.log(cat);
// 점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);

// 대괄호 표기법
console.log(cat["age"]);
console.log(cat["name"]);
console.log(cat["isCute"]);

cat.name = "딸랑이";
console.log(cat);

cat["gender"] = "f";
console.log(cat);

cat["parant"] = ["mom", "dad"]; //배열안에 오브젝트, 오브젝트안에 배열 둘다 가능.
console.log(cat);
console.log(cat.parant[0]);

//나를 옵젝으로 만들어서 소개하기

let me = {
  name1: "정윤",
  hair: "단발",
};

console.log(me);

me.like = "치킨";
console.log(me);

me["like2"] = "game";
console.log(me["like2"]);

console.log("-----typeof------");
let und;
console.log(typeof "문자");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof {}); //오브젝트를 나타내는 중괄호 씀
console.log(typeof []);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof und);
console.log(typeof function () {});
let likeNub = prompt("가장 좋아하는 숫자는?");
console.log(typeof likeNub); //나는 걍 숫자 썻지만 프롬포트는 항상 문자로 저장이 된다!!! 그래서 string나옴
console.log(likeNub + 10); //문자로 들어오기 때문에 더해지는 것이 아닌 걍 뒤에 붙여줌요 ㅋㅋ

// 형 변환
// Number(likeNub); //이거 쓴다고 바로대는거아님. 이때만 적용대는거라 이걸 다시 또 넣어줘야함
// likeNub = Number(likeNub); //바로 이렇게 넣어준다앙ㅋㅋ
// console.log(likeNub + 10);

//재 밋 따.
// 재 밋 다 재 밋 다 제 밋 다.

// 1. >>문자
let str1 = true;
let str2 = Number;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));

console.log(typeof str1.toString());

// 2. >>숫자

let n1 = true; //bolean
let n2 = false; //bolean
let n4 = "3.14"; //string

console.log(typeof Number(n1)); // true > 1
console.log(typeof Number(n2)); // false > 2

console.log(typeof Number(n4)); //3.14
console.log(Number(n4)); //3.14
console.log(typeof parseInt(n4)); //3
console.log(parseInt(n4)); //3

//실습1
let sil1 = "숫자로만들거야";
let sil2 = 123;

console.log(
  typeof Number(sil1) + " isn't " + typeof String(sil2) + " data type"
);

//실습2

let mathScore = prompt("수학점수");
let engScore = prompt("영어점수");
mathScore = Number(mathScore);
engScore = Number(engScore);
avgScore = (mathScore + engScore) / 2;
console.log(avgScore);
