import logo from "./logo.svg";
import "./App.css";
import styled, { keyframes } from "styled-components";
function App() {
  const rotate = keyframes;
  const AppDiv = styled.div`
    text-align: center;
  `;
  const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
  const AppLinkA = styled.a`
    color: #61dafb;
  `;
  const AppLogImg = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: ${rotate} infinite 20s linear;
    // 위에 const 만들고 animatino 주면 돌아가야 하는다ㅔ 안돌아감 css 문제인가?
  `;

  return (
    <AppDiv className="App">
      <AppHeader className="App-header">
        <AppLogImg src={logo} className="App-logo" alt="logo" />{" "}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLinkA
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></AppLinkA>{" "}
      </AppHeader>
    </AppDiv>
  );
}
export default App;
