import { useRef } from "react";
function DOMComponent() {
  // const 변수명 = useRef(null) ->에러를 방지하기 위해 초기값으로는 Null을 넣음
  // < ~~~ ref={변수명} />
  const inputRef = useRef(null);
  const getInput = () => {
    const input = document.getElementById("input");
    // dom에서 input을 선택해 값을 가져오는 역할
    console.log("input value:", input.value);
  };
  const getInput2 = () => {
    if (!inputRef.current) return;

    // inputRef.current =  <input type="text" id="input" ref={inputRef} /> 를 의미!
    console.log("input value:", inputRef.current?.value); //ref가 null이라면 함수가 실행이안되게 막아줌 ㅇ_ㅇ 아몰흐겟다
    inputRef.current.focus();
  };
  getInput2();
  return (
    <div>
      <input type="text" id="input" ref={inputRef} />
      <button onClick={getInput}>버튼</button>
      <button onClick={getInput2}>버튼2</button>
    </div>
  );
}
export default DOMComponent;
