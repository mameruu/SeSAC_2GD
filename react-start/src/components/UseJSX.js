//꼭 똑같지 않아도 동작은 하는데 보통은 똑같이 지어줌!
//딱 하나만 익스포트 시켜줄거니까 export default
export default function UseJSX() {
  /* 1. inline style 적용해보기
     - inline 에 바로 속성 적용
     - object 선언 후 적용 
*/
  //   //선언은 return 밖에!
  //   const divStyle = {
  //     width: "100px",
  //     height: "100px",
  //     backgroundColor: "gold",
  //     border: "1px solid #444",
  //     marginLeft: ".5rem",
  //     marginTop: ".5rem",
  //     display: "inline-block",
  //   };
  //   return (
  //     <div>
  //       <div
  //         style={{ color: "white", width: "100px", backgroundColor: "tomato" }}
  //       >
  //         first
  //       </div>
  //       {/* 오브젝트이기떄문에 ,로 그리고 100px 이것도 ""로 묶어줘야함 */}
  //       <div style={divStyle}>second</div>
  //       <div style={divStyle}>third</div>
  //     </div>
  //   );

  /* 2. JS 문법 써보기*/
  //   let isShow = false;
  //   let str;
  //   if (isShow === true) {
  //     //if를 쓰고 싶으면 이렇게 위에다가 선언하고 변수를 가져다가 써야함!
  //     str = "true입니다";
  //   }
  //   return (
  //     <div>
  //       {/* {true일때 보이는 div} */}
  //       <div>{isShow ? "true일 때 보임" : ""}</div>
  //       <div>{isShow && "true일 때 보임"}</div>
  //       {/* {true일때 보이는 div} */}
  //       <div>{isShow === false ? "false일 때 보임" : ""}</div>
  //       <div>{!isShow && "false일 때 보임"}</div>
  //       {/*  if문과 for 문은 jsx 문법 내에서 사용 금지!*/}
  //       <div>{str}</div>
  //     </div>
  //   );

  /* 3. on click 사용 */
  const myName = "진형";
  //매개변수 없음
  function myFunc() {
    alert(`hi my name is ${myName}`);
  }
  //매개변수 있음
  function addNum(a, b) {
    alert(a + b);
  }
  return (
    <div>
      <span onClick={myFunc}>hi</span>
      <span onClick={() => addNum(5, 8)}>8 plus 5</span>
      <span onClick={() => myFunc()}>hi 2</span>
      {/* 괄호 쓰고 싶으면 화살표 함수 만들어서 써주기~! */}

      {/* 아무것도 하지 않아도 함수 호출  */}
      {/* <span>{myFunc()}</span>
      <span>{myFunc}</span> */}
    </div>
  );
}
