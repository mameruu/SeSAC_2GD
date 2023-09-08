import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ContextHeader() {
  const data = useContext(ThemeContext);
  const { isDark } = useContext(ThemeContext);
  // data = {isDark:false, setIsDark:()=>{}}
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>header</h1>
    </header>
  );
}
