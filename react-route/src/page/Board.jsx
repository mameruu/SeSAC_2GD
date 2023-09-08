import { Link } from "react-router-dom";

export default function Board() {
  return (
    <>
      <h4>게시판 페이지 입니다.</h4>
      <Link to="/board/1">1번 게시글</Link>
      <Link to="2">2번 게시글</Link>
    </>
  );
}
