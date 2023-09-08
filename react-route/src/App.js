import { Route, Routes } from "react-router-dom";
import Profile from "./page/Profile";
import Board from "./page/Board";
//export default 면 (위)형식으로 아니면 (아래)처럼 임포트해주기~
import { Index } from "./page/Index";
import NotFound from "./page/NotFound";
import BoardDetail from "./page/BoardDetail";

function App() {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <a href="/profile">프로필</a>
          </li>
          <li>
            <a href="/board">게시판</a>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/board/:boardID" element={<BoardDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
