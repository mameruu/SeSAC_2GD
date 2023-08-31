import logo from "./logo.svg";
import "./App.css";

function App() {
  function test(text) {
    console.log(text);
  }
  const testExec = () => {
    test("안녕");
  };

  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
  };
  return (
    <div>
      <a href="#" onClick={handleClick}>
        a 태그입니다.
      </a>
      {/* 무조건 한번 감싸줘야한다! */}
      <button onClick={testExec}>버튼</button>
      {/* <button onClick={()=>{test("안녕")}}>버튼</button> */}
    </div>
  );
}

export default App;
