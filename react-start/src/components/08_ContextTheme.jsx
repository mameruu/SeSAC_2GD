import { useState } from "react";
import ContextComp from "./08_ContextComp";
import "../styles/context.css";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ContextTheme() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <h4> contxtTheme</h4>
      {isDark ? "다크모드입니다" : "라이트모드입니다"}
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        {/* 하위어쩌고들에게 isdark와 setisdark를 쓸수있게 만드러줌
        안에있는 파일들한텡서 선언한 props 제거 가능! */}
        <ContextComp />
      </ThemeContext.Provider>
    </>
  );
}
