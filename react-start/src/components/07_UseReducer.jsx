import { useReducer, useState } from "react";

export default function UseReducer() {
  const [number, setNumber] = useState(0);
  //   const [스테이트, 디스패치] = useReducer(리듀서, 스테이트 초기값);
  const reducer = (state, action) => {
    // action = {type:'~', payload:~}
    switch (action.type) {
      case "deposit": //예금: 기존 state 값에서 number를 더한다
        return state + action.payload;
      case "withdraw": //출금 : 기존 state 값에서 number를 빤다
        return state - action.payload;
      default:
        return state;
      // 스위치 문에서는 브레이크 걸어야 하는데 리턴이 오면 함수 끝나기 때문에 안걸어도 ㄱㅊ
    }
  };
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h4>useReducer</h4>
      <p>잔고 {money} 원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdraw", payload: number });
        }}
      >
        출금
      </button>
    </>
  );
}
