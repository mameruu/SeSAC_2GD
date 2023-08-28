// function FunctionProps(props) {
// 1. props 객체로 받아서, props.Key로 접흔해서 사용하는방법

import { Children } from "react";

//   props = {
//     name: "",
//     krPrice: number,
//     number: number,
//   };
//   return (
//     <div>
//       <h5>{props.name}</h5>
//       <p>
//         {props.number} 개에 {props.krPrice} 원(${props.krPrice / 1000})
//       </p>
//       <hr />
//     </div>
//   );

/* 
2. props 객체로 받고 구조분해할당 이용
.props 를 하고싶지 않을때!
*/
//   const { name, krPrice, number } = props;
//   //let name = props.name
//   return (
//     <div>
//       <h5>{name}</h5>
//       <p>
//         {number} 개에 {krPrice} 원(${krPrice / 1000})
//       </p>
//       <hr />
//     </div>
//   );
// }

// 3. props를 매개변수로 받는 것이 아닌 바로 받는 방법
// function FunctionProps({ name, number, krPrice }) {
//   return (
//     <div>
//       <h5>{name}</h5>
//       <p>
//         {number} 개에 {krPrice} 원(${krPrice / 1000})
//       </p>
//       <hr />
//     </div>
//   );
// }
// export default FunctionProps;

//4. children과 defaultProps 사용

function FunctionProps(props) {
  const { name, number, krPrice, children } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {krPrice}원 (${krPrice / 1000})
      </p>
      <p>{children}!!</p>
      <hr />
    </div>
  );
}
FunctionProps.defaultProps = {
  name: "fruit",
  krPrice: 10000,
  number: 5,
};
export default FunctionProps;
