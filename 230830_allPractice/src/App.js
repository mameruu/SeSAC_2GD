import { useState } from "react";
import Input from "./Input";
import Result from "./Result";
import Select from "./Select";

function App() {
  // set~~ 함수들은 select와 input에 props로 전달
  // state  변수들은 result 에 props로 전달
  const [fruit, setFruit] = useState("apple");
  const [bgcolor, setBgcolor] = useState("black");
  const [color, setColor] = useState("white");
  const [text, setText] = useState("안녕하세요");
  //이렇게 넣어줘두 괜찬은디 그냥 우차피 동일한 키 넣어서 생략할수잇게댐.
  // const data={
  //   fruit:fruit,
  //   bgcolor:bgcolor,
  //   color:color,
  //   text, 이렇게 생략 가능.!
  // }
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Select
          setFruit={setFruit}
          setBgcolor={setBgcolor}
          setColor={setColor}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input setText={setText} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result
          // {/*data={(fruit, bgcolor, color, text)} / */}
          fruit={fruit}
          bgcolor={bgcolor}
          color={color}
          text={text}
        />
      </div>
    </>
  );
}

export default App;
