// import { useRef } from "react";

// function mathQuizState() {
//   const oplist = ["+", "-", "*", "/"];
//   const inputRef = useRef(null);
//   //   math.round -> 반올림 해도 ㄱㅊ
//   const num1 = Math.floor(Math.random() * 10);
//   const num2 = Math.floor(Math.random() * 10);

//   const opIndex = Math.round(Math.random() * 2);
//   const op = oplist[opIndex];

//   const calculateResult = () => {
//     if (op == "+") return num1 + num2;
//     else if (op == "-") return num1 - num2;
//     else if (op == "*") return num1 * num2;
//     else if (op == "/") return num1 / num2;
//     return 0;
//   };

//   const result = calculateResult;
//   const calculate = () => {
//     // console.log(inputRef.current.value);
//     if (inputRef.current.value == result) alert("정답");
//     else alert("오답");
//   };

//   return (
//     <div>
//       <span>
//         {num1} {op} {num2}
//       </span>
//       <br />
//       <input ref={inputRef} type="text"></input>
//       <br />
//       <button onClick={calculate}>정답 제출</button>
//     </div>
//   );
// }

// export default mathQuizState;

import { useRef } from "react";

function Practice230901_2() {
  const opList = ["+", "-", "*"];
  const inputRef = useRef(null);
  const num1 = Math.round(Math.random() * 10); // 3.5465467864
  const opIndex = Math.round(Math.random() * 2);
  const op = opList[opIndex];
  const num2 = Math.round(Math.random() * 10);
  const calculateResult = () => {
    // eval() -> 권장하는 친구 x
    // eal ( 문자열 ) -> 그 문자열을 계산해준다.
    return eval(num1 + op + num2); // eval("8 + 2")
    // if (op == "+") return num1 + num2;
    // else if (op == "-") return num1 - num2;
    // else if (op == "*") return num1 * num2;

    // return 0;
  };
  const result = calculateResult();
  const calculate = () => {
    if (inputRef.current.value == result) alert("정답");
    else alert("오답");

    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div>
      <span>
        {num1} {op} {num2}
      </span>
      <br />
      <input ref={inputRef} />
      <button onClick={calculate}>제출</button>
    </div>
  );
}
export default Practice230901_2;

// 접근하는법
// 1.일단 고정된 값들을 넣고 alert창 띄우기 하기
// 2. 랜덤 뽑기
