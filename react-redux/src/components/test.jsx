import { useDispatch, useSelector } from "react-redux";

export default function Test() {
  const number = useSelector((state) => {
    return state;
  });
  // 위를 줄인게 이거! const number = useSelector((state)=>(state))
  const dispatch = useDispatch();
  return (
    <>
      <h2>store의 값 가져오기 (useSelector 이용)</h2>
      <p>store에 저장되어 있는 state는 {number}</p>
      <h2> store의 state 변경(useDispatch 이용)</h2>
      <button onClick={() => dispatch({ type: "증가" })}>+</button>
      <button onClick={() => dispatch({ type: "감소" })}>-</button>
      {/* 타입이라는 키는 꼭 지켜야하지만(넣어줘양하지만) 거기 안에 들어가는 문자열은 내맘대로 ㄱㅏ능 */}
    </>
  );
}
