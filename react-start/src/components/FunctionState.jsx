import { useState } from "react";

export default function FunctionState() {
  //   let apple = "사과";
  //   function inEng() {
  //     const content = document.querySelector(".state .apple");
  //     content.innerText = "apple";
  //     apple = "apple";
  //     console.log(apple);
  //   }
  //   return (
  //     <div className="state">
  //       <div className="apple">사과</div>
  //       <div>{apple}</div>
  //       <button onClick={() => inEng()}> 영어로 바꾸기 </button>
  //     </div>
  //   );
  /*  
state 이용 방법
*/
  //   const [apple, setApple] = useState("사과");
  //   return (
  //     <div>
  //       <div>{apple}</div>
  //       <button onClick={() => setApple("apple")}>영어로 변경</button>
  //     </div>
  //   );
  /*  
누르면 한글->영어, 영어->한글 변하기 
*/
  //   function changeLang() {
  //     const apple = document.querySelector(".state div");
  //     apple.innerText === "사과"
  //       ? (apple.innerText = "apple")
  //       : (apple.innerText = "사과");
  //   }
  //   return (
  //     <div className="state">
  //       <div>사과</div>
  //       <button onClick={() => changeLang()}>언어 변경</button>
  //     </div>
  //   );
  /*  
state 이용 방법 (한글->영어, 영어->한글)
*/
  const [ShowEnglish, setShowEnglish] = useState(true);
  return (
    <div>
      <div>{ShowEnglish ? "apple" : "사과"}</div>
      <button onClick={() => setShowEnglish(!ShowEnglish)}>
        {ShowEnglish ? "한글" : "영어"}로 변경
      </button>
    </div>
  );
}
