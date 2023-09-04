import FunctionProps from "./FunctionProps";

export default function PropsMap({ arr }) {
  /* { name: "peach", krPrice: 10000, count: 5 },
  { name: "strawberry", krPrice: 14000, count: 1 },
  { name: "pear", krPrice: 5000, count: 6 },
  { name: "apple", krPrice: 10000, count: 10 }, */

  console.log(arr);
  //   const numArr = [10, 20, 30, 40, 50];
  //   const newArr = numArr.map((data) => {
  //     return data * 2;
  //   });
  return (
    <>
      <h4>가격표</h4>

      {/* name. number, krprice, */}
      {/* <FunctionProps
        name={arr[0].name}
        krpice={arr[0].krPice}
        number={arr[0].count}
      />
      <FunctionProps
        name={arr[1].name}
        krpice={arr[1].krPice}
        number={arr[1].count}
      />
      <FunctionProps
        name={arr[2].name}
        krpice={arr[2].krPice}
        number={arr[2].count}
      />
      <FunctionProps
        name={arr[3].name}
        krpice={arr[3].krPice}
        number={arr[3].count}
      /> */}

      {/* index자리는 매개변수이기떄문에 마음대로 줘도 ㄱㅊ 이름 i 이런걸로 해도댐ㅎㅎ */}
      {arr.map((data, index) => {
        return (
          <FunctionProps
            name={data.name}
            krPrice={data.krPrice}
            number={data.count}
            key={index}
          />
        );
      })}
    </>
  );
}
