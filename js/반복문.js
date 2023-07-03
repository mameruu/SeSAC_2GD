/*
for문
for(변수 초기화; 조건식(어디까지 증가 감소); 증감){
    반복할 코드 작성
}

index++; inedex + 1; index+=1;
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//재선언이 아니고 그냥 다른아이임 for문에서만 도는 놈이라.
for (let i = 0; i < 10; i += 2) {
  console.log(`${i + 1}번째`);
}
// 1 ~ 5 까지 출력해보긩 ㅋㅋ=========

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 1; i < 6; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 1부터 n까지 더하는 프로그램 만들기.

let n = 10; //55
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i; // sum+=1;
}

console.log(sum);

//배열과 for문을 같이 써봐여. ^__^
let fruits = ["사과", "망고", "수박", "바나나"]; // [0]은 위치를 말하는 거고 길이는 4!!
for (let i = 0; i < fruits.length; i++) {
  console.log(`i like ${fruits[i]}`);
}

//배열에 들어가 있는 Number 형 데이터의 합 구하기.
let numArr = [100, 200, 99, 58, 77, 23];
let numSum = 0;

for (let i = 0; i < numArr.length; i++) {
  numSum = numSum + numArr[i];
}
console.log(numSum);

// if문과 for문 같이 쓰기
/*
 if(){
    for(){}
 }
 for(){
    fi(){}
 }*/

for (i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//위의 코드보다 아래 코드가 더 좋음!! 왜냐면 더 간결하니카아 ㅋㅋ
for (i = 0; i < 21; i += 2) {
  console.log(i);
}

//for 실습 ==============
for (i = 0; i < 10001; i++) {
  if (i % 13 === 0) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

// for 실습 : 2중 포문
// 2-9단 출력하기

/* for (let i =초기값; 1 < 범위; i++){
  for()
} 
*/

for (let i = 2; i < 10; i++) {
  console.log(`-----${i}단-------`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i}x${j} = ${i * j}`);
  }
}

//while

let n1 = 1; //while 내부에서 사용할 변수의 초기화
//while(조건){
//조건이참일떄 실행할 문장 }

while (n1 <= 5) {
  console.log(n1);
  n1++;
}

//10부터 6까지만 출력
let n2 = 10;
while (n2 >= 6) {
  console.log(n2);
  n2--;
}

//while과 if를 사용해서 1-10까지의 짝수 출력

// let n3 = 1;
// if (n3 % 2 == 0) {
//   while (n3 >= 10) {
//     console.log(n3);
//     n3++;
//   }
// }
//내가한거 틀림.

let n3 = 1;
while (n3 < 11) {
  if (n3 % 2 === 0) {
    console.log(n3);
  }
  n3++;
}

// while과 무한루프
let n4 = 1;
while (true) {
  console.log(n4);
  n4++;
  if (n4 > 10) {
    // = n4===11
    break;
  }
}
/*
confirm
확인 -> true 반환
취소 -> false 반환
let n5 = 0;
while (confirm("계속 진행?")) {
  n5++;
  alert(n5 + "번째 alert");
}  */

//continue
// 1-10 홀수의 합 구하기
let sum2 = 0;
for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum2 = sum2 + i;
}
console.log(sum2);

//실습: 0~100의 숫자 중에서 2또는 5의 배수 총합 구하기

// let sum3 = 0;
// for (let k = 0; k <= 100; k++) {
//   if (k % 2 === 0 || k % 5 === 0) {
//     continue;
//   }
//   sum3 = sum3 + k;
// }
// console.log(sum3);

//1. for문으로
let sum3 = 0;
for (i = 0; i < 101; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum3 = sum3 + i;
  }
}
console.log(sum3);

// 2. while

let sum4 = 0;
let n6 = 0;
while (n6 < 101) {
  if (n6 % 2 === 0 || n6 % 5 === 0) {
    sum4 += n6;
  }
  n6++;
}
console.log(sum4);
