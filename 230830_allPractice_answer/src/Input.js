function Input(props) {
  const setData = props.setData;
  // const setContent = props.setContent;
  return (
    <>
      내용 :{" "}
      <input
        type="text"
        onChange={(e) => {
          // setContent(e.currentTarget.value);

          const content = e.currentTarget.value;
          console.log(content);
          setData((data) => {
            return { ...data, content };
          });
        }}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;
