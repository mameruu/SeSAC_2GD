const flowers = ["rose", "sunflower", "tulip"];

function getFlowers(idx) {
  //예외 처리를 항상 염두해두기
  if (idx >= flowers.length || idx < 0) return "잘못된  index";
  return flowers[idx];
}

// es6 에서 module을 내보내는 방법
export { flowers, getFlowers };
console.log(flowers[0]);
console.log(getFlowers(0));
