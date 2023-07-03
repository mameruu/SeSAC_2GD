console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.URL);

// getELementById
console.log(document.getElementById("red"));
//html은 순서대로 읽혀서 바디 아래에 넣거나 헤드에
// 쓰고 싶으면 defer 속성을 사용하면 된다.
// 만약 밑에 넣는 경우에능  html이 큰 경우에는 로딩이 조금 느릴 수 있음.
// 디퍼 쓸 경우에는 꼭 외부 문서 어쩌고를 링크시켜줘야함.
console.log(document.getElementById("green"));
//따옴표로 안 감싸면 변수를 찾는 거임.

//getELementsByClassName
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("pink")[1]);
//이놈은 배열같은 형태로 저장되어 있으니까 전부 다 나옴
//그런 경우에 하나만 뽑고 싶다면?! 인덱스번호를 주묜댐 ㅋㅋ

//getELementsByTagName
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByTagName("div")[5]);

//getELementsByName
console.log(document.getElementsByName("id"));
//이세키도 접근하고 싶으면 대괄호 접근

// querytSelector
// css에서 사영했던 선잭자를 이용해서 요소 선택!
// 선택자와 일치하는 첫번째 요소를 반환
console.log(document.querySelector(".pink"));
console.log(document.querySelector(".others"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("div"));
// 여러개 있어도 가장 먼저 나오는 놈을 하나만 선택해준다!!
console.log(document.querySelector("[name='id']"));
// 내부에 작은 따옴표로 할거면 밖은 큰따옴표
// 내부에 큰따옴표로 할거면 밖은 작은 따옴표 서로 반대되게!!
console.log("==========");

// querySelectiorAll
const divs = document.querySelectorAll("div");
console.log(divs);

const pinks = document.querySelectorAll(".pink");
console.log(pinks);
console.log(pinks[0]);
console.log(pinks[1]);
console.log(pinks[2]);
console.log(pinks[3]);

for (let i = 0; i < pinks.length; i++) {
  console.log(pinks[i]);
}

// for of문 사용해보자!!
for (let pink of pinks) {
  //변수를 하나 만들어줘야함~
  console.log(pink);
}

//여러개를 선택하는 어쩌고들은 요소를 배열처럼 반환하기 떄문에
//인덱스로 접근하거나 아니면 for of를 써야한다아
