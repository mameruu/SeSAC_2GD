function Select(props) {
  const setData = props.setData;
  // const setFruit = props.setFruit;
  // const setBackground = props.setBackground;
  // const setColor = props.setColor;

  return (
    <>
      과일 :
      <select
        onChange={(e) => {
          // 전개연산자 => 전개하겠다.

          // data = { fruit: 'apple', background: 'black', color: 'white', content: 'text'}
          // {...data} = { fruit: 'apple', background: 'black', color: 'white', content: 'text'}
          setData((data) => {
            return { ...data, fruit: e.currentTarget.value };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
        <option value="orange">오렌지</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          // setBackground(e.currentTarget.value);
          console.log(e.currentTarget.value);
          // setData((data) => {
          //   return { ...data, background: e.currentTarget.value };
          // });

          const background = e.currentTarget.value;
          console.log(background);
          setData((data) => {
            return { ...data, background };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색 :
      <select
        onChange={(e) => {
          // setColor(e.currentTarget.value);
          const color = e.currentTarget.value;
          console.log(color);
          setData((data) => {
            return { ...data, color };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
    </>
  );
}

export default Select;
