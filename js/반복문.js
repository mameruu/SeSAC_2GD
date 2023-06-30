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

//
