import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import HandlerExState from "./ex/Handler_ex";
// import ColorFont from "./ex/ColorFont";
// import DOMComponent from "./DOMComponent";
// import RefUseState from "./ex/RefUse";
// import MathQuizState from "./ex/mathQuiz"; //컴퍼넌트 무조건 대문자로 시작해야함 ㅎ 오우노
// import RefVarState from "./ex/RefVar";
// import ConditionalOneState from "./ex/ConditionalOne";
// import ConditionalTwoState from "./ex/ConditionalTwo";
// import EffectComponent from "./ex/EffectComponent";
import PracticeTimerState from "./ex/PracticeTimer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <HandlerExState /> */}
    {/* <ColorFont /> */}
    {/* <DOMComponent />
    <RefUseState />
    <MathQuizState />
    <RefVarState />
    <ConditionalOneState />
    <ConditionalTwoState />
    <EffectComponent />*/}
    <PracticeTimerState />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
