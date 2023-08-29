// 하나의 div 요소만 만들어주세요.
// • JSX 문법을 사용해서 만든 div 요소에 인라인 스타일로 margin-top : 32px
// / background-color: skyblue 를 적용해주세요.
// • “Hello, first exercise” 라는 문자열을 helloStr 이라는 변수로 선언해 주세요~!
// • JSX 문법을 이용해서 새롭게 만든 div 요소의 컨텐츠로 helloStr 의 문자열이 담
// 기도록 만들어 주세요!
// • div 요소를 클릭하면, alert 으로 “클릭 됨” 이라는 메시지를 띄워 주세요

// export default
function FirstPractice() {
  function myFunc() {
    alert("클릭 됨");
  }
  const helloStr = "Hello, first exercise";
  //   소괄호 안써도 댐! 태그 하나니카 ㅎ ㅎ
  return (
    <div
      onClick={myFunc}
      //    onClick={()=> alert("클림 됨")}  함수 따로 안 만들어주고 이런 방법도 ㄱㅊ
      style={{ marginTop: "32px", backgroundColor: "skyblue" }}
    >
      {/* 변수로 인식! */}
      {helloStr}
    </div>
  );
}

export default FirstPractice;
