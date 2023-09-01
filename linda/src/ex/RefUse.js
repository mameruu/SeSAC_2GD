import { useRef, useState } from "react";

function RefUseState() {
  const [color, setColor] = useState("white");
  const inputRef = useRef(null);
  //   const getInput = () => {
  //     const input = document.getElementById("input");
  //     inputRef.current.focus();
  //   };
  //   getInput();
  const changeColor = () => {
    if (!inputRef.current) return; //inputRef가 널이면!
    setColor(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div style={{ backgroundColor: color }}>
      <h1>실습1</h1>
      <input type="text" id="input" ref={inputRef} />
      <br />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
export default RefUseState;
