// promise
// resolve, reject; 순으로 작성하면 됩니다! 그런데
// const promise = new Promise((success, reject) => {
//   console.log("Promise의 기능을 바로 수행");
//   setTimeout(() => {
//     success("작업 성공 시, 결과를 success 로 전달 해줍니다!");
//   }, 2000);
// });

// promise.then((value) => {
//   console.log(value);
// });

//위의 코드처럼 resolve 대신에 다른 변수이름을 썼다면 아래에도 resolve 대신에 내가 써준 변수 이름으로 함수를 만들어줘야 합니다!

//resolve 와 reject 가 변수긴 하지만 말씀드린것처럼 콜백 함수 이기 때문에 인자에 전달한 이름과 내부에서 사용하는 함수의 이름을 맞춰 주어야 하고,
//관례상 resolve reject 이름을 지켜주는 것이 좋습니당! (편집됨)
