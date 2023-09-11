import { Styled, styled } from "styled-components";
import { Link } from "react-router-dom";

export default function PracticeNav() {
  const Nav = styled.nav`
    width: 100%;
    display: flex;
    height: 70px;
    background-color: skyblue;
    justify-content: end;
  `;
  const MyLink = styled(Link)`
    color: olive;
    text-decoration: none;
    margin: 0 0.5rem;
    font-size: 18px;
    &:hover {
      color: white;
    }
  `;
  return (
    <Nav>
      <MyLink to="/student/sean">학생</MyLink>
      <MyLink to="/student/condingon">코딩온</MyLink>
      <MyLink to="/student/new?name=jisoo">쿼리</MyLink>
    </Nav>
  );
}
