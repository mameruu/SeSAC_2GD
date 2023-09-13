import { useSelector } from "react-redux";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list).filter(
    (el) => el.done === true
  );
  return (
    <>
      <h1>DoneLisst</h1>
      {/* 참일때 */}
      {list.length === 0 && <span>할 일을 해주세요 !!</span>}
      <ul>
        {list.map((el) => {
          return <li key={el.id}> {el.text}</li>;
        })}
      </ul>
    </>
  );
}
