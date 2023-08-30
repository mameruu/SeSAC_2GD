function Input(props) {
  const setText = props.setText;
  return (
    <>
      내용 :{" "}
      <input
        type="text"
        onChange={(e) => {
          setText(e.currentTarget.value);
        }}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;
