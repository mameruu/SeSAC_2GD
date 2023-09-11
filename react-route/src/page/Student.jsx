import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
export default function Student() {
  const Div = styled.div`
    background-color: beige;
  `;
  const spanStyle = {
    color: "green",
    fontWeight: "700",
  };
  //   파라미터 /:name 가져오기
  const { name } = useParams();

  //   쿼리 스트링 가져오기
  const [nameParams, setNameParams] = useSearchParams();
  const queryName = nameParams.get("name");

  const navi = useNavigate();
  return (
    <Div>
      <p>
        학생의 이름은 <span style={spanStyle}>{name}</span> 입니다.
      </p>

      {queryName && (
        <p>
          실제 학생의 이름은 <span style={{ color: "red" }}>{queryName} </span>{" "}
          입니다.
        </p>
      )}
      <button onClick={() => navi(-1)}>이전 페이지로</button>
    </Div>
  );
}
