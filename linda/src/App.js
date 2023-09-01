import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ConditionalOne from "./ex/ConditionalOne";
import ConditionalTwo from "./ex/ConditionalTwo";
import TimerComponent from "./ex/TimerComponent";
import PracticeTimerState from "./ex/PracticeTimer";

// function App() {
//   function test(text) {
//     console.log(text);
//   }
//   const testExec = () => {
//     test("안녕");
//   };

//   const handleClick = (e) => {
//     console.log(e);
//     e.preventDefault();
//   };
//   return (
//     <div>
//       <a href="#" onClick={handleClick}>
//         a 태그입니다.
//       </a>
//       {/* 무조건 한번 감싸줘야한다! */}
//       <button onClick={testExec}>버튼</button>
//       {/* <button onClick={()=>{test("안녕")}}>버튼</button> */}
//     </div>
//   );2

// }
function App() {
  // const [see, setSee] = useState(true);
  // return (
  // 이건 뭐죠?? 물어보기
  // <div>
  //   <button
  //     onClick={() => {
  //       setShow(!show);
  //     }}
  //   >
  //     클릭
  //   </button>
  //   {show ? (
  //     <ConditionalOne txt={"1번 컴포넌트"} />
  //   ) : (
  //     <ConditionalTwo txt={"2번 컴포넌트"} />
  //   )}
  // </div>
  // );
  //
  //
  // 1. 억지로 && 사용?? -------------
  // const [see, setSee] = useState(true);
  // return (
  //   <div style={{ textAlign: "center" }}>
  //     {see && <ConditionalOne str={"hi"} />}
  //     {!see && <ConditionalOne str={"bye"} />}
  //     <button onClick={() => setSee(!see)}>
  //       {see && "hi"}
  //       {!see && "bye"}
  //     </button>
  //   </div>
  // );
  //
  //
  // 2. 삼항 연산자 사용
  const [str, setStr] = useState("hi");
  const changeStr = () => {
    str === "hi" ? setStr("bye") : setStr("hi");
    return (
      <div style={{ textAlign: "center" }}>
        {str === "hi" ? (
          <ConditionalOne str={str} />
        ) : (
          <ConditionalTwo str={str} />
        )}
        <button onClick={() => changeStr()}>{str}</button>
      </div>
    );
  };
}

// practice timer ---------------
// function App() {
// const [show, setShow] = useState(true);
// return (
//   <div>
// <button
//         onClick={() => {
//           setShow(!show);
//         }}
//       >
//         클릭
//       </button>
//       {show && <PracticeTimerState />}
//     </div>
//   );
// }

export default App;
