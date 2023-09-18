import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/modules/todo";

export default function TodoList() {
  const list = useSelector((state) => state.todo.list); //-> combine된 todo 안에 list
  //   list = [{done:false},{done:true},{done:false}]
  const todoList = list.filter((el) => el.done === false);
  const input = useRef();
  const dispatch = useDispatch();
  const nextId = useSelector((state) => state.todo.nextID);

  return (
    <>
      <h1>TodoList 💩</h1>
      <div>
        <input
          type="text"
          ref={input}
          // onKeyPress={} -> 해주면 버그 사라지는데 이거.. 곧 사라지는 거라 별로 안좋음!
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.nativeEvent.isComposing === true) {
              //엔터했을때
              dispatch(create({ id: nextId, text: input.current.value }));
              input.current.value = ""; // -> 자꾸 버그나서 난 추가함 e.nativeEvent.isComposing === true  이것두!
            }
          }}
        ></input>
        <button
          onClick={() => {
            dispatch(create({ id: nextId, text: input.current.value }));
            input.current.value = "";
          }}
        >
          추가
        </button>
      </div>
      <ul>
        {/* el은 오브젝트 하나하나 그래서 el.~ 으로 접근 */}
        {todoList.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button onClick={() => dispatch(done(el.id))}>완료</button>
            </li>
          );
        })}
        {/* 키값으로 아이디를 돌리고 index는 사용하지앟을코임 */}
      </ul>
      {todoList.length === 0 && <span>오늘 할 일 끝 🥳🎉</span>}
    </>
  );
}
