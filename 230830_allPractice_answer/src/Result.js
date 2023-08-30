function Result(props) {
  console.log(props);
  const { fruit, background, color, content } = props.data;

  // const test = {
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };
  // const { a, b } = test;
  // a 에는 1이 들어가고, b에는 2가 들어가기 때문

  // const fruit = props.fruit;
  // const background = props.background;
  // const color = props.color;
  // const content = props.content;
  // 구조분해
  // const { fruit, background, color, content } = props;

  // const fruit = props.data.fruit
  // const background = props.data.background.......
  // { data: { fruit: '', .......} }

  return (
    <div style={{ display: "block" }}>
      <img src={`${fruit}.png`} width={100} height={100} />

      <div
        style={{
          padding: "10px",
          marginTop: "10px",
          backgroundColor: background,
          color,
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default Result;
