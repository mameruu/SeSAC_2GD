import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ContextMain() {
  const data = useContext(ThemeContext);
  // usecontext를 이용해서 context 안에있는 값을 가져올코임
  // data = {isDark: f/t, setIsDark:f=>}
  // 구조 분해 할당을 이용해서~ (아래)
  const { isDark } = useContext(ThemeContext); // = data(위에서 선언 해줬으니까!)
  return (
    <mian
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>main 안녕하세용?</h1>
    </mian>
  );
}
