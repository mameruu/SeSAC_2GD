import { useCallback, useEffect, useState } from "react";

export default function UseCallback() {
  const [number, setNumber] = useState(0);
  const [isTure, setIsTrue] = useState(true);

  const func1 = () => {
    console.log(`number : ${number}🥺`);
  };

  //   메모리에 저장할때 number의 상태값까지 저장한다고 생각하면 된다
  // 그렇기때문에 불러올때도 계쏙 값이 0이 되는거!
  // number 라는 값을 변경하고 싶다면 []안에 number를 해주면 된다.
  const func2 = useCallback(() => {
    console.log(`number : ${number}😹`);
  }, [number]);
  useEffect(() => {
    console.log("함수 1 변경");
  }, [func1]);
  return (
    <>
      <h4> useCallback</h4>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber.apply(e.target.value);
        }}
      ></input>
      <br />
      <button
        onClick={() => {
          func1();
          func2();
        }}
      >
        함수호출
      </button>
      <button
        onClick={() => {
          setIsTrue(!isTure);
        }}
      >
        {isTure.toString()}
      </button>
    </>
  );
}
