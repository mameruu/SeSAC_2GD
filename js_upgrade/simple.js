//이건 클래스 보는거니까 node simple.js
//전개연산자 ... 사용해보기
//1-1. 배열에 접근하기

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c"];
console.log(arr1);
console.log(arr2);

for (let el of arr1) {
  console.log(el);
}

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}
console.log(...arr1);
console.log(...arr2);
console.log(...[2, 3, 4]); //전개연산자

const arr3 = arr1.concat(arr2); // 이어주는 매소드 =concat
const arr4 = [...arr1, "전개연산자를 쓰면 중간에 추가할 수 있어요", ...arr2];
console.log(arr3);
console.log(arr4);

//배열뿐만 아니라 오브젝트와 문자열도 접근가능!!

//1-2. 문자열에 접근하기

const str = "alliehigh"; // -> ["a","l","l"..] 이렇게 문자열을 배열 하나하나로 저장할거다!
let strToArr = str.split(""); // ()안을 기준으로 쪼개주는데 아무것도 안넣으면 하나하나씩 해줌
let strToArr2 = [...str]; //("")이거랑 같은 값을 뽑아내는 거라 다른 기준없이 배열 하나하나로 저장할때는 이게 더 나을 수 있음
console.log(strToArr);

/* 
split('') : string to arr (split의 매개변수로 들어가는 문자열을 기준으로 배열로 변경) 문자열-> 배열
join() : arr to string (split과 반대!) 배열 -> 문자열
*/

console.log(str);
for (let el of str) {
  console.log(el); // 문자열도 배열처럼 접근 가능
}

// 1-3. 오브젝트에 전개연산자 사용하기

let me1 = {
  name: "allie",
  height: 163,
  married: false,
  friend: null,
};

let me2 = {
  name: "진형",
  like: ["sleeping", "놀기"],
  friend: {
    name: "지윤",
    hate: ["바퀴벌레", "매미"],
  },
  greeting: function () {
    console.log(
      `안녕하세요, 제 이름은 ${this.name}이고요, 키는 ${this.height}입니다.`
    );
  },
};

let me = {
  ...me1,
  ...me2, //둘다 name이 존재하기 떄문에 이런 경우에는 아래에 있는 걸로 나온다!
  gender: "F",
};

console.log(me);
console.log(me.name);
me.greeting();

//실습 ---------------------
const word1 = "abc";
const word2 = "xyz";

const wordArr = [...word1, ...word2];

const wordArr2 = (word1 + word2).split(""); // 워드1 워드2를 합친다음 이걸 하나하나 쪼개주기!

const wordArr3 = word1.split("").concat(word2.split("")); //concat 안에는 문자열 ㄴㄴ 각자 배열로 만들어서 concat을 이용해 합치기!

console.log(wordArr);
console.log(wordArr2);
console.log(wordArr3);

// 2. 구조 분해 할당
// 2-1. 배열의 구조 분해 할당

const arr5 = ["tomato", "kiwi", "banana"];
const [val1, kiwi, banana] = arr5; //위치가 중요한거임!
console.log(val1);
// let val1 = arr5[0];
// let kiwi = arr5[1];
// let banana = arr5[2];

const arr6 = ["빨강", "주황", "노랑", "분홍"];
const [red, orrnge, , pink] = arr6; // 노랑<<을 할당 시켜주고 싶지 않으면 ,<빈자리!>, 해서 그냥 빈자리로 두묜댐.
// 요소보다 선언된 변수의 갯수가 많아도
// error가 발생하지 않아요! undefined!
const [v1, v2, v3 = "default", v4, v5 = "green"] = arr6; //이렇게 값을 줄 수도 잇지요

console.log(pink);
console.log(v5);

// 변수교환
let value = "second";
let value2 = "first"; //두개의 값을 서로 바꿔주고시픔!

let temp = value;
value = value2;
value2 = temp;

console.log(value);
console.log(value2);

// 구조 분해 할당을 이용해서 교환하기

value = "second";
value2 = "first"; //두개의 값을 서로 바꿔주고시픔!

[value, value2] = [value2, value];
console.log(value);
console.log(value2);

// 2-2. 오브젝트의 구조 분해 할당

let obj = {
  tittle: "제목",
  content: "내용",
  num: 0,
};
console.log(obj.tittle); // . =  ~의 라고 생각하면 편함
console.log(obj["tittle"]); //대괄호 접근법 쓸때는 대괄호 안에 변수이름을 쓰지만 ""로 감싸줘야함
// console.log(tittle); -> not defined

const { num, content, tittle } = obj; //object인 경우에는 순서보다 이름이 중요하다!
console.log(num);
console.log(content);
console.log(tittle);
// const {t1,c1, n1} = obj  키 이름이 없으니까 불가
// key와 다른 이름으로 할당하고 싶은 경우엔
const { tittle: t2, content: c2, num: n2 } = obj; // 키 이름: 내가 쓰고싶은 변수의 이름!
console.log(t2);

const { key5, key2, ...obj2 } = {
  //key5,2를 제외한 나머지들이 obj에 저장됨 ...은 펼치는 기능 뿐만 아니라 모아주는 기능도 가능
  key1: "v1",
  key2: 2,
  key3: "v3",
  key4: "v4",
  key5: 5,
};
console.log(key5, key2);
console.log(obj2);

// ...rest
function test(...val) {
  //함수에서도 전개연산자로 매개변수를 받을 수 있음
  const [a, b, c, ...rest] = val;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(rest);
}

test(1, 2, 3, 4);

// quiz
// 매개 변수가 몇 개 들어오든 합해주는 함수 addNumber

function addNumber(...a) {
  // 배열로 들어옴
  // const [...rest] =  val;
  // 배열로 값을 하나씩 뺴서 전부 더해주기!

  // let sum = 0; //변수 초기화
  // for (let i = 0; i < a.length; i++) {
  //   sum += i;
  // }
  // -> 자꾸 0 나옴

  arr1.forEach((el) => {
    //for of 문 처럼 el은 요소 자체에 접근을 해줌
    sum = sum + el;
  });
  return sum;

  //   console.log(a);
  //   console.log(sum);
}

console.log(addNumber(1, 2, 3, 4, 5));

function introduce(name, like = "빵", hate, gootAt) {
  console.log(`내 이름은 ${name}입니다.`);
  console.log(`좋아하는 것은 ${like}입니다.`);
  console.log(`싫어하는 것은 ${hate}입니다.`);
  console.log(`저는 ${gootAt}을 잘합니다.`);
}
introduce("a", "b", "c", "d", "e"); //이건 가능 근데 ("a", "b", "c", , "e"); 이렇게 빈값은 불가능!
