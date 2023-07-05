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
