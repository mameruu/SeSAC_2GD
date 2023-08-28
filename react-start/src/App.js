import UseJSX from "./components/UseJSX.js"; //function 전에 임포트 해줘야함~~ 모아서써주기!
import FirstPractice from "./components/practice/FirstPractice.js"; //function 전에 임포트 해줘야함~~ 모아서써주기!
import ClassCom from "./components/ClassCom.js";
import FunctionState from "./components/FunctionState.jsx";

function App() {
  return (
    <div>
      <UseJSX></UseJSX>
      <FirstPractice />
      <ClassCom />
      <FunctionState />
    </div>
    //이걸 쓰기 위해서 import 시켜주기!
  );
}

export default App;
