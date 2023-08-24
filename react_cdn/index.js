// function HelloWorldButton() {
//   // isclick 변수 set~ 함수라고 생각하면 편함!
//   const [isClick, setIsClick] = React.useState(false);
//   //   let isClick = true;
//   const text = isClick ? "클릭이 되었군요!" : "hello, react world";
//   //    button
//   //    button > div > span으로 구조 변경

//   return (
//     <button onClick={() => setIsClick(!isClick)}>
//       <div>
//         <span>{text}</span>
//       </div>
//     </button>
//   );
//   //   return React.createElement(
//   //     "button",
//   //     {
//   //       //   onClick: () => {
//   //       //     console.log(
//   //       //       "버튼이 눌리면 표시되는 onclick,react 에서의 onclick 은 c 가 대문자네요! "
//   //       //     );
//   //       // },
//   //       onClick: () => setIsClick(!isClick), //값을 바꿔줌
//   //     },
//   //     //"hello, react world!"

//   //     React.createElement("div", null, React.createElement("span, null, text"))
//   //   );
// }

// // const element = React.createElement;
// const DOMContainer = document.querySelector("#app");
// const root = ReactDOM.createElement(DOMContainer);
// // root.render(element(HelloWorldButton));
// root.render(element(<HelloWorldButton />));

//위에 안대가지그. 리더님이 슬랙애ㅔ 보내주신고
function HelloWorldButton() {
  const [isClick, setIsClick] = React.useState(false);
  const text = isClick ? "클릭이 되었군요!" : "hello, react world!";
  //   button
  // button > div > span으로 구조 변경
  return React.createElement(
    "button",
    {
      onClick: () => setIsClick(!isClick),
    },
    React.createElement("div", null, React.createElement("span", null, text))
  );
}
const element = React.createElement;
const DOMContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(DOMContainer);
root.render(element(HelloWorldButton));
