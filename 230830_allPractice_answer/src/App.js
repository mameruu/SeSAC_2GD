import { useState } from "react";
import Input from "./Input";
import Result from "./Result";
import Select from "./Select";

function App() {
  const [data, setData] = useState({
    fruit: "apple",
    background: "black",
    color: "white",
    content: "text",
  });
  // const [fruit, setFruit] = useState("apple");
  // const [background, setBackground] = useState("black");
  // const [color, setColor] = useState("white");
  // const [content, setContent] = useState("text");

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Select
          setData={setData}
          // setFruit={setFruit}
          // setBackground={setBackground}
          // setColor={setColor}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input
          setData={setData}
          // setContent={setContent}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result
          data={data}
          // fruit={fruit}
          // background={background}
          // color={color}
          // content={content}
        />
      </div>
    </>
  );
}

export default App;
