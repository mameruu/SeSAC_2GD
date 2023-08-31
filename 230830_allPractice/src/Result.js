function Result(props) {
  //구조분해
  // const { fruit, bgcolor, color, text } = props.data;

  // const fruit = props.data.fruit
  // const bgcolor = props.data.bgcolor....
  // {data :{fruit:'', .....}} 이런 식으로 넘어온다!

  const fruit = props.fruit;
  const bgcolor = props.bgcolor;
  const color = props.color;
  const text = props.text;
  return (
    <div style={{ display: "block" }}>
      <img src={`${fruit}.png`} width={100} height={100} />

      <div
        style={{
          padding: "10px",
          marginTop: "10px",
          backgroundColor: bgcolor,
          color,
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default Result;
