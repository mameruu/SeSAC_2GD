import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ContextFooter() {
  const data = useContext(ThemeContext);
  // const { isDark } = useContext(ThemeContext);
  // const { setIsDark } = useContext(ThemeContext);
  const { isDark, setIsDark } = data;
  return (
    <footer
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "white",
      }}
    >
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        모드 변경
      </button>
    </footer>
  );
}
