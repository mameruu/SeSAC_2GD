import { useState } from "react";
// const [스테이트이름, 스테이트변경함수] = useState(초기값)
// const [state, setState] = useState(초기값);
// 컴포넌트의 현재 상태 값은 state 라는 변수에 들어있고
// state를 변경하고 싶으면 setState 함수를 이용해서 변경할 수 있다.
// 여기서 state와 setState의 이름은 마음대로 지정할 수 있다.
function ColorFontState() {
  const [text, setText] = useState("검정색 글씨");
  const [color, setColor] = useState("black");
  const [opacity, setOpacity] = useState(1);
  //   function red() {
  //     setText = "빨간색 글씨";
  //     setColor = "red";
  //   }
  //   function blue() {
  //     setText = "파란색 글씨";
  //     setColor = "blue";
  //   }

  // 리턴만 한줄에 적으면 끝나는거.
  return (
    // const styleV = {
    //   color: "black",
    //  color: {"black"}  -> 이렇게 안 적으니까 {color} 가 아닌거임!
    // };
    <>
      <h1 style={{ color: color, opacity: opacity }}>{text}</h1>
      <button
        onClick={() => {
          setColor("red");
          setText("빨간색 글씨");
        }}
      >
        빨간색
      </button>

      <button
        onClick={() => {
          setColor("blue");
          setText("파란색 글씨");
        }}
      >
        파란색
      </button>
      <button
        onClick={() => {
          const newOpacity = opacity == 1 ? 0 : 1;
          setOpacity(newOpacity);
        }}
      >
        {opacity == 1 ? "사라져라" : "보여라"}
      </button>
    </>
  );
}
export default ColorFontState;

// import { useState } from "react";

// function Practice230830_2() {
//   const [text, setText] = useState("검정색 글씨");
//   const [color, setColor] = useState("black");
//   const [opacity, setOpacity] = useState(1);
//   return (
//     <>
//       <h1
//         style={{
//           color: color,
//           opacity: opacity,
//         }}
//       >
//         {text}
//       </h1>
//       <button
//         onClick={() => {
//           setColor("red");
//           setText("빨간색 글씨");
//         }}
//       >
//         빨간색
//       </button>

//       <button
//         onClick={() => {
//           setColor("blue");
//           setText("파란색 글씨");
//         }}
//       >
//         파란색
//       </button>
//       <button
//         onClick={() => {
//           const newOpacity = opacity == 1 ? 0 : 1;
//           setOpacity(newOpacity);
//         }}
//       >
//         {opacity == 1 ? "사라져라" : "보여라"}
//       </button>
//     </>
//   );
// }

// export default Practice230830_2;
