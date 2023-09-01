import { useEffect } from "react";

export default function TimerComponent() {
  useEffect(() => {
    // setTimeout(()=>{}, 1000)
    // setInterval(함수, 밀리sec) -> 밀리 sec 마다 함수  아아아아ㅏㅇ아악시발
    const timer = setInterval(() => {}, 1000);

    // setInterval 함수를 이용하면 반복이 되는 객체를 전달
    // clearSetInterval(객체) 반복을 해제한다.

    return () => {
      clearInterval(timer); //이걸 해줘야 끝남. 아시발존나모르겟음
    };
  }, []);
  return <>timer</>;
}
