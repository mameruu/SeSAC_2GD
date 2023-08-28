import { useState } from "react";

export default function PracticeState() {
  const [number, setNumber] = useState(0);
  let variable = 0; //요기서 초기화!

  function setVariable() {
    variable = variable + 1;
    console.log(`변수(variable) : ${variable} / 스테이트(number):${number}`);
    //변수는 왜 안늘어날까요?
    // -> 컨포넌트가 바껴서 랜더링을 하면 다시처음부터 읽음 변수는 0으로 초기화를 시켜주니까 변수는 계쏙 1
    // state는 새로고침이 되더라도 상태값을 계쏙 보존하고 있기 때문에 이전 값에서 +1 이 된다!
  }
  return (
    <div>
      <div>
        {number}
        {number > 7 ? "🎈" : "😊"}
      </div>
      <button
        onClick={() => {
          setNumber(number + 1);
          setVariable();
        }}
      >
        +1
      </button>
      <button onClick={() => setNumber(number - 1)}>-1</button>
    </div>
  );
}
