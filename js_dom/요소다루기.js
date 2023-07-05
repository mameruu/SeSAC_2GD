const div1 = document.getElementById("div1"); //# 쓰면 안댐 아이디 이름으로 찾는 중이니까
/*
1.태그 내부 사용
-innerText :요소 안의 텍스트를 가져오거나 수정
-innerHTML :요소 안의 '코드'를 가져오거나 수정
-textContent :innerText처럼 텍스트 정보 표시

- text나 content는 ntt 코드 써도 문자열로 나오고 html일 경우에만 설정이 된다.
*/

console.log(div1.textContent);
console.log(div1.innerText);
console.log(div1.innerHTML);

div1.innerText = "여기는 <b>첫번째</b> div 태그입니다! &hearts";
div1.innerHTML = "   여기는 <b>첫번째</b> div 태그입니다! &hearts  ";
console.log(div1.innerText);
div1.textContent = "   여기는 <b>첫번째</b> div 태그입니다! &hearts   ";
console.log(div1.textContent);

/*
2.속성
-setAttribute() :속성값을 설정하는 매소드
-getAttribute() :속성값을 가져와서 보여주기
점(.)으로 접근하고 속성값도 변경할 수 있음.
*/

//매소드로 속성에 접근후 변경
const naver = document.getElementById("naver");
const pooh = document.querySelector("#pooh");

naver.setAttribute("href", "http://www.google.com");
naver.innerText = "구글";
console.log(pooh.getAttribute("src"));
// 점으로 접근후 변경
console.log(pooh.src);
console.log(pooh.alt);
pooh.alt = "푸 사진입니다!!!";

/*
3.css 지정
*/

const h1 = document.querySelector("h1");
const list = document.querySelectorAll("li");

// 3-1 style속성사용
// for (let li of list) {
//   console.log(li);
//   li.style.backgroundColor = "pink";
//   li.style.color = "white";
//   li.style.fontSize = "1.3rem";
// }

//3-2 classlist 사용
console.log(h1.classList);
h1.classList.add("add-h1");
// h1.classList.remove("add-h1");
console.log(h1.classList.contains("add-h1"));
// h1.classList.toggle("add-h1"); //잇으면제거업으면생성

// if (h1.classList.contains("add-h1")) {
//   h1.classList.remove("add-h1");
// } else {
//   h1.classList.add("add-h1");
// }
// h1.classList.toggle("add-h1");

//li태그(4개)에 friends클래스 추가해보기

// const newul = document.querySelector("ul");
// const newli = document.querySelectorAll("li");

// newul.setAttribute("id", "class");
for (let el of list) {
  el.classList.add("friends");
}
//미리 class에 css를 넣어주고잇어야 바로적용댐.

//4. 요소 생성, 추가, 삭제, 접근
//요소에 접근하기
const friends = document.getElementById("friends");
const tigger = document.getElementById("tigger");
// console.log(friends);
// console.log(tigger); 잘 나오나 안나오나 확인하깅

//자식 노드에 접근
console.log("-------자식노드접근-----");
console.log(friends.children); //.children하면 배열 형식으로 보여줌
console.log(friends.children[0]);

//부모 노드에 접근
console.log("-----부모 노드 접근 -----");
console.log(tigger.parentNode);

//형제 노드에 접근
console.log("----형제 노드 접근 ----");
console.log(tigger.previousElementSibling); //이전형제 =이요르
console.log(tigger.nextElementSibling); //다음형제 =피글렛
// console.logt(tigger.nextElementSibling.nextElementSibling); //매소드 체이닝처럼 연결해서도 가능

// 4-1. 요소생성=====
const container = document.querySelector(".container");
const p = document.createElement("p");
p.innerText = "추가한 p";
p.style.fontWeight = "bold";
p.style.backgroundColor = "red";
//화면에 안보임 이유!! 화면에 붙여주지 안항서 그래서 이제 붙여줄고임

// 4-2. 요소생성=====

//요소를 추가하과 싶으면 추가하고 싶은 요소를 선택해줘야함.
container.append(p); //저장한 변수를 가져다가 붙이는 거여서 따옴표 붙이면 안댐!
//맨 마지막에 붙는 놈

const p2 = document.createElement("p");
p2.innerText = "P2";
const p3 = document.createElement("p");
p3.innerText = "p3";
p2.classList.add("p-2");
p3.classList.add("p-3");
container.prepend(p2); //맨 위에 붙는놈
container.append(p3);

const h2 = document.createElement("h2");
h2.innerText = "추가된 h2";
h1.before(h2);

const h3 = document.createElement("h3");
h3.innerText = "추가된 h3";
h1.after(h3);

// appendChild 사용
const p4 = document.createElement("p");
p4.innerText = "p4";
p4.classList.add("p-2");

const p5 = document.createElement("p");
p5.innerText = "p5";
p5.classList.add("p-3");

// container.append(p4, p5, "안녕하세요");
// container.appendChild(p4, p5);

//실습 피글렛어쩌고

// const pg1 = document.createElement("p");
// pg1.innerText = "피글렛 앞에 있을 거야";
// pg1.classList.add("friends");
// const pg2 = document.createElement("p");
// pg2.innerText = "나도 앞에 잇을 거야";
// pg2.classList.add("frineds");
// container.appendChild(pg1  개틀림 하하 시발

const div = document.createElement("div");
const img = document.createElement("img");
const span = document.createElement("span");

span.innerHTML = '안녕~~ 나는 <b style="color:pink;">피글렛</b>이야!!';
img.setAttribute("src", "../css/img/piglet.png");
img.alt = "피글렛";

div.append(img, span);
container.append(div);

// 4-3. 요소 삭제 =====
// remover, removeChild

//이요르 글자를 지워볼게용
const firstli = document.querySelector("li"); //순서대로 하나만 선택해주는거니까 이렇게 해줘도 첫번쨰 li 선택된다!
// firstli.remove();
friends.removeChild(firstli);
