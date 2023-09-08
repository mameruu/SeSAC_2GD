import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          {/* <a href="/profile">프로필</a> */}
          <Link to="/profile">프로필</Link>
          {/* link 태그는 새로고침 되면서 이동이 아니고 스무스하게 ->a 태그는 새로고침댐
          그래서 link 태그를 만이 사용한다! */}
        </li>
        <li>
          <a href="/board">게시판</a>
        </li>
      </ul>
    </nav>
  );
}
