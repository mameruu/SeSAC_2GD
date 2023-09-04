import UseJSX from "./components/UseJSX.js"; //function 전에 임포트 해줘야함~~ 모아서써주기!
// import FirstPractice from "./components/practice/FirstPractice.js"; //function 전에 임포트 해줘야함~~ 모아서써주기!
// import ClassCom from "./components/ClassCom.js";
// import FunctionState from "./components/FunctionState.jsx";
// import ClassState from "./components/ClassState.jsx";
// import PracticeState from "./components/practice/PracticeState.js";
// import FunctionProps from "./components/FunctionProps.jsx";
// import PracticeProps from "./components/practice/PracticeProps.jsx";
// import { ClassProps, ClassProps2 } from "./components/practice/ClassProps.jsx";
// import PropsMap from "./components/PropsMap.jsx";
// import PracticeMap from "./components/practice/PracticeMap.jsx";
// import MapChild from "./components/practice/MapChild.jsx";
// import PororoObj from "./components/practice/Pororo.jsx";
// import ChangeObj from "./components/practice/ChangeObj.js";
import BasicCss from "./components/BasicCss.jsx";

function App() {
  const dataArr = [
    { name: "peach", krPrice: 10000, count: 5 },
    { name: "strawberry", krPrice: 14000, count: 1 },
    { name: "pear", krPrice: 5000, count: 6 },
    { name: "apple", krPrice: 10000, count: 10 },
  ];
  return (
    <div>
      {/* <UseJSX></UseJSX> */}
      {/* <FirstPractice />
      <ClassCom />
      <FunctionState /> */}
      {/* <ClassState />
      <PracticeState /> */}
      {/* 문자열은 그냥 넘겨주고 변수나 숫자인 경우엔 {}중괄호 안에 넣어주기! */}
      {/* <FunctionProps name="사과" krPrice={5000} number={10} />
      <FunctionProps name="샤인머스켓" krPrice={30000} number={3} />
      <FunctionProps name="복숭아" />
      <FunctionProps>여기가 children입니다!</FunctionProps>
      <PracticeProps />
      <ClassProps name="뽀로로" nickname="사고뭉치" color="#0186cb" />
      <ClassProps2 name="루피" nickname="공주" bgColor="#ed9095" />
      <PropsMap arr={dataArr} />
      <PracticeMap />
      <MapChild />
      <PororoObj /> */}
      <BasicCss color={"blue"} />
    </div>
    //이걸 쓰기 위해서 import 시켜주기!

    //린다리더님과. ..
    // react.Fragment
    //리엑트 에서만 존재하는 태그!! 태그 늘리기 싫을떄 사용할 수 잇음 ㅇㅇ 하위 아이들을 그룹화 시키겠다 라는 의미!
    // return <React.Fragment></React.Fragment>
    // 이걸 많이 사용하니카 <> 꺽쇠만 넣었을때도 저걸 실행하게 만듬!

    // const {a,b} = test1
    // 같은 구조분해지만 test1은 a1:"1" 이라는 값을 키의 값을 가져오겠다는 의미
    // const [a,b] =  test2
    // 어몰흐겟음 잊어버리래. 자바문법임~

    //프롭스
    //자식은 알 수 없지만..,. 부모가 자식을 부를때 특정 값을 넣어서 부르는 것이 프롭스(?)

    //기본적으로 두번씩 실행되니카 > console.log(어쩌고) 실행하면 두번씩 나옴 그러므로 스트링..어쩌고 삭제하묜댐ㅋㅋ
  );
}

export default App;
