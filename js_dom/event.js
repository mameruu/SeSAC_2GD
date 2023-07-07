const btn1 = document.querySelector(".btn--black");
const btn2 = document.querySelector(".btn--green");
const btn3 = document.querySelector(".btn--blue");
const btn4 = document.querySelector(".btn--red");

btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭하셨군요.");
});

btn1.addEventListener("mouseover", function () {
  btn1.style.backgroundColor = "grey";
});

// btn2
const container = document.getElementById("container");
btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerText = "안녕";
  div.style.backgroundColor = "pink";
  container.append(div);
});

//btn3
function chageColor() {
  const divs = document.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.backgroundColor = "sktblue";
  }
  //맨 마지막 요소를 빨강으로 변경
  divs[divs.length - 1].style.backgroundColor = "red";
}

btn3.addEventListener("click", chageColor);

//btn4
function chageBtColor() {
  this.style.backgroundColor = "yellow"; //자기자신 선택하려면 this
  this.style.color = "white";
  btn4.addEventListener("click", chageBtColor);
}

// click 외의 많은 동작들
console.log(window);
window.addEventListener("scroll", () => {
  console.log(scroll);
  if (scrollY > 900) {
    document.querySelector(".pos").style.opacity = "1";
    //스크롤 이벤트는 윈도우에 걸어야함
  }
});

const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function (event) {
  console.log(event);
});

input.addEventListener("keydown", function (event) {
  console.log(event.key);
  console.log(event.code);
  // 방향키 위 아래 왼쪽 오른쪽을 누르면
  // 각각 누를때마다 업 다운 레프트 라이트
  if (event.key === "ArrowUp") {
    console.log("up");
  } else if (event.key === "AroowDown") {
    console.log("down");
  } else if (event.key === "ArrowLeft") {
    console.log("left");
  } else if (event.key === "ArrowRight") {
    //else 하면 안된느 이유 다른 키들도 다 right값을 받을테니까.
    console.log("right");
  } else {
    console.log("others");
  }
});

//변경 이벤트
const chginput = document.getElementById("change-input");
chginput.addEventListener("input", () => {
  console.log("변경중!!");
  let div = document.querySelector(".box");
  div.innerHTML = chginput.value;
});
// input :현재 변경사항이 존재하는 순간을 계쏙 인식
// 실시간으로 바로 반영할 수 있음.
// shift,ctrl.등 입력값이 변하지 않는다면 이벤트 발생 x

chginput.addEventListener("change", () => {
  // 'change' :input에 변경이 일어나고
  // 다른 요소를 클릭해서 focus on 시키면 이벤ㄴ트 발생함
  console.log("변경되었어요!");
});

// 폼이 제출되는 이벤트
// 'submit' form ㅔ 적용하는 이벤트
const todoForm = document.querySelector("#todo-form");
const todos = document.querySelector(".todos");
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //폼이 실제로 제출되지 않도록 이벤트를 막는 것.
  // 새로고침 방지 (새로고침 하묜 )
  const todoInput = document.querySelector('[name="todo"]');
  console.log(todoInput.value);

  const todo = todoInput.value;

  const li = document.createElement("li");
  //<li></li>
  // li.textContent = todo;
  li.append(todo);
  // <li>안녕하세요</li>
  todos.append(li);

  todoInput.value = "";
  //만약에 제출할 때 빈칸이나 공백 문자가 들어왔을 때는 추가하고 싶지 않다면?

  // const i = todoInput.value;
  // if (i === "") { }
});
