import UseJSX from "./components/UseJSX.js"; //function 전에 임포트 해줘야함~~ 모아서써주기!
// import FirstPractice from "./components/practice/FirstPractice.js"; //function 전에 임포트 해줘야함~~ 모아서써주기!
// import ClassCom from "./components/ClassCom.js";
// import FunctionState from "./components/FunctionState.jsx";
// import ClassState from "./components/ClassState.jsx";
// import PracticeState from "./components/practice/PracticeState.js";
import FunctionProps from "./components/FunctionProps.jsx";
import PracticeProps from "./components/practice/PracticeProps.jsx";
import { ClassProps, ClassProps2 } from "./components/practice/ClassProps.jsx";

function App() {
  return (
    <div>
      <UseJSX></UseJSX>
      {/* <FirstPractice />
      <ClassCom />
      <FunctionState /> */}
      {/* <ClassState />
      <PracticeState /> */}
      {/* 문자열은 그냥 넘겨주고 변수나 숫자인 경우엔 {}중괄호 안에 넣어주기! */}
      <FunctionProps name="사과" krPrice={5000} number={10} />
      <FunctionProps name="샤인머스켓" krPrice={30000} number={3} />
      <FunctionProps name="복숭아" />
      <FunctionProps>여기가 children입니다!</FunctionProps>
      <PracticeProps />
      <ClassProps name="뽀로로" nickname="사고뭉치" color="#0186cb" />
      <ClassProps2 name="루피" nickname="공주" bgColor="#ed9095" />
    </div>
    //이걸 쓰기 위해서 import 시켜주기!
  );
}

export default App;
