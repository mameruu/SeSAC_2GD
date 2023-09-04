import { useState } from "react";

export default function ChangeObj({ objArr }) {
  //   const { item, name } = objArr;
  //   //  1.  map을 사용하지 않고 바꾸끼
  //   const [index, setIndex] = useState(0);
  //   let obj = objArr[index];
  //   function changeProfile() {
  //     if (index === objArr.length - 1) {
  //       setIndex(0);
  //     } else {
  //       setIndex(index + 1);
  //     }
  //   }
  //   return (
  //     <div>
  //       <h3>이름: {obj.name}</h3>
  //       <div>나이: {obj.age}</div>
  //       <div>별명: {obj.nickName}</div>
  //       <button onClick={() => changeProfile()}>멤버 바꾸기</button>
  //     </div>
  //   );

  // 2. with map
  const [idx, setIdx] = useState(0);

  return (
    <>
      {objArr.map((data, index) => {
        return (
          index === idx && (
            <div key={index}>
              <div>이름: {data.name}</div>
              <div>나이: {data.age}</div>
              <div>별명: {data.nickName}</div>
            </div>
          )
        );
      })}
      <button
        onClick={() => {
          idx === objArr.length - 1 ? setIdx(0) : setIdx(idx + 1);
        }}
      >
        멤버 바꾸기
      </button>
    </>
  );
}
